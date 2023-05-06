import { twMerge } from "tailwind-merge";

type PaletteProps = React.ComponentPropsWithoutRef<"div">;
export const Palette: React.FC<PaletteProps> = ({ className, ...props }) => {
  const colors = [
    [
      "bg-base-100",
      "bg-base-200",
      "bg-base-300",
      "bg-base-400",
      "bg-base-500",
      "bg-base-600",
      "bg-base-700",
      "bg-base-800",
      "bg-base-900",
      "bg-base-1000",
      "bg-base-1100",
      "bg-base-1200",
      "bg-base-1300",
      "bg-base-1400",
      "bg-base-1500",
      "bg-base-1600",
    ],
    [
      "bg-primary-100",
      "bg-primary-200",
      "bg-primary-300",
      "bg-primary-400",
      "bg-primary-500",
      "bg-primary-600",
      "bg-primary-700",
      "bg-primary-800",
      "bg-primary-900",
      "bg-primary-1000",
      "bg-primary-1100",
      "bg-primary-1200",
      "bg-primary-1300",
      "bg-primary-1400",
      "bg-primary-1500",
      "bg-primary-1600",
    ],
    [
      "bg-success-100",
      "bg-success-200",
      "bg-success-300",
      "bg-success-400",
      "bg-success-500",
      "bg-success-600",
      "bg-success-700",
      "bg-success-800",
      "bg-success-900",
      "bg-success-1000",
      "bg-success-1100",
      "bg-success-1200",
      "bg-success-1300",
      "bg-success-1400",
      "bg-success-1500",
      "bg-success-1600",
    ],
    [
      "bg-info-100",
      "bg-info-200",
      "bg-info-300",
      "bg-info-400",
      "bg-info-500",
      "bg-info-600",
      "bg-info-700",
      "bg-info-800",
      "bg-info-900",
      "bg-info-1000",
      "bg-info-1100",
      "bg-info-1200",
      "bg-info-1300",
      "bg-info-1400",
      "bg-info-1500",
      "bg-info-1600",
    ],
    [
      "bg-warning-100",
      "bg-warning-200",
      "bg-warning-300",
      "bg-warning-400",
      "bg-warning-500",
      "bg-warning-600",
      "bg-warning-700",
      "bg-warning-800",
      "bg-warning-900",
      "bg-warning-1000",
      "bg-warning-1100",
      "bg-warning-1200",
      "bg-warning-1300",
      "bg-warning-1400",
      "bg-warning-1500",
      "bg-warning-1600",
    ],
    [
      "bg-danger-100",
      "bg-danger-200",
      "bg-danger-300",
      "bg-danger-400",
      "bg-danger-500",
      "bg-danger-600",
      "bg-danger-700",
      "bg-danger-800",
      "bg-danger-900",
      "bg-danger-1000",
      "bg-danger-1100",
      "bg-danger-1200",
      "bg-danger-1300",
      "bg-danger-1400",
      "bg-danger-1500",
      "bg-danger-1600",
    ],
  ];

  const classes = "flex gap-2 justify-center max-w-md mx-auto";

  return (
    <div className={twMerge(classes, className)} {...props}>
      {colors.map((shades, idx) => (
        <div key={idx} className="flex grow flex-col gap-2">
          {shades.map((shade) => (
            <div key={shade} className={`aspect-square rounded-md ${shade}`} />
          ))}
        </div>
      ))}
    </div>
  );
};
