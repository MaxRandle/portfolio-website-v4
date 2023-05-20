import React from "react";

type TurboRepoLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const TurboRepoLogo = React.forwardRef<
  React.ElementRef<"svg">,
  TurboRepoLogoProps
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
      viewBox="0 0 64 64"
      ref={ref}
      width={size}
      height={size}
      fill="currentcolor"
      {...props}
    >
      <path d="M31.97 11.19A20.83 20.83 0 0 0 11.17 32a20.83 20.83 0 0 0 20.8 20.81c11.47 0 20.8-9.34 20.8-20.81a20.83 20.83 0 0 0-20.8-20.81Zm0 31.58a10.76 10.76 0 1 1 .01-21.53 10.76 10.76 0 0 1 0 21.53Z" />
      <path d="M33.72 7.77V0A32.04 32.04 0 0 1 64 32c0 17.11-13.4 31.1-30.28 32v-7.77A24.32 24.32 0 0 0 56.26 32 24.32 24.32 0 0 0 33.72 7.77ZM13.63 47.89a24.22 24.22 0 0 1-5.86-14.15H0A31.93 31.93 0 0 0 8.14 53.4l5.5-5.5ZM30.23 64v-7.77a24.15 24.15 0 0 1-14.14-5.87l-5.5 5.5A31.87 31.87 0 0 0 30.24 64Z" />
    </svg>
  );
});

TurboRepoLogo.displayName = "TurboRepoLogo";
