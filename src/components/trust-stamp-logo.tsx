import { cn } from "@/lib/utils";
import Image from "next/image";

export const TrustStampLogo = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("h-8 w-8 text-primary", className)} {...props}>
    <Image src="/logo.png" alt="Trust Stamp Logo" width={32} height={32} />
  </div>
);
