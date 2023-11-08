import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// First commit. 
// First commit on first-branch. 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
