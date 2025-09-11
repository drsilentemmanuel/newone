
import { Handshake, Scale, ThumbsUp, ShieldCheck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DataEthicsIntegrityPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 md:py-24">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Data Ethics & Integrity</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Customer data is sacrosanct. We cherish the trust that is placed in us to protect the data owned by lenders and customers.
        </p>
      </div>
      
      <Card className="mt-16">
        <CardContent className="p-8 prose prose-lg dark:prose-invert max-w-none mx-auto space-y-8">
            <section>
                <h2 className="flex items-center gap-3"><Handshake className="text-primary"/>Consent-driven Access</h2>
                <p>We believe that the alternative lending ecosystem can only be scaled up in an environment of trust between stakeholders, which calls for transparency. Consumers are presented with a prominent disclosure screen, and detailed information on why, how and what data is being collected and used. Conscious consent is a mandatory step to proceed with our service.</p>
            </section>

            <section>
                <h2 className="flex items-center gap-3"><ShieldCheck className="text-primary"/>Security by design</h2>
                 <p>Proactive, preventive, ‘end-to-end’ security is the default setting of our products. Keeping data secure is a priority for us, and this is reflected in the design of our products, from the start.</p>
                 <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-1.5 shrink-0"/>Data is collected, transmitted, stored and eventually purged in a highly secure manner.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-1.5 shrink-0"/>We are proactive. We conduct vulnerability assessments periodically and have robust threat detection systems.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-1.5 shrink-0"/>We take prevention seriously. Our multi-layered security architecture with multi-factor authentication ensures that risks are addressed before a potential security breach.</li>
                </ul>
                <div className="p-6 rounded-lg bg-muted/50 border mt-4">
                  <h3 className="font-semibold not-prose">Our products are equipped with the following features right from conception:</h3>
                  <ul className="mt-2 space-y-1">
                      <li><strong>Confidentiality</strong> - allowing access to authorized users only</li>
                      <li><strong>Integrity</strong> - ensuring data is not tampered with</li>
                      <li><strong>Availability</strong> - ensuring data is available to each user as and when they need it</li>
                  </ul>
                </div>
            </section>

             <section>
                <h2 className="flex items-center gap-3"><ThumbsUp className="text-primary"/>Adherence</h2>
                 <p>We believe that a commitment to privacy mandates that we maintain the highest global standards and protocols.</p>
                 <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-1.5 shrink-0"/>We adhere to the Data protection act and the Information Technology.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-1.5 shrink-0"/>We adhere to Google’s policy guidelines regarding data collection, processing and management.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-1.5 shrink-0"/>We are a member of the Data Security Council of Zimbabwe.</li>
                </ul>
            </section>
        </CardContent>
      </Card>

    </div>
  );
}
