import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PiggyBank, WalletCards, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

const Feature = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-muted rounded-full p-3">
            {icon}
        </div>
        <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{children}</p>
        </div>
    </div>
);

export default function PaymentsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-full py-8">
            <Card className="w-full max-w-2xl text-center">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-headline">
                        Securely collect rent. For free.
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-left p-6">
                    <Feature icon={<PiggyBank className="h-6 w-6 text-primary" />} title="Get paid on time">
                        Automatic charges, reminders, and receipts make rent collection effortless. <Link href="#" className="text-primary hover:underline">Watch how it works.</Link>
                    </Feature>
                    <Feature icon={<WalletCards className="h-6 w-6 text-primary" />} title="Let tenants pay how they want">
                        Get paid via ACH, card, check, cash, or 3rd-party apps through or outside of TurboTenant.
                    </Feature>
                    <Feature icon={<ShieldCheck className="h-6 w-6 text-primary" />} title="Dependable security">
                        We use the same processes that big banks use to keep your payments secure.
                    </Feature>
                     <Button size="lg" className="w-full">GET STARTED</Button>
                </CardContent>
            </Card>
            <div className="mt-8 space-y-4 text-center">
                <p className="text-muted-foreground">
                    Landlords have collected over $4.3 billion and counting through TurboTenant.
                </p>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <p className="font-bold text-lg">REVIEWS.io</p>
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-0.5 text-yellow-400">
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                            <Star className="h-5 w-5 fill-current" />
                        </div>
                        <Link href="#" className="text-xs text-muted-foreground hover:underline">
                            Read our 979 reviews
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
