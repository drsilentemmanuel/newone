
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Building, Briefcase, User, ArrowRight, ShieldCheck, TrendingUp, ClipboardCheck, HomeIcon } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PartnerCarousel } from "@/components/partner-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
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

        <section id="problem-solution" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Transforming Rental Property Management: From Stress to Success
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <Card className="flex flex-col justify-between border-destructive/50 bg-destructive/5">
                <Image
                  src="/Gemini_Generated_Image_lpn7rplpn7rplpn7.png"
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
                    Grappling with the <strong>stress and uncertainty</strong> of managing rentals? The worry of finding good tenants, complex vetting, paperwork, and rent collection can be overwhelming.
                  </p>
                   <blockquote className="border-l-4 border-destructive pl-4 italic text-muted-foreground">
                    "Consider this: Tatenda stayed at Michelle's place for months, then left without paying for 6. Who wants to inherit <em>that</em> problem?"
                  </blockquote>
                </CardContent>
                <CardFooter className="pt-4">
                    <p className="w-full text-center font-bold text-lg text-destructive tracking-wider">STRESS & UNCERTAINTY</p>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col justify-between border-accent/50 bg-accent/5">
                <Image
                  src="/Gemini_Generated_Image_e5w6jve5w6jve5w6.png"
                  width={600}
                  height={400}
                  alt="Confident property manager using Zim TPN"
                  className="aspect-video w-full overflow-hidden rounded-t-lg object-cover"
                  data-ai-hint="man report tablet"
                />
                <CardContent className="space-y-4 flex-grow pt-6">
                  <CardTitle className="text-accent mb-4">The Solution</CardTitle>
                  <p className="text-muted-foreground">
                    Zim TPN brings you <strong>simplicity and confidence</strong> with AI-powered tools to streamline tenant screening, secure cash flow, and ensure effortless compliance. Make decisions based on solid data, not guesswork.
                  </p>
                  <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                    "A comprehensive Zim TPN report instantly flags Tatenda's payment history, saving you 6 months of lost rent and countless headaches."
                  </blockquote>
                </CardContent>
                <CardFooter className="pt-4">
                    <p className="w-full text-center font-bold text-lg text-accent tracking-wider">SIMPLICITY & CONFIDENCE</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <div className="space-y-3">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Delivering specialised credit bureau data</h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      to all leading organisations and ecosystems
                      </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-2">
                  <ServiceCard
                      icon={<User className="h-8 w-8 text-primary" />}
                      title="Tenants"
                      description="This powerful reputation, built on your payment history and reliability, extends beyond landlords, positively impacting your standing with employers, lenders, and banks."
                      link="#"
                  />
                  <ServiceCard
                      icon={<HomeIcon className="h-8 w-8 text-primary" />}
                      title="Residential Property"
                      description="Access specialised tenant vetting and property management tools and systems created specifically for the residential rental sector. Gain and retain quality tenants and clients."
                      link="#"
                  />
                  <ServiceCard
                      icon={<Building className="h-8 w-8 text-primary" />}
                      title="Commercial Property"
                      description="Real time tenant risk monitoring and screening. Intuitive scalable collection and compliance tools for commercial real estate management and investor success."
                      link="#"
                  />
                  <ServiceCard
                      icon={<Briefcase className="h-8 w-8 text-primary" />}
                      title="Business"
                      description="Advance your business growth. Screen and proactively manage your debtors. Real time debtor risk monitoring empowers you to easily navigate cashflow and compliance obstacles."
                      link="#"
                  />
                </div>
            </div>
        </section>

        <section id="challenges" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <div className="space-y-3">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">We help you solve the most dynamic challenges in your organisation</h2>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                  <ServiceCard
                      icon={<ShieldCheck className="h-8 w-8 text-primary" />}
                      title="Manage and reduce financial and legal risk"
                      description="Manage and reduce financial and legal risk"
                      link="#"
                  />
                  <ServiceCard
                      icon={<TrendingUp className="h-8 w-8 text-primary" />}
                      title="Improve cashflow sustainably and easily"
                      description="Improve cashflow sustainably and easily"
                      link="#"
                  />
                  <ServiceCard
                      icon={<ClipboardCheck className="h-8 w-8 text-primary" />}
                      title="Simplify complex compliance requirements"
                      description="Simplify complex compliance requirements"
                      link="#"
                  />
                </div>
            </div>
        </section>

        <section id="stats" className="w-full py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Credit Bureau – The trusted source of specialised data
              </h2>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-12">
              <StatItem value="23K+" label="Users" />
              <StatItem value="3.4M+" label="Leases" />
              <StatItem value="150K" label="Landlords" />
            </div>
          </div>
        </section>

        <section id="partners" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Trusted by Leading Organizations
              </h2>
            </div>
            <PartnerCarousel />
          </div>
        </section>

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
      </main>
    </div>
  );
}

function ServiceCard({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string; }) {
  return (
    <Card className="text-left flex flex-col bg-card">
      <CardHeader>
        <div className="flex flex-row items-start gap-4">
          {icon}
          <CardTitle className="mt-1">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-muted-foreground flex-grow">{description}</p>
        <Button asChild variant="link" className="p-0 mt-4 self-start font-semibold text-primary">
          <Link href={link}>Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
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
