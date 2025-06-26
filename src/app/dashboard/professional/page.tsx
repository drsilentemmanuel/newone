import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfessionalDashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">Property Professional Dashboard</h1>
        <p className="text-muted-foreground">Welcome! Manage your clients and properties efficiently.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Users className="w-8 h-8 text-accent mb-2" />
            <CardTitle>Manage Tenants</CardTitle>
            <CardDescription>View and manage tenant profiles and applications.</CardDescription>
          </CardHeader>
          <CardContent>
             <Button variant="secondary" disabled>Coming Soon</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Building className="w-8 h-8 text-accent mb-2" />
            <CardTitle>Manage Landlords</CardTitle>
            <CardDescription>Oversee landlord accounts and property portfolios.</CardDescription>
          </CardHeader>
           <CardContent>
             <Button variant="secondary" disabled>Coming Soon</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Briefcase className="w-8 h-8 text-accent mb-2" />
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Update your professional details and services.</CardDescription>
          </CardHeader>
           <CardContent>
            <Button asChild>
                <Link href="/dashboard/profile">Go to Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
            <CardTitle>Recent Enquiries</CardTitle>
            <CardDescription>No new enquiries to show right now.</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">New tenant and landlord enquiries will appear here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
