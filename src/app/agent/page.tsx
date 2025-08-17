
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgentPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">
            Agent Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the landing page for Agents. Content specific to agents will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
