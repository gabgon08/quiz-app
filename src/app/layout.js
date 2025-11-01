import { Roboto_Slab } from 'next/font/google'
import "./globals.css";
import { ConfigProvider } from "antd";
import ThemeProvider from "../theme/index.jsx";
import '@ant-design/v5-patch-for-react-19';

const mainFont = Roboto_Slab({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: "Quiz | Tempo de Tela",
  description: "Como está meu tempo de tela?",
};

export default function RootLayout({ children }) {
  return (
    <ConfigProvider>
      <html lang="pt-BR" className={mainFont.className}>
        <body>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ConfigProvider>
  );
}
