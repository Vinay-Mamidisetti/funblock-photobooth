import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--text)]">
        <Navbar />
        <FloatingActions />
        <main className="pt-[80px]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}