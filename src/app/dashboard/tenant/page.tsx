import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, User } from "lucide-react"

export default function TenantDashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">Tenant Dashboard</h1>
        <p className="text-muted-foreground">Welcome! Manage your tenancy from here.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <User className="w-8 h-8 text-accent mb-2" />
            <CardTitle>My Tenant Profile</CardTitle>
            <CardDescription>Create or manage your tenant profile to find your next home.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/dashboard/tenant-profile">
                Go to My Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

       <Card className="mt-8">
        <CardHeader>
            <CardTitle>Latest Activity</CardTitle>
            <CardDescription>No new activity to show right now.</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">Check back later for updates on profile views and messages.</p>
        </CardContent>
      </Card>
    </div>
  )
}
