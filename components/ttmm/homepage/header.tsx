'use client';
import {Navbar} from '@/components/ttmm/navbar';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex gap-64 items-center">
      <Image src={'/logo.svg'} alt={'logo'} width={40} height={40} />
      <Navbar/>
      <div className="flex items-end w-10 h-10 bg-gray-200 rounded-full">
        <Image src={'/user.svg'} alt={'avatar'} width={40} height={40} />
      </div>
    </div>
  );
}
