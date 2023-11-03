import { zCOOL_KuaiLe } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${zCOOL_KuaiLe.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
