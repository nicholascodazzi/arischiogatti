import { montserrat } from "../layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
