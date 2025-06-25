import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, User, Building } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">Welcome back, John!</h1>
        <p className="text-muted-foreground">Here's an overview of your account. What would you like to do today?</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <User className="w-8 h-8 text-accent mb-2" />
            <CardTitle>Tenant Profile</CardTitle>
            <CardDescription>Create or manage your tenant profile to find your next home.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/dashboard/tenant-profile">
                Go to Tenant Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Building className="w-8 h-8 text-accent mb-2" />
            <CardTitle>Landlord Profile</CardTitle>
            <CardDescription>Manage your properties and find reliable tenants.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/dashboard/landlord-profile">
                Go to Landlord Profile <ArrowRight className="ml-2 h-4 w-4" />
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
