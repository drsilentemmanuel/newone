
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, ClipboardCheck } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PartnerCarousel } from "@/components/partner-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Zim TPN: Your Partner in Tenant Vetting
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Specialised systems for enhanced tenant selection, renewed confidence in cash flow, and straightforward legal compliance in Zimbabwe.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">Get Started Now</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/Gemini_Generated_Image_swidg9swidg9swid.png"
                width="600"
                height="600"
                alt="A confident property manager reviewing a report"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                data-ai-hint="property management"
              />
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section id="problem-solution" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                From Rental Stress to Success
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <Card className="flex flex-col justify-between border-destructive/50 bg-destructive/5">
                <Image
                  src="/Gemini_Generated_Image_9i81uk9i81uk9i81.png"
                  width={600}
                  height={400}
                  alt="Stressed landlord with paperwork"
                  className="aspect-video w-full overflow-hidden rounded-t-lg object-cover"
                  data-ai-hint="man frustrated paperwork"
                />
                 <CardHeader>
                  <CardTitle className="text-destructive">The Problem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground">
                    Grappling with the stress of managing rentals? The worry of finding good tenants, complex vetting, and rent collection can be overwhelming.
                  </p>
                   <blockquote className="border-l-4 border-destructive pl-4 italic text-muted-foreground">
                    "A bad tenant can mean months of lost rent and countless headaches. Who wants to inherit that problem?"
                  </blockquote>
                </CardContent>
              </Card>
              
              <Card className="flex flex-col justify-between border-accent/50 bg-accent/5">
                <Image
                  src="/Gemini_Generated_Image_i83g6ei83g6ei83g.png"
                  width={600}
                  height={400}
                  alt="Confident property manager using Zim TPN"
                  className="aspect-video w-full overflow-hidden rounded-t-lg object-cover"
                  data-ai-hint="man report tablet"
                />
                 <CardHeader>
                    <CardTitle className="text-accent">The Solution</CardTitle>
                  </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground">
                    Zim TPN brings simplicity and confidence with AI-powered tools to streamline tenant screening, secure cash flow, and ensure effortless compliance.
                  </p>
                  <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                    "A comprehensive Zim TPN report instantly flags payment history, saving you from potential financial loss."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <div className="space-y-3">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">A Comprehensive Toolkit for the Rental Market</h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      We help you manage risk, improve cashflow, and simplify compliance.
                      </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                      icon={<ShieldCheck className="h-8 w-8 text-primary" />}
                      title="Manage Risk"
                      description="Make informed decisions with comprehensive tenant screening and verification."
                  />
                  <FeatureCard
                      icon={<TrendingUp className="h-8 w-8 text-primary" />}
                      title="Improve Cashflow"
                      description="Ensure reliable tenants and consistent rent collection with our data-driven insights."
                  />
                  <FeatureCard
                      icon={<ClipboardCheck className="h-8 w-8 text-primary" />}
                      title="Simplify Compliance"
                      description="Navigate legal requirements with straightforward tools and up-to-date information."
                  />
                </div>
            </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">How It Works</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple, transparent process for both tenants and landlords.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
               <HowItWorksStep
                  step="1"
                  title="Create Your Profile"
                  description="Sign up and build your detailed profile. Tenants add their history, landlords list their properties."
                />
               <HowItWorksStep
                  step="2"
                  title="Get Verified"
                  description="Complete our verification process to build trust and stand out from the crowd."
                />
               <HowItWorksStep
                  step="3"
                  title="Connect & Transact"
                  description="Search, find, and connect with your perfect match. Securely manage applications and agreements."
                />
            </div>
          </div>
        </section>

        {/* Trust & Social Proof Section */}
        <section id="trust" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="w-full py-12 md:py-16 bg-primary text-primary-foreground rounded-lg">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                        The Trusted Source of Specialised Data
                        </h2>
                    </div>
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-12">
                        <StatItem value="23K+" label="Users" />
                        <StatItem value="3.4M+" label="Leases" />
                        <StatItem value="150K" label="Landlords" />
                    </div>
                </div>
            </div>

            <div className="mt-16">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Trusted by Leading Organizations
                    </h2>
                </div>
                <PartnerCarousel />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <Card className="text-left flex flex-col bg-card p-4 items-center text-center">
      <CardHeader className="p-2">
        {icon}
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-2">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </CardContent>
    </Card>
  );
}

function StatItem({ value, label }: { value: string; label: string; }) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <p className="text-5xl font-extrabold tracking-tighter">{value}</p>
      <p className="text-lg font-medium text-primary-foreground/80">{label}</p>
    </div>
  );
}

function HowItWorksStep({ step, title, description }: { step: string; title: string; description: string; }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
        {step}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
