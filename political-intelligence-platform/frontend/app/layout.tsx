export const metadata = {
  title: "Political Intelligence Platform",
  description: "Search public information about Indian politicians."
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
