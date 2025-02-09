import { Kanit } from 'next/font/google'
import "./globals.css";

const kanit = Kanit({
  weight: ['200', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'qwrtsdev',
    template: '%s | qwrtsdev',
  },
  description: "A passionate programmer and graphic designer. Who wants to create well-crafted softwares that seamlessly blends functionality with aesthetics.",
  openGraph: {
    title: 'qwrtsdev',
    description: 'A passionate programmer and graphic designer. Who wants to create well-crafted softwares that seamlessly blends functionality with aesthetics.',
    url: 'https://qwrtsdev.vercel.app/',
    siteName: 'qwrtsdev',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/1297492873398452267/1337792308757794907/qw-opengraph.png?ex=67a8bbad&is=67a76a2d&hm=e054b927c4b76351c0d4fbdb8f784e235ed4a3291c0b1c33142c730ba3e36b55&',
        width: 2048,
        height: 1070,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'qwrtsdev.vercel.app',
    title: 'qwrtsdev',
    description: 'A passionate programmer and graphic designer. Who wants to create well-crafted softwares that seamlessly blends functionality with aesthetics.',
    image: 'https://cdn.discordapp.com/attachments/1297492873398452267/1337792308757794907/qw-opengraph.png?ex=67a8bbad&is=67a76a2d&hm=e054b927c4b76351c0d4fbdb8f784e235ed4a3291c0b1c33142c730ba3e36b55&',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
