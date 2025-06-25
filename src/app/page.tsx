import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Users, Home as HomeIcon, BarChart, ShieldCheck, Search } from "lucide-react";
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

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Fostering Trust and Belonging</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is built to create a seamless and secure experience for everyone in the rental market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <FeatureCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Tenant Profiles"
                description="Create detailed tenant profiles to showcase your reliability and rental history."
              />
              <FeatureCard
                icon={<HomeIcon className="h-8 w-8 text-primary" />}
                title="Landlord Profiles"
                description="Landlords and agents can build trust by creating comprehensive profiles and listing properties."
              />
              <FeatureCard
                icon={<Handshake className="h-8 w-8 text-primary" />}
                title="Verified Users"
                description="We encourage verification to increase trust and safety within the community."
              />
              <FeatureCard
                icon={<Search className="h-8 w-8 text-primary" />}
                title="Smart Matching"
                description="Our smart algorithms help tenants find the right properties and landlords find the best tenants."
              />
               <FeatureCard
                icon={<BarChart className="h-8 w-8 text-primary" />}
                title="AI-Powered Insights"
                description="Leverage AI to get deep insights into profiles, helping you make informed decisions."
              />
               <FeatureCard
                icon={<ShieldCheck className="h-8 w-8 text-primary" />}
                title="Secure & Private"
                description="Your data is your own. We prioritize security and privacy for all our users."
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) {
  return (
    <Card className="text-left">
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
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
