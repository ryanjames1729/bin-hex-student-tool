import Head from 'next/head'
import Image from 'next/image'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Binary Number Converter</title>
        <meta name="description" content="binary and hexadecimal tool for students" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="h-12">

        </div>
        {/* Binary Tool */}
        <div className="h-screen shadow-md">
          <div className="flex flex-row item-center justify-center">
            <div className="flex-auto w-64 p-6 text-center border-2">128</div>
            <div className="flex-auto w-64 p-6 text-center border-2">64</div>
            <div className="flex-auto w-64 p-6 text-center border-2">32</div>
            <div className="flex-auto w-64 p-6 text-center border-2">16</div>
            <div className="flex-auto w-64 p-6 text-center border-2">8</div>
            <div className="flex-auto w-64 p-6 text-center border-2">4</div>
            <div className="flex-auto w-64 p-6 text-center border-2">2</div>
            <div className="flex-auto w-64 p-6 text-center border-2">1</div>
          </div>

          <div className="flex flex-row item-center justify-center">
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>7</sup></div>
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>6</sup></div>
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>5</sup></div>
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>4</sup></div>
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>3</sup></div>
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>2</sup></div>
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>1</sup></div>
            <div className="flex-auto w-64 p-6 text-center border-2">2<sup>0</sup></div>
          </div>

          <div className="flex flex-row item-center justify-center">
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
            <div className="flex-auto w-64 p-6 text-center border-2">0</div>
          </div>

          <div className="flex flex-row item-center justify-center">
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
            <div className="flex-auto w-64 p-6 text-center border-2">&#160;</div>
          </div>

        </div>

        {/* Binary Wuiz */}
        <div className="h-screen shadow-md">

        </div>

        {/* Heaxadecimal Tool */}
        <div className="h-screen shadow-md">

        </div>

        {/* Hexadecimal Quiz */}
        <div className="h-screen shadow-md">

        </div>
        
      </main>

      <Footer />
    </div>
  )
}
