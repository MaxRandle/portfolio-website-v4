"use client";

import "@/styles/tailwind.scss";
import "@/styles/color-spectrum.scss";
import "@/styles/base-theme.scss";

import { MDXProvider } from "@mdx-js/react";
import { MdxComponentMap } from "@/utils/mdx";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MDXProvider components={MdxComponentMap}>
          <div className="min-h-screen overflow-hidden">{children}</div>
        </MDXProvider>
      </body>
    </html>
  );
}
