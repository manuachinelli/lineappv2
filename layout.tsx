import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lineapp",
  description: "Tiny sales funnel starter",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">Lineapp</h1>
            <nav className="text-sm text-gray-600">
              <a className="hover:underline" href="/sales">/sales</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
            Built with Next.js + TypeScript
          </div>
        </footer>
      </body>
    </html>
  );
}
