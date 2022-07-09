import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



export default function Home() {

  

  const [binZeroIsOn, setZeroIsOn] = useState(false);
  const [binOneIsOn, setOneIsOn] = useState(false);
  const [binTwoIsOn, setTwoIsOn] = useState(false);
  const [binThreeIsOn, setThreeIsOn] = useState(false);
  const [binFourIsOn, setFourIsOn] = useState(false);
  const [binFiveIsOn, setFiveIsOn] = useState(false);
  const [binSixIsOn, setSixIsOn] = useState(false);
  const [binSevenIsOn, setSevenIsOn] = useState(false);

  const binZeroSwitch = () => setZeroIsOn(!binZeroIsOn);
  const binOneSwitch = () => setOneIsOn(!binOneIsOn);
  const binTwoSwitch = () => setTwoIsOn(!binTwoIsOn);
  const binThreeSwitch = () => setThreeIsOn(!binThreeIsOn);
  const binFourSwitch = () => setFourIsOn(!binFourIsOn);
  const binFiveSwitch = () => setFiveIsOn(!binFiveIsOn);
  const binSixSwitch = () => setSixIsOn(!binSixIsOn);
  const binSevenSwitch = () => setSevenIsOn(!binSevenIsOn);

  const [hexZero, setHexZero] = useState('0');
  const [hexOne, setHexOne] = useState('0');
  const [hexTwo, setHexTwo] = useState('0');



  const returnHexValues = () => {
    
    let sum = 0;
    switch(hexZero){
      case 'A': sum += 10;
      break;
      case 'B': sum += 11;
      break;
      case 'C': sum += 12;
      break;
      case 'D': sum += 13;
      break;
      case 'E': sum += 14;
      break;
      case 'F': sum += 15;
      break;
    }
    if(hexZero*1 < 10){
      sum += hexZero*1;
    }
    switch(hexOne){
      case 'A': sum += 10*16;
      break;
      case 'B': sum += 11*16;
      break;
      case 'C': sum += 12*16;
      break;
      case 'D': sum += 13*16;
      break;
      case 'E': sum += 14*16;
      break;
      case 'F': sum += 15*16;
      break;
    }
    if(hexOne*1 < 10){
      sum += hexOne*1*16;
    }
    switch(hexTwo){
      case 'A': sum += 10*16*16;
      break;
      case 'B': sum += 11*16*16;
      break;
      case 'C': sum += 12*16*16;
      break;
      case 'D': sum += 13*16*16;
      break;
      case 'E': sum += 14*16*16;
      break;
      case 'F': sum += 15*16*16;
      break;
    }
    if(hexTwo*1 < 10){
      sum += hexTwo*1*16*16;
    }
    return sum;
  }

  
  


  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white dark:shadow-white">
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
        <div className="h-screen shadow-md text-xl lg:text-4xl dark:shadow-white" id="#binary">
          <div className="w-screen flex flex-row item-center justify-center">
            <div className={binSevenIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>128</div>
            <div className={binSixIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>64</div>
            <div className={binFiveIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>32</div>
            <div className={binFourIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>16</div>
            <div className={binThreeIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>8</div>
            <div className={binTwoIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>4</div>
            <div className={binOneIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2</div>
            <div className={binZeroIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>1</div>
          </div>

          <div className="flex flex-row item-center justify-center">
            <div className={binSevenIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>7</sup></div>
            <div className={binSixIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>6</sup></div>
            <div className={binFiveIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>5</sup></div>
            <div className={binFourIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>4</sup></div>
            <div className={binThreeIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>3</sup></div>
            <div className={binTwoIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>2</sup></div>
            <div className={binOneIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>1</sup></div>
            <div className={binZeroIsOn ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>2<sup>0</sup></div>
          </div>

          <div className="flex flex-row item-center justify-center">
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binSevenIsOn ? 1 : 0}</div>
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binSixIsOn ? 1 : 0}</div>
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binFiveIsOn ? 1 : 0}</div>
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binFourIsOn ? 1 : 0}</div>
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binThreeIsOn ? 1 : 0}</div>
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binTwoIsOn ? 1 : 0}</div>
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binOneIsOn ? 1 : 0}</div>
            <div className="flex-auto py-6 lg:p-6 text-center border-2 w-0.5 lg:h-full h-20">{binZeroIsOn ? 1 : 0}</div>
          </div>

          <div className="flex flex-row item-center justify-center py-2 lg:py-0">
            <motion.div 
              data-isOn={binSevenIsOn}
              onClick={binSevenSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5 lg:h-full h-20"
              initial={{ scale: 0 }}
              animate={{ y: binSevenIsOn ? -90 : 0, scale: 1, opacity: binSevenIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
            <motion.div 
              data-isOn={binSixIsOn}
              onClick={binSixSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5"
              initial={{ scale: 0 }}
              animate={{ y: binSixIsOn ? -90 : 0, scale: 1, opacity: binSixIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
            <motion.div 
              data-isOn={binFiveIsOn}
              onClick={binFiveSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5"
              initial={{ scale: 0 }}
              animate={{ y: binFiveIsOn ? -90 : 0, scale: 1, opacity: binFiveIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
            <motion.div 
              data-isOn={binFourIsOn}
              onClick={binFourSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5"
              initial={{ scale: 0 }}
              animate={{ y: binFourIsOn ? -90 : 0, scale: 1, opacity: binFourIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
            <motion.div 
              data-isOn={binThreeIsOn}
              onClick={binThreeSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5"
              initial={{ scale: 0 }}
              animate={{ y: binThreeIsOn ? -90 : 0, scale: 1, opacity: binThreeIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
            <motion.div 
              data-isOn={binTwoIsOn}
              onClick={binTwoSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5"
              initial={{ scale: 0 }}
              animate={{ y: binTwoIsOn ? -90 : 0, scale: 1, opacity: binTwoIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
            <motion.div 
              data-isOn={binOneIsOn}
              onClick={binOneSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5"
              initial={{ scale: 0 }}
              animate={{ y: binOneIsOn ? -90 : 0, scale: 1, opacity: binOneIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
            <motion.div 
              data-isOn={binZeroIsOn}
              onClick={binZeroSwitch}
              className="flex-auto py-6 lg:p-6 text-center border-2 bg-slate-800 dark:bg-gray-100 w-0.5"
              initial={{ scale: 0 }}
              animate={{ y: binZeroIsOn ? -90 : 0, scale: 1, opacity: binZeroIsOn ? 0.5 : 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >&#160;</motion.div>
          </div>

          <div className="flex flex-row item-center justify-center text:lg lg:text-4xl">
            <div className="w-1/3 p-4 item-center justify-center flex">
              Your Result: {(binSevenIsOn ? 128 : 0) + (binSixIsOn ? 64 : 0) + (binFiveIsOn ? 32 : 0) + (binFourIsOn ? 16 : 0) + (binThreeIsOn ? 8 : 0) + (binTwoIsOn ? 4 : 0) + (binOneIsOn ? 2 : 0) + (binZeroIsOn ? 1 : 0)}
            </div>
          </div>
            
          {/* Binary Wuiz */}
        <div className="flex flex-col justify-center items-center pt-8">
          <div className="w-[35%] py-3 bg-indigo-600 rounded-lg justify-center flex text-2xl hover:bg-indigo-800">
          <Link href="/quiz-bin"><a>Ready for a binary number quiz?</a></Link>
          </div>
          
        </div>

        </div>

        

        {/* Heaxadecimal Tool */}
        <div className="h-screen shadow-md text-xl lg:text-4xl dark:shadow-white" id="hexadecimal">
          <div className="w-screen flex flex-row item-center justify-center lg:px-96">
            <div className={hexTwo != '0' ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>256</div>
            <div className={hexOne != '0' ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>16</div>
            <div className={hexZero != '0' ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>1</div>
          </div>

          <div className="w-screen flex flex-row item-center justify-center lg:px-96">
            <div className={hexTwo != '0' ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>16<sup>2</sup></div>
            <div className={hexOne != '0' ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>16<sup>1</sup></div>
            <div className={hexZero != '0' ? "flex-auto py-6 lg:p-6 text-center border-2 w-0.5" : "flex-auto py-6 lg:p-6 text-center border-2 w-0.5 dark:text-slate-800 text-slate-100"}>1<sup>0</sup></div>
          </div>

          <div className="w-screen flex flex-row item-center justify-center lg:px-96">
            <textarea 
              className="flex-auto py-6 lg:p-6 text-center border-2 lg:w-0.5 dark:bg-black dark:text-white"
              value={hexTwo}
              onChange={(e) => setHexTwo(e.target.value)}
              ></textarea>
            <textarea 
              className="flex-auto py-6 lg:p-6 text-center border-2 lg:w-0.5 dark:bg-black dark:text-white"
              value={hexOne}
              onChange={(e) => setHexOne(e.target.value)}
              ></textarea>
            <textarea 
              className="flex-auto py-6 lg:p-6 text-center border-2 lg:w-0.5 dark:bg-black dark:text-white"
              value={hexZero}
              onChange={(e) => {
                setHexZero(e.target.value);
              }}
              ></textarea>
          </div>
          
          <div className="flex flex-col item-center justify-center text:lg lg:text-4xl">
            <div className="py-4 flex flex-row item-center justify-center lg:text-4xl">
              <div>{hexTwo} x 16<sup>2</sup> + {hexOne} x 16<sup>1</sup> + {hexZero} x 1<sup>0</sup></div>
            </div>
            <div className="py-4 flex flex-row item-center justify-center lg:text-4xl">
              <div>Your Result: {returnHexValues()}</div>
            </div>
          </div>
     

          

        </div>

        {/* Hexadecimal Quiz */}
        
        
      </main>

      <Footer />
    </div>
  )
}
