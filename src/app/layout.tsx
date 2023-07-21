import "@/styles/tailwind.scss";
import "@/styles/color-spectrum.scss";
import "@/styles/base-theme.scss";

export const metadata = {
  title: "Max Randle",
  description: "Max Randle's portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
