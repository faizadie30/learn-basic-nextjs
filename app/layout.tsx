import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn Nextjs Manual Install</title>
      </head>
      <body>
        <header>[header]</header>

        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
