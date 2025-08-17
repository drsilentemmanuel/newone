
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TenantPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">
            Tenant Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the landing page for Tenants. Content specific to tenants will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
