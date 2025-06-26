import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building } from "lucide-react"

export default function LandlordDashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">Landlord Dashboard</h1>
        <p className="text-muted-foreground">Welcome! Manage your properties and tenants.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Building className="w-8 h-8 text-accent mb-2" />
            <CardTitle>My Landlord Profile</CardTitle>
            <CardDescription>Manage your landlord profile and property listings.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/dashboard/landlord-profile">
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
            <p className="text-sm text-muted-foreground">Check back later for updates on your listings.</p>
        </CardContent>
      </Card>
    </div>
  )
}
