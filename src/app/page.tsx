
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, ClipboardCheck, CheckCircle2, Search, Users, FileText, Blocks } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { PartnerCarousel } from "@/components/partner-carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* New Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center text-white bg-cover bg-center" style={{backgroundImage: "url('/drone.jpg')"}}>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto px-4 md:px-6 space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl !leading-tight font-headline" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    The Smarter Way to Rent in Zimbabwe.
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                    Tools for Landlords, Agents, and Tenants — built to make renting safe, simple, and fair.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
                        <Link href="/landlord">I’m a Landlord</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-12 text-lg font-semibold shadow-lg transition-transform hover:scale-105 bg-white/20 text-white hover:bg-white/30 border-white/50 border">
                        <Link href="/agent">I’m an Agent</Link>
                    </Button>
                     <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
                        <Link href="/tenant">I’m a Tenant</Link>
                    </Button>
                </div>
            </div>
        </section>


        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-3 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Built for Landlords, Agents, and Tenants
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
                        <CardTitle>Benefits for Landlords & Agents</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-0 text-left">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Screen tenants instantly – no more chasing references.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Protect your income – reduce the risk of defaults & evictions.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>All-in-one management – rent tracking, lease management, and reminders.</span>
                            </li>
                        </ul>
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
                        <CardTitle>Benefits for Tenants</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-0 text-left">
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Get approved faster – stand out with a verified rental profile.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Full transparency – you control which landlords see your profile.</span>
                            </li>
                            <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span>Build trust over time – a good rental history makes your next lease easier.</span>
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
                        Screen & Lease with Confidence
                    </h2>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <ScreeningFeatureCard
                        icon={<Search className="h-6 w-6 text-primary-foreground/80" />}
                        title="Tenant Screening"
                        description="Run background and risk checks to ensure you’re renting to reliable tenants."
                    />
                    <ScreeningFeatureCard
                        icon={<Users className="h-6 w-6 text-primary-foreground/80" />}
                        title="Lease Management"
                        description="Use compliant lease templates and digital signing to streamline agreements."
                    />
                    <ScreeningFeatureCard
                        icon={<FileText className="h-6 w-6 text-primary-foreground/80" />}
                        title="Rent Tracking & Collections"
                        description="Track rent payments, send reminders, and manage collections seamlessly."
                    />
                    <ScreeningFeatureCard
                        icon={<Blocks className="h-6 w-6 text-primary-foreground/80" />}
                        title="Ownership Verification (Optional Add-on)"
                        description="Confirm property ownership details with Deeds Office search before transacting."
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
              <Link href="/signup">Get Started for Free</Link>
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

        {/* Testimonial Section */}
        <section id="testimonials" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        What Our Landlords Are Saying
                    </h2>
                    <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        Thousands of landlords trust our platform to find the best tenants.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-2">
                    <TestimonialCard
                        quote="Zimbabwe Rent Book has revolutionized how I manage my properties. The tenant screening process is fast, thorough, and has saved me from countless potential headaches. I found a fantastic, reliable tenant in under a week."
                        author="Sarah D."
                        role="Property Manager, Harare"
                        avatarSrc="https://placehold.co/100x100.png"
                        avatarHint="woman portrait"
                    />
                    <TestimonialCard
                        quote="As a first-time landlord, I was nervous about finding the right person for my flat. Zimbabwe Rent Book made it so easy. Their reports are detailed and easy to understand. I highly recommend it to any landlord in Zimbabwe."
                        author="Mike P."
                        role="Landlord, Bulawayo"
                        avatarSrc="https://placehold.co/100x100.png"
                        avatarHint="man portrait"
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

function TestimonialCard({ quote, author, role, avatarSrc, avatarHint }: { quote: string, author: string, role: string, avatarSrc: string, avatarHint: string }) {
    return (
        <Card className="flex flex-col p-6 items-center text-center bg-card">
            <CardContent className="p-0">
                <blockquote className="text-lg italic text-foreground">"{quote}"</blockquote>
            </CardContent>
            <CardFooter className="p-0 mt-4 flex items-center gap-3">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={avatarSrc} alt={author} data-ai-hint={avatarHint} />
                    <AvatarFallback>{author.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-left">{author}</p>
                    <p className="text-sm text-muted-foreground text-left">{role}</p>
                </div>
            </CardFooter>
        </Card>
    );
}
