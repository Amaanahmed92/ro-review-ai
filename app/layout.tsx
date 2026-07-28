export const metadata = {
  title: "RO Review AI",
  description: "AI-powered Google Review Generator"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#f5f5f5",
        }}
      >
        {children}
      </body>
    </html>
  );
}
