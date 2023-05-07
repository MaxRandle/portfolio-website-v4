type NavProps = React.ComponentPropsWithoutRef<"nav">;

export const Nav: React.FC<NavProps> = ({ ...props }) => {
  return (
    <nav
      className="group/darkmode bg-base-1400 py-4 dark:bg-base-1500"
      {...props}
    />
  );
};
