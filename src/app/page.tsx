import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Briefcase, Home as HomeIcon, ArrowRight, ShieldCheck, TrendingUp, ClipboardCheck } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Find Your Perfect Match in Zimbabwean Real Estate
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Zim TPN is the leading Tenant Profiling Network in Zimbabwe, connecting trustworthy tenants with reliable landlords and agents.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">I'm a Tenant</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                     <Link href="/signup">I'm a Landlord/Agent</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                data-ai-hint="modern apartment"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                  <div className="space-y-3">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Delivering specialised credit bureau data</h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      to all leading organisations and ecosystems
                      </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
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

        <section id="challenges" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
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

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
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
    <Card className="text-left flex flex-col">
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
