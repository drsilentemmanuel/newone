"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateTenantProfileInsights } from "@/ai/flows/generate-tenant-profile-insights";
import { generateLandlordProfileInsights } from "@/ai/flows/generate-landlord-profile-insights";
import type { TenantProfileData } from "./tenant-profile-form";
import type { LandlordProfileData } from "./landlord-profile-form";
import { Loader2, Sparkles } from "lucide-react";

type AiInsightsProps = 
  | { profileType: "tenant"; data: TenantProfileData }
  | { profileType: "landlord"; data: LandlordProfileData };

interface InsightsOutput {
  insights: string;
  trends?: string;
  suggestedMatches: string;
}

export function AiInsights(props: AiInsightsProps) {
  const [insights, setInsights] = useState<InsightsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateInsights = async () => {
    setIsLoading(true);
    setError(null);
    setInsights(null);

    try {
      let result;
      if (props.profileType === 'tenant') {
        const { personalStatement, ...restOfProfile } = props.data;
        const tenantProfile = `Statement: ${personalStatement}. Profile: ${JSON.stringify(restOfProfile)}`;
        result = await generateTenantProfileInsights({
          tenantProfile,
          landlordPreferences: props.data.landlordPreferences
        });
      } else {
        const { propertyDescription, idealTenantDescription, ...restOfProfile } = props.data;
        const landlordProfile = `Profile: ${JSON.stringify(restOfProfile)}. Properties: ${propertyDescription}`;
        result = await generateLandlordProfileInsights({
          landlordProfile,
          tenantRequirements: idealTenantDescription
        });
      }
      setInsights(result);
    } catch (e) {
      setError("Failed to generate insights. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Analysis</CardTitle>
          <CardDescription>
            Click the button to generate insights, trends, and potential matches based on your profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGenerateInsights} disabled={isLoading}>
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</>
            ) : (
              <><Sparkles className="mr-2 h-4 w-4" /> Generate Insights</>
            )}
          </Button>
        </CardContent>
      </Card>

      {error && <p className="text-destructive">{error}</p>}

      {insights && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{insights.insights}</p>
            </CardContent>
          </Card>
          {insights.trends && (
            <Card>
              <CardHeader>
                <CardTitle>Identified Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{insights.trends}</p>
              </CardContent>
            </Card>
          )}
          <Card>
            <CardHeader>
                <CardTitle>Suggested Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{insights.suggestedMatches}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
