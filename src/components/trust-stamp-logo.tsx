import { cn } from "@/lib/utils";
import Image from "next/image";

export const TrustStampLogo = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("h-16 w-auto text-primary", className)} {...props}>
    <Image src="/Trust Stamp Logo.png" alt="Trust Stamp Logo" width={160} height={32} className="h-16 w-auto" />
  </div>
);
