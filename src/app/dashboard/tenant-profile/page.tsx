"use client"

import { useState } from "react";
import { TenantProfileForm } from "@/components/tenant-profile-form";
import { AiInsights } from "@/components/ai-insights";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TenantProfileData } from "@/components/tenant-profile-form";

export default function TenantProfilePage() {
  const [profileData, setProfileData] = useState<TenantProfileData | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  const handleProfileUpdate = (data: TenantProfileData) => {
    setProfileData(data);
    toast({
      title: "Profile Saved!",
      description: "You can now view your AI Insights."
    })
    setActiveTab("insights");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 font-headline">Tenant Profile</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">My Profile</TabsTrigger>
          <TabsTrigger value="insights" disabled={!profileData}>AI Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <TenantProfileForm onProfileUpdate={handleProfileUpdate} />
        </TabsContent>
        <TabsContent value="insights" className="mt-6">
          {profileData ? <AiInsights profileType="tenant" data={profileData} /> : <p>Save your profile to generate AI insights.</p>}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Dummy toast function to avoid errors if useToast is not available here.
// In a real app, this might be handled by a context.
const toast = (options: {title: string, description: string}) => {
  console.log("Toast:", options.title, options.description);
};
