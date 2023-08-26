import Image from 'next/image'
import HeaderComponent from './header';
import FooterComponent from "./footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header><HeaderComponent></HeaderComponent></header>
      <p>Test</p>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        
        
        </div>
        <FooterComponent></FooterComponent>
    </main>
  )
}
