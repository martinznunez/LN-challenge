import { Metadata } from "next";
import "./globals.css";

import { GridSelectionProvider } from "@/contexts";

export const metadata: Metadata = {
  title: "LA NACION",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://especiales.lanacion.com.ar/arc-css/css/site.css" rel="stylesheet" />
        
      </head>
      <body>
     <GridSelectionProvider>    
        <main>
          <div className="mainContent">
            {children}
          </div>
        </main>
    </GridSelectionProvider>
      </body>
    </html>
  );
}
