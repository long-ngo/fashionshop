import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/image/earphones.webp';
import Link from 'next/link';
export default function Banner() {
  return (
    <div className="bg-[#dcdcdc] rounded-2xl mx-4 py-6 overflow-hidden">
      <Image src={bannerImg} alt="banner" />
      <div className="mx-6">
        <p className="text-xl">Beats Solo Air</p>
        <h1 className="text-4xl font-bold">Summer Sale</h1>
        <h3 className="text-5xl font-bold text-white">FINE</h3>
      </div>
      <Link href="/#">
        <a className="inline-block bg-[#f02d34] py-3 px-4 mx-6 mt-4 text-white rounded-2xl">
          Shop Now
        </a>
      </Link>
      <div className="text-end mx-6">
        <p className="text-[#324d67] text-base font-bold">Description</p>
        <p className="text-[#5f5f5f] font-thin">
          Best headphones on the market
        </p>
      </div>
    </div>
  );
}
