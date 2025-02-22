export interface Props {
  isActive: boolean
  isSuccess: boolean
}

export const StepperConnectorLine = ({ isActive, isSuccess }: Props) => (
  <span className={`
    absolute 
    top-[calc(1.5rem+2px)] 
    -right-[2px] 
    h-[2px] 
    mt-[-1px]
    ${ isActive ? "w-[calc(100%-3rem)]" : "w-[calc(100%-3rem)]"}
    ${ isSuccess ? "bg-dynamicGreen" : "bg-[rgba(255,255,255,0.08)]"}
  `}></span>
)