import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const InputVariants = cva(
  [
    "border appearance-none px-4 py-3 rounded-lg focus:outline-none focus:ring-4 w-full",

    // base classes
    "text-base-1100 bg-base-100 border-base-400 focus:border-primary-500 ring-primary-300",
    "dark:text-base-400 dark:bg-base-1600 dark:border-base-1200 dark:focus:border-primary-700 dark:ring-primary-1300",

    // invalid classes
    "invalid:text-danger-1100 invalid:bg-danger-200 invalid:border-danger-500 invalid:focus:border-danger-700 invalid:ring-danger-300",
    "invalid:dark:text-danger-400 invalid:dark:bg-danger-1500 invalid:dark:border-danger-1000 invalid:dark:focus:border-danger-700 invalid:dark:ring-danger-1300",

    // disabled classes
    "disabled:bg-base-300 disabled:dark:bg-base-1200 disabled:opacity-60",

    // group classes
    "group-[]/input-group:focus:relative",
    "group-[]/input-group:rounded-none",
    "group-[]/input-group:first:ml-0",
    "group-[]/input-group:-ml-[1px]",
    "group-[]/input-group:first:rounded-l-lg",
    "group-[]/input-group:last:rounded-r-lg",

    //
  ],
  { variants: {} }
);

export type InputProps = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof InputVariants>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = InputVariants({});

  return <input className={twMerge(classes, className)} {...props} />;
};
