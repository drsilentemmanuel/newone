import { cn } from "@/lib/utils";
import Nk7FSA01 from './svg/Nk7FSA01.svg';

export const TrustStampLogo = ({ className, ...props }: React.ComponentProps<"img">) => (
  <Nk7FSA01 className={cn("h-8 w-8 text-primary", className)} {...props} />
);
