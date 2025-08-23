import { cn } from "@/lib/utils";
import Image from "next/image";

export const ZimbabweRentBookLogo = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("h-8 w-auto text-primary", className)} {...props}>
    <Image src="/zimbabwe-landlord-tenants-network-logo-fixed-blue.png" alt="Zimbabwe Landlord and Tenants Network Logo" width={160} height={32} className="h-8 w-auto" />
  </div>
);
