'use client'
import {ChartConfig} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {useState} from 'react';
import {Progress} from '@/components/ui/progress'
import Insights from '@/components/ttmm/homepage/insights';

export default function Hero() {

  const [selectedMonth, setSelectedMonth] = useState('November');

  return (
    <div className={'py-14'}>
      <div className={'flex items-center justify-between '}>
        <p className={'text-2xl font-semibold'}>Summary</p>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select a month"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="11">November</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <p className={'space-x-4 mt-4 font-semibold'}>
        Balance
      </p>
      <div className={'flex items-center justify-between gap-24'}>
          <span className={'font-semibold'}>
            &#8377;13,412.12
          </span>
        <div className={'flex-1'}>
          <Progress className={'h-2'} value={50}/>
        </div>
      </div>
    </div>
  );
}
