
"use client"

import { useState } from "react";
import { LandlordProfileForm } from "@/components/landlord-profile-form";
import { AiInsights } from "@/components/ai-insights";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { LandlordProfileData } from "@/components/landlord-profile-form";
import { useToast } from "@/hooks/use-toast";

export default function LandlordProfilePage() {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState<LandlordProfileData | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  const handleProfileUpdate = (data: LandlordProfileData) => {
    setProfileData(data);
    toast({
      title: "Profile Saved!",
      description: "You can now view your AI Insights."
    });
    setActiveTab("insights");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 font-headline">Landlord/Agent Profile</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">My Profile</TabsTrigger>
          <TabsTrigger value="insights" disabled={!profileData}>AI Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <LandlordProfileForm onProfileUpdate={handleProfileUpdate} />
        </TabsContent>
        <TabsContent value="insights" className="mt-6">
          {profileData ? <AiInsights profileType="landlord" data={profileData} /> : <p>Save your profile to generate AI insights.</p>}
        </TabsContent>
      </Tabs>
    </div>
  );
}
