import React from "react";
import Image from "next/image";
import Headeritems from "../components/Headeritems";
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
      <div className='flex flex-grow justify-evenly max-w-2xl h-auto'>
        <Headeritems title='HOME' Icon={HomeIcon} />
        <Headeritems title='HOME' Icon={CollectionIcon} />
        <Headeritems title='HOME' Icon={BadgeCheckIcon} />
        <Headeritems title='HOME' Icon={LightningBoltIcon} />
        <Headeritems title='HOME' Icon={SearchIcon} />
        <Headeritems title='HOME' Icon={UserIcon} />
      </div>
      <Image
        src='https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EMZE3ZMGWVGI5JMALPGIHVIKM4.png'
        className='object-contain'
        width={150}
        height={80}
        alt='logo-hulu'
      />
    </header>
  );
}

export default Header;
