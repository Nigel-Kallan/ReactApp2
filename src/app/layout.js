import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Portfolio App",
  description: "Next.js Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}