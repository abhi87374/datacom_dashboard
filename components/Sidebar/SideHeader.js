import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {
  FaBasketballBall,
  FaFacebook,
  FaLinkedin,
  FaDiscord,
  FaGoogle,
} from "react-icons/fa";

const SideHeader = () => {
  return (
    <>
      <div className="navbarHeader grid justify-center text-center border text-white bg-gradient-to-br from-slate-700 from-1% to-black to-30% p-6 gap-2 rounded-3xl">
        <div className="icon rounded-full  overflow-hidden -mt-20 w-fit m-auto">
          <Image
            className="navbarIcon border-4 border-white rounded-full "
            src="/bitmo1.jpg"
            alt="datamoc"
            width={130}
            height={200}
          />
        </div>
        <h1 className="font-bold text-3xl">Datamoc</h1>
        <Link href="https://www.datamoc.com">www.datamoc.com</Link>
        <div className="navIcons flex justify-between py-2">
          <FaFacebook
            className="hover:scale-110 trasition duration-200"
            size={25}
          ></FaFacebook>
          <FaBasketballBall
            className="hover:scale-110 trasition duration-200"
            size={25}
          ></FaBasketballBall>
          <FaLinkedin
            className="hover:scale-110 trasition duration-200"
            size={25}
          ></FaLinkedin>
          <FaDiscord
            className="hover:scale-110 trasition duration-200"
            size={25}
          ></FaDiscord>
          <FaGoogle
            className="hover:scale-110 trasition duration-200"
            size={25}
          ></FaGoogle>
        </div>
      </div>
    </>
  );
}

export default SideHeader
