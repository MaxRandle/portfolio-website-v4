import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import {
  BsXOctagon,
  BsExclamationTriangle,
  BsInfoCircle,
  BsCheckSquare,
} from "react-icons/bs";

const AlertVariants = cva(["rounded-xl border-2 p-6 flex flex-col gap-3"], {
  variants: {
    status: {
      success: [
        "text-success-1200 border-success-800 bg-success-100",
        "dark:text-success-300 dark:border-success-700 dark:bg-success-1500",
      ],
      info: [
        "text-info-1200 border-info-800 bg-info-100",
        "dark:text-info-300 dark:border-info-700 dark:bg-info-1500",
      ],
      warning: [
        "text-warning-1200 border-warning-800 bg-warning-100",
        "dark:text-warning-300 dark:border-warning-700 dark:bg-warning-1500",
      ],
      danger: [
        "text-danger-1200 border-danger-800 bg-danger-100",
        "dark:text-danger-300 dark:border-danger-700 dark:bg-danger-1500",
      ],
    },
  },
});

export type AlertProps = React.ComponentPropsWithoutRef<"div"> &
  Omit<VariantProps<typeof AlertVariants>, "status"> &
  Required<Pick<VariantProps<typeof AlertVariants>, "status">> & {
    title: React.ReactNode;
  };

export const Alert: React.FC<AlertProps> = ({
  className,
  children,
  title,
  status,
  ...props
}) => {
  const classes = AlertVariants({ status });

  const Icon =
    status === "danger"
      ? BsXOctagon
      : status === "warning"
      ? BsExclamationTriangle
      : status === "info"
      ? BsInfoCircle
      : BsCheckSquare;

  return (
    <div className={twMerge(classes, className)} {...props}>
      <div className="flex items-center gap-4">
        <p>
          <Icon size={24} />
        </p>
        <p className="text-lg">{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};
