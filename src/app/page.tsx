
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, ClipboardCheck, CheckCircle2, Search, Users, FileText, Blocks, FileCheck2, CreditCard, UserCheck, History, BadgeDollarSign } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PartnerCarousel } from "@/components/partner-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* New Social Proof Section */}
        <section className="w-full bg-background">
          <div className="relative w-full">
            <Image
              src="/greatandbad.jpg"
              width={1920}
              height={600}
              alt="A comparison of a dilapidated living room and a clean, well-maintained living room."
              className="w-full h-auto object-cover max-h-[600px]"
            />
            <div className="absolute inset-0 grid grid-cols-2 items-center text-white font-bold p-4 md:p-8">
              <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                      Maroja
                  </h2>
              </div>
              <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                      Maroja Manyama
                  </h2>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto flex flex-col items-center text-center space-y-4 px-4 md:px-6 py-8 md:py-12">
            <p className="text-lg md:text-xl font-medium text-gray-800 bg-yellow-400 px-4 py-2 rounded-md inline-block">
                7 out of 10 landlords recommend Trust Stamp® to identify great tenants*
            </p>
            <div className="pt-2">
                <Button asChild size="lg" className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 rounded-full px-10 h-14 text-lg font-bold shadow-md transition-transform hover:scale-105">
                <Link href="/dashboard/landlord/new-enquiry">Screen Today</Link>
                </Button>
            </div>
            <p className="text-xs text-muted-foreground">
                *ZimStats survey
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-3 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Trust Stamp benefits property managers and tenants
                </h2>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-2">
                {/* Property Owner Card */}
                <Card className="flex flex-col p-6 items-center text-center">
                    <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                        <Image
                        src="/silent.jpg"
                        data-ai-hint="happy person"
                        width={128}
                        height={128}
                        alt="Benefits as a Property Owner"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <CardHeader className="p-0 mb-4">
                        <CardTitle>Benefits As Property Owner</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-0 text-left">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>See a fuller picture of your tenant.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Start screening quickly – no waiting periods or setup fees.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Our TPN Score® predicts rental eviction risk 15% better than traditional credit scores.*</span>
                            </li>
                        </ul>
                        <p className="mt-auto pt-4 text-xs text-muted-foreground">*Based on TransUnion 2016 Study</p>
                    </CardContent>
                </Card>

                {/* Tenant Card */}
                <Card className="flex flex-col p-6 items-center text-center">
                     <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                        <Image
                        src="/man.jpg"
                        data-ai-hint="happy person"
                        width={128}
                        height={128}
                        alt="Benefits For Your Tenant"
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <CardHeader className="p-0 mb-4">
                        <CardTitle>Benefits For Your Tenant</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-0 text-left">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Most reports delivered same day.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>They consent online to share the reports with the property owner.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>No impact to their credit score.</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                </div>
            </div>
        </section>

        {/* Screening Features Section */}
        <section id="screening-features" className="w-full py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Screen and lease with confidence
                    </h2>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <ScreeningFeatureCard
                        icon={<Search className="h-6 w-6 text-primary-foreground/80" />}
                        title="Deeds Search"
                        description="Verify property ownership and legal details before committing to any transaction."
                    />
                    <ScreeningFeatureCard
                        icon={<Users className="h-6 w-6 text-primary-foreground/80" />}
                        title="Credit Bureau Services"
                        description="Comprehensive risk profiling for tenants, schools, and businesses to make informed, data-driven decisions."
                    />
                    <ScreeningFeatureCard
                        icon={<FileText className="h-6 w-6 text-primary-foreground/80" />}
                        title="Toolkits & Documentation Packs"
                        description="Legally compliant templates for leases, reports, property sales, and more — saving time and ensuring accuracy."
                    />
                    <ScreeningFeatureCard
                        icon={<Blocks className="h-6 w-6 text-primary-foreground/80" />}
                        title="Collections & Compliance Platforms"
                        description="Streamlined systems for rental and school fee collections, secure e-signing, and POPIA compliance management."
                    />
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
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
        
        {/* CTA Section */}
        <section id="cta" className="w-full py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Confidently choose a tenant.
            </h2>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8">
              <Link href="/dashboard/landlord/new-enquiry">Screen Today</Link>
            </Button>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
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
        <section id="trust" className="w-full py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
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
        </section>
        
        <section id="partners" className="w-full py-12 md:py-16 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Trusted by Leading Organizations
                </h2>
            </div>
            <PartnerCarousel />
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <Card className="flex flex-col p-6 items-center text-center">
      <CardHeader className="p-0 pb-4">
        {icon}
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-0">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </CardContent>
    </Card>
  );
}

function ScreeningFeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: React.ReactNode; }) {
    return (
        <div className="flex flex-col gap-4 rounded-lg bg-primary-foreground/10 p-6 text-left shadow-sm h-full transition-shadow hover:shadow-md">
            {icon}
            <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-primary-foreground/80 mt-1">{description}</p>
            </div>
        </div>
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
