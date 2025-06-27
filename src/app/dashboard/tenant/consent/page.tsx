
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const consentItems = [
    { id: "c1", enquirer: "Seef Properties", logo: "/partners/seef.png", reason: "Rental Application", granted: true },
    { id: "c2", enquirer: "Rawson Property Group", logo: "/partners/rawson.png", reason: "Credit Check", granted: true },
    { id: "c3", enquirer: "Old Mutual", logo: "/partners/oldmutual.png", reason: "Tenant Screening", granted: false },
];

export default function ConsentManagementPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Consent Management</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Manage Data Sharing</CardTitle>
                    <CardDescription>You have full control over which verified agents and landlords can view your TPN profile.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label>Active Consents</Label>
                        <p className="text-sm text-muted-foreground">These organizations have been granted access to your profile.</p>
                    </div>
                    <div className="rounded-md border">
                        {consentItems.map((item, index) => (
                           <div key={item.id} className={`flex items-center justify-between p-4 ${index < consentItems.length - 1 ? 'border-b' : ''}`}>
                                <div className="flex items-center gap-4">
                                     <Avatar>
                                        <AvatarImage src={item.logo} alt={item.enquirer} data-ai-hint="company logo" />
                                        <AvatarFallback>{item.enquirer.substring(0,2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{item.enquirer}</p>
                                        <p className="text-sm text-muted-foreground">{item.reason}</p>
                                    </div>
                                </div>
                               <Switch defaultChecked={item.granted} />
                           </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
