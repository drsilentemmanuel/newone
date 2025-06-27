
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { LogOut, Eye, EyeOff, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, type ChangeEvent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/user-context";

export default function ProfilePage() {
  const router = useRouter();
  const { toast } = useToast();
  const { avatar, setAvatar, userName, userEmail, role, logout } = useUser();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);

  const handleLogout = () => {
    logout();
    toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
    });
    router.push("/");
  };
  
  const handleSaveChanges = () => {
      // In a real app, you would handle form submission and avatar upload here
      if (previewAvatar) {
        setAvatar(previewAvatar);
        setPreviewAvatar(null);
      }
      toast({
          title: "Profile Updated",
          description: "Your changes have been saved successfully.",
      })
  }

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">My Settings</h1>
        <p className="text-muted-foreground">View and manage your account details.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your profile picture, name, and phone number. Email and role cannot be changed.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <Avatar className="h-24 w-24">
                <AvatarImage src={previewAvatar ?? avatar} alt="User Avatar" data-ai-hint="person avatar" />
                <AvatarFallback>{userName?.split(' ').map(n => n[0]).join('') ?? 'U'}</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="mr-2 h-4 w-4" />
                Change Picture
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                className="hidden"
                accept="image/png, image/jpeg"
              />
            </div>
            <div className="grid gap-6 flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue={userName} />
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+263 12 345 6789" />
                  </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={userEmail} readOnly disabled />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" value={role.charAt(0).toUpperCase() + role.slice(1)} readOnly disabled />
                </div>
              </div>
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
                    <div className="relative">
                      <Input id="newPassword" type={showNewPassword ? "text" : "password"} />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 right-1 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                      >
                        {showNewPassword ? <EyeOff /> : <Eye />}
                        <span className="sr-only">
                          {showNewPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <div className="relative">
                      <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} />
                       <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 right-1 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                        <span className="sr-only">
                          {showConfirmPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
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
