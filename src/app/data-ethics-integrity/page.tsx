
import { Handshake, Scale, ThumbsUp, ShieldCheck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function DataEthicsIntegrityPage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
      <section className="container mx-auto text-center space-y-6">
        <div className="flex justify-center">
            <ShieldCheck className="h-20 w-20 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
          Data Ethics & Integrity
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Customer data is sacrosanct. We cherish the trust that is placed in us to protect the data owned by lenders and customers.
        </p>
      </section>

      <section className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <Image
                    src="/Data Privacy.png"
                    width={600}
                    height={600}
                    alt="Abstract data security concept"
                    className="rounded-lg shadow-xl border"
                    data-ai-hint="data security abstract"
                />
            </div>
            <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-primary pt-1"><Handshake className="h-7 w-7"/></div>
                    <div>
                        <h3 className="text-xl font-bold">Consent-driven Access</h3>
                        <p className="text-muted-foreground mt-1">We believe that the alternative lending ecosystem can only be scaled up in an environment of trust, which calls for transparency. Conscious consent is a mandatory step to proceed with our service.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-primary pt-1"><ShieldCheck className="h-7 w-7"/></div>
                    <div>
                        <h3 className="text-xl font-bold">Security by Design</h3>
                        <p className="text-muted-foreground mt-1">Proactive, preventive, end-to-end security is the default setting of our products. We conduct periodic vulnerability assessments and have robust threat detection systems.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-primary pt-1"><ThumbsUp className="h-7 w-7"/></div>
                    <div>
                        <h3 className="text-xl font-bold">Adherence to Standards</h3>
                        <p className="text-muted-foreground mt-1">We adhere to the Data Protection Act, Google’s policy guidelines, and are a member of the Data Security Council of Zimbabwe to maintain the highest global standards.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-20">
        <div className="container mx-auto">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Our Core Principles
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Confidentiality</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Allowing access to authorized users only through multi-layered security and multi-factor authentication.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Integrity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Ensuring data is not tampered with during collection, transmission, and storage.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Availability</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Ensuring data is available to each authorized user as and when they need it, reliably and securely.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>
    </div>
  );
}
