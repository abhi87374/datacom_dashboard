import '@/styles/globals.css'
import Sidebar from '@/components/Sidebar/Sidebar';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
      <div className="flex gap-10 m-8 pt-5 ">
        <Sidebar />
        <div className="w-full">
          <Component {...pageProps} />
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}
