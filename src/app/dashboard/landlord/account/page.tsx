
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">My Account</h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Account</CardTitle>
          <CardDescription>This section is under construction. Soon you'll be able to manage your account details from here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}
