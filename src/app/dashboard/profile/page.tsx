
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    // In a real app, this would clear the session/token
    toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
    });
    router.push("/");
  };
  
  const handleSaveChanges = () => {
      // In a real app, you would handle form submission here
      toast({
          title: "Profile Updated",
          description: "Your changes have been saved successfully.",
      })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">My Profile</h1>
        <p className="text-muted-foreground">View and manage your account details.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your name and phone number. Email and role cannot be changed.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="John Doe" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+263 12 345 6789" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" readOnly disabled />
              </div>
              <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Tenant" readOnly disabled />
              </div>
            </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Enter your new password below. Leave blank to keep the current password.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                </div>
            </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4 justify-between items-center">
            <Button variant="outline" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Button>
            <Button onClick={handleSaveChanges}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
