
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ChatBubblesIcon = () => (
    <div className="relative w-24 h-24 rounded-full bg-muted flex items-center justify-center">
        {/* The back bubble */}
        <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-5 left-5 text-secondary-foreground/80"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        {/* The front, filled bubble */}
        <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="hsl(var(--accent))"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute bottom-5 right-5"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    </div>
);

export default function MessagesPage() {
    return (
        <div className="h-full flex flex-col">
            <h1 className="text-3xl font-bold font-headline mb-4">Messages</h1>
            
            <div className="flex-grow flex flex-col justify-start text-left relative pt-8">
                
                <div className="w-full">
                    <h2 className="text-xl font-bold">You Don&apos;t Have Any Renters</h2>
                    <p className="text-muted-foreground mt-1">
                        You don&apos;t have renters yet. Once you do, you&apos;ll be able to start a conversation here.
                    </p>
                    <Button asChild className="mt-4">
                        <Link href="/dashboard/landlord/tenants">ADD RENTERS</Link>
                    </Button>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 -mt-24">
                    <ChatBubblesIcon />

                    <blockquote className="text-xl font-semibold max-w-sm mx-auto pt-2">
                        &quot;Great landlord-tenant relationships start with great communication.&quot;
                    </blockquote>
                    <p className="text-sm text-muted-foreground">
                        Start a conversation with your renters today!
                    </p>
                </div>
            </div>
        </div>
    );
}
