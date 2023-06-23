import "@/styles/tailwind.scss";
import "@/styles/color-spectrum.scss";
import "@/styles/base-theme.scss";

export const metadata = {
  title: "Max Randle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
