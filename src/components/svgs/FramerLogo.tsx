import React from "react";

type FramerLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const FramerLogo = React.forwardRef<
  React.ElementRef<"svg">,
  FramerLogoProps
>(({ size, ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 14 21"
      ref={ref}
      width={size}
      height={size}
      fill="currentcolor"
      {...props}
    >
      <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" />
    </svg>
  );
});

FramerLogo.displayName = "FramerLogo";
