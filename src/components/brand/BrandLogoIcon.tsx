import * as React from "react";
import { type SVGProps } from "react";

type SvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const BrandLogoIcon = React.forwardRef<
  React.ElementRef<"svg">,
  SvgProps
>(({ size = 32, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        className="fill-primary-700"
        d="m0 0 20 32L0 64h20l12-20h-8l16-24h-8L20 0H0Z"
      />
      <path
        className="fill-primary-1300 group-[]/darkmode:fill-base-300 dark:fill-base-300"
        d="M64 64 44 32 64 0H44L32 20h8L24 44h8l12 20h20Z"
      />
    </svg>
  );
});

BrandLogoIcon.displayName = "BrandLogoIcon";
