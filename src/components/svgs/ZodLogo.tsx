import React from "react";

type ZodLogoProps = React.ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};

export const ZodLogo = React.forwardRef<React.ElementRef<"svg">, ZodLogoProps>(
  ({ size, ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeMiterlimit: 5,
        }}
        viewBox="0 0 1080 1080"
        ref={ref}
        width={size}
        height={size}
        fill="currentcolor"
        {...props}
      >
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.11624 0 0 .47362 -23.8 -3587.35)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.09005 0 0 .47362 101.2 -3534.08)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.04818 0 0 .13331 454.6 -550.68)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.17212 -.09937 .44639 .77316 -4264.21 -6040.13)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.1103 -.06369 .0917 .15882 -1037.66 -798.06)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.1103 -.06369 .0917 .15882 -1050.22 -812.68)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.1103 -.06369 .0917 .15882 -1062.67 -824.11)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.11665 -.06735 .07222 .12508 -870.02 -471.25)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.12113 -.06993 .07222 .12508 -874.03 -449.65)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.12953 -.07478 .0917 .15882 -1067.52 -724.99)"
        />
        <path
          d="M3083.23 8972.31h3500.78v135.72H3083.23z"
          transform="matrix(.03892 -.02247 .29678 .51403 -2065.36 -4228.86)"
        />
        <path
          d="M1825.05 4726.89h-574.56l-209.92 208.84 476.59 573.91 38.02-42.66 471.76-529.29-201.89-210.8Zm-20.99 49.17L1960 4938.89l-441.52 495.37-411.37-495.37 163.67-162.83h533.28Z"
          transform="translate(-1013.22 -4627.54) scale(1.01688)"
        />
      </svg>
    );
  }
);

ZodLogo.displayName = "ZodLogo";
