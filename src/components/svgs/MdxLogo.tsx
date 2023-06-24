import React from "react";

type MdxLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const MdxLogo = React.forwardRef<React.ElementRef<"svg">, MdxLogoProps>(
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
        viewBox="0 0 512 512"
        ref={ref}
        width={size}
        height={size}
        fill="currentcolor"
        {...props}
      >
        <path d="M21.41 150.62A21.5 21.5 0 0 0 0 172.03V344.6A21.5 21.5 0 0 0 21.41 366H490.6a21.5 21.5 0 0 0 21.4-21.41V172.03a21.5 21.5 0 0 0-21.41-21.4H21.4zm329.16 40.77L396 236.83l45.44-45.44 15.9 15.9-45.44 45.44 44.36 44.36-15.9 15.9L396 268.62 351.65 313l-15.9-15.9 44.36-44.36-45.44-45.45 15.9-15.9zm-103.16 1.4h22.71v84.97l31.06-30.22 15.68 16.12-58.3 56.7-55.36-56.63 16.08-15.71 28.13 28.77v-84zm-196.9 3 60.62 59.87 61.75-59.35V314.7h-23.07v-64.2l-38.9 37.38L73.6 251v63.69H50.5v-118.9z" />
      </svg>
    );
  }
);

MdxLogo.displayName = "MdxLogo";
