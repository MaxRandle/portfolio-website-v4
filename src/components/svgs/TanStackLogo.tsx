import React from "react";

type TanStackLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const TanStackLogo = React.forwardRef<
  React.ElementRef<"svg">,
  TanStackLogoProps
>(({ size, ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 64 64"
      ref={ref}
      width={size}
      height={size}
      fill="currentcolor"
      {...props}
    >
      <path d="M64 16A16 16 0 0 0 48 0H16C7.17 0 0 7.17 0 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V16Zm-48 0h32l.04 8H36v24h-8V24H16v-8Z" />
    </svg>
  );
});

TanStackLogo.displayName = "TanStackLogo";
