'use client'

import * as React from 'react';
import TransactionDetailsFilter from '@/components/ttmm/homepage/transactionDetails/filter';
import TransactionRow from '@/components/ttmm/homepage/transactionDetails/transaction-row';
import {cn} from '@/lib/utils';


export default function TransactionDetails() {


  const items = [
    {
      name: 'Netflix',
      amount: 2000,
      type: 'subscription',
      category: 'expense'
    },
    {

      name: 'Rent',
      amount: 200,
      type: 'expense',
      category: 'Rent'
    },
    {

      name: 'Groceries',
      amount: 100,
      type: 'expense',
      category: 'groceries'
    },
    {
      name: 'Salary',
      amount: 2000,
      type: 'income',
      category: 'salary'
    },
    {
      name: 'Rent',
      amount: 200,
      type: 'expense',
      category: 'rent'
    }
  ]

  const dates = [
    'Today', 'Yesterday', 'Last 7 days',
  ]


  return (
    <div className={'mt-8 flex flex-col gap-8'}>

      <div className={'flex items-end justify-between w-full'}>
        <div>
          <p className={'text-2xl'}>Transactions</p>
          <p className={'font-light'}>
            You had 2 incomes and 34 expenses
          </p>
        </div>
        <div className={'flex justify-between items-center gap-10'}>
          <TransactionDetailsFilter/>
        </div>
      </div>

      <div className={'rows px-2 max-h-[500px] overflow-scroll hide-scroll'}>
        {dates.map((date, index) => (
          <div key={'date' + index} className={'flex flex-col w-full'}>
            <span key={'span' + index} className={cn(index === 0 ? 'mb-4' : 'my-4', 'font-medium text-gray-500')}>
              {date}
            </span>
            {items.map((item, index) => (
              <div key={'rows'+index} className={cn(index === 0 ? 'border-y' : 'border-b', 'py-4')}>
                <TransactionRow key={'row'+index} {...item}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )


}
