"use client";

import { Container } from "@ui/Container";
import { ROUTE_MAP } from "@/config";
import { BrandLogoIcon } from "@/components/brand/BrandLogoIcon";
import { usePathname } from "next/navigation";
import { Nav, NavLink } from "@ui/Nav";

const navigations = [
  {
    url: ROUTE_MAP.intro.root,
    content: <BrandLogoIcon className="shrink-0" />,
  },
  { url: ROUTE_MAP.about.root, content: "About" },
  { url: ROUTE_MAP.playground.root, content: "Playground" },
];

export const AppNavHeader = () => {
  const pathname = usePathname();

  return (
    <Nav>
      <Container className="flex items-center justify-between gap-6 sm:justify-start sm:gap-20">
        {navigations.map(({ url, content }) => (
          <NavLink isActive={pathname === url} key={url} href={url}>
            {content}
          </NavLink>
        ))}
      </Container>
    </Nav>
  );
};
