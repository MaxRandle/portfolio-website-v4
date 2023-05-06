import React from "react";

type AuthJsLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const AuthJsLogo = React.forwardRef<
  React.ElementRef<"svg">,
  AuthJsLogoProps
>(({ size, ...props }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 24 24"
      ref={ref}
      width={size}
      height={size}
      fill="currentcolor"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
});

AuthJsLogo.displayName = "AuthJsLogo";
