import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import I18nProvider from "@/components/i18n/i18nProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasradash Dashborad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = "light"; 
  return (
    <html lang="en" data-theme={theme} style={{ colorScheme: theme }}>
      <body className={`${inter.className} antialiased`}>
        
        <ThemeProvider>
          <I18nProvider>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            <AppSidebar variant="inset" />
            <SidebarInset>
              <SiteHeader />
              {children}
            </SidebarInset>
          </SidebarProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
