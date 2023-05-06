import React from "react";

type CvaLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const CvaLogo = React.forwardRef<React.ElementRef<"svg">, CvaLogoProps>(
  ({ size, ...props }, ref) => {
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
        <path d="M21.68 37.4a14.55 14.55 0 1 1 7.41-12.68H14.55l7.13 12.69Zm7.41-12.67h10.36l-8.18 14.54h7.82l-8.18 14.55-9.23-16.41a14.55 14.55 0 0 0 7.41-12.68Zm10 14.54 8.19-14.54h-7.83l8.18-14.55L64 39.28H39.1Z" />
      </svg>
    );
  }
);

CvaLogo.displayName = "CvaLogo";
