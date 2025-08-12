import { cn } from "@/lib/utils";

export const TrustStampLogo = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("h-8 w-8 text-primary", className)} {...props}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="currentColor"
      />
      <path
        d="M12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11ZM12 7C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7Z"
        fill="currentColor"
      />
      <path
        d="M12 13C14.21 13 16 14.79 16 17H8C8 14.79 9.79 13 12 13ZM12 15C10.9 15 10 15.9 10 17H14C14 15.9 13.1 15 12 15Z"
        fill="currentColor"
      />
    </svg>
  </div>
);