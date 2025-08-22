import { cn } from "@/lib/utils";
import Image from "next/image";

export const ZimbabweRentBookLogo = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("h-8 w-8 text-primary", className)} {...props}>
    <Image src="/Trust Stamp Logo.png" alt="Trust Stamp Logo" width={32} height={32} />
  </div>
);
