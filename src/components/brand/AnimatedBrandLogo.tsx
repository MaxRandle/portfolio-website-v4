import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type AnimatedBrandLogoProps = React.ComponentPropsWithoutRef<
  typeof motion.svg
> & {
  className?: string;
};

export const AnimatedBrandLogo: React.FC<AnimatedBrandLogoProps> = ({
  className,
  ...props
}) => {
  return (
    <motion.svg
      className={twMerge("drop aspect-[2/1] max-h-80", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      variants={{
        dropStart: {
          filter:
            "drop-shadow(0px 0px 96px rgba(255, 255, 255, 0.7)) drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
          y: 8,
        },
        dropEnd: {
          filter:
            "drop-shadow(0px 0px 48px rgba(255, 255, 255, 0.4)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))",
          y: 0,
        },
      }}
      initial="dropStart"
      animate="dropEnd"
      transition={{
        default: { delay: 2, duration: 2, ease: "easeOut" },
      }}
      {...props}
    >
      <motion.path
        className="fill-primary-700 stroke-primary-700 stroke-2 dark:fill-primary-700 dark:stroke-primary-700"
        variants={{
          hidden: {
            pathLength: 0,
            fillOpacity: 0,
            x: -24,
          },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
          opacity: { duration: 2, ease: "circIn" },
          pathLength: { ease: "linear", duration: 2 },
        }}
        d="m0 0 20 32L0 64h20l12-20h-8l16-24h-8L20 0H0Z"
      />
      <motion.path
        className="fill-primary-1300 stroke-primary-1300 stroke-2 dark:fill-base-300 dark:stroke-base-300"
        variants={{
          hidden: {
            pathLength: 0,
            fillOpacity: 0,
            x: 24,
          },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
          opacity: { duration: 2, ease: "circIn" },
          pathLength: { ease: "linear", duration: 2 },
        }}
        d="M64 64 44 32 64 0H44L32 20h8L24 44h8l12 20h20Z"
      />
    </motion.svg>
  );
};
