
import { Handshake, Scale, ThumbsUp, ShieldCheck } from "lucide-react";

const Principle = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center gap-4 p-4 border rounded-lg bg-card">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
            {icon}
        </div>
        <div className="space-y-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);


export default function DataEthicsIntegrityPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 md:py-24">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Data Ethics & Integrity</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our commitment to handling data responsibly is the cornerstone of the trust our users place in us. We are dedicated to upholding the highest standards of data ethics and integrity.
        </p>
      </div>
      
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Principle 
            icon={<Handshake className="h-8 w-8" />}
            title="User Control & Consent"
            description="You are the owner of your data. We provide clear, transparent controls for you to manage your information and decide who it's shared with. Consent is always explicit and can be revoked at any time."
        />
        <Principle 
            icon={<Scale className="h-8 w-8" />}
            title="Fairness & Impartiality"
            description="We design our algorithms to be as unbiased as possible. We actively work to identify and mitigate biases in our data and models to ensure fair and equitable outcomes for all users."
        />
        <Principle 
            icon={<ThumbsUp className="h-8 w-8" />}
            title="Purpose & Proportionality"
            description="We only collect data that is necessary for providing and improving our services. Your data is used for the purposes you've agreed to, and we never sell your personal information to third parties."
        />
        <Principle 
            icon={<ShieldCheck className="h-8 w-8" />}
            title="Security & Accountability"
            description="We employ robust security measures to protect your data from unauthorized access. We are accountable for our data practices and are committed to resolving any issues promptly and transparently."
        />
      </div>

       <div className="mt-20 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-headline">Our Pledge</h2>
          <p className="text-muted-foreground text-lg">
            At Zimbabwe Landlord and Tenants Network, we pledge to be responsible stewards of the data entrusted to us. We continuously review our policies and practices to ensure they align with our ethical principles and the best interests of our community. Trust is not given, it's earned, and we are committed to earning yours every day.
          </p>
      </div>

    </div>
  );
}
