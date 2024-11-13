'use client';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import {Bitcoin, House, Wallet} from 'lucide-react';

// accept className prop
export const Navbar = ({className}: { className?: string }) => {

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: House,
    },
    {
      name: 'Cashflow',
      link: '#',
      icon: Wallet
    },
    {
      name: 'Net Worth',
      link: '#',
      icon: Bitcoin
    }
  ];

  return (
    <div className={cn('flex flex-1 flex-nowrap items-center justify-between')}>
      {navItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mr-4">
          <item.icon size={18} />
          <Link
            className={'text-sm'}
            href={item.link}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
