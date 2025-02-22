'use client'

import { StepperList, TitleForm } from '@/components'
import { ChartBar, Info, Note, Target } from '@phosphor-icons/react'

interface Props {
  children: React.ReactNode
  title: string
  description?: string
}

export default function QuoteTemplate({ children, title, description } : Props) {
  return (
    <>
      <StepperList/>
      <div className="flex flex-1 overflow-y-auto border border-[rgba(255,255,255,0.16)] rounded-lg">
        <div className="flex-1 p-8">
          <ul className="flex flex-col gap-3">
            <li className="flex gap-1 items-center text-dynamicGreen"><Info size={ 20 } weight="light" />Information</li>
            <li className="flex gap-1 items-center"><Target size={ 20 } weight="light" />Project Goals</li>
            <li className="flex gap-1 items-center"><ChartBar size={ 20 } weight="light" />Knowledge Level</li>
            <li className="flex gap-1 items-center"><Note size={ 20 } weight="light" />Additional Notes</li>
          </ul>
        </div>
        <div className="border-l border-[rgba(255,255,255,0.16)] flex-[4] py-2 pr-2 overflow-y-auto">
          <div className="flex flex-col pt-6 pb-8 px-10 h-full overflow-y-auto quote-content">
            <div className="mb-8">
              <TitleForm title={ title } />
              <p>{ description }</p>
            </div>
            <div className="flex-1 flex flex-col">
              { children }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}