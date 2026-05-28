import "./global.css";

export const metadata = {
  title: "PS20 Tournament Schedule Tracker",
  description: "Live dashboard scoring system",
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