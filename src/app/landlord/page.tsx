
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandlordPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">
            Landlord Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the landing page for Landlords. Content specific to landlords will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
