import { Check } from '@phosphor-icons/react'

export interface Props {
  isActive: boolean
  isSuccess: boolean
  icon: React.ReactNode
  className?: string
}

export const StepperItemCircle = ({ isActive, isSuccess, icon, className = '' }: Props) => (
  <div className={`rounded-full ${ isActive ? "border-2 border-dynamicGreen text-dynamicGreen" : isSuccess ? "border-2 border-transparent" : "border-2 border-transparent"} ${ className }`}>
    <div className={`size-12 flex items-center justify-center rounded-full 
      ${ isActive ? "" : isSuccess ? "bg-dynamicGreen text-background" : "bg-[rgba(255,255,255,0.08)] text-white"}`}>
      { isSuccess && !isActive ? <Check size={ 24 } /> : icon }
    </div>
  </div>
)