import Link from 'next/link'
import { StepperItemCircle, StepperConnectorLine, StepperItemTitle } from '@/components/Stepper'
import { Step } from '@/interfaces'

interface Props {
  step: Step
  index: number
  isActive: boolean
  isSuccess: boolean
  isLastStep: boolean
}

export const StepperItem = ({ step, isActive, isSuccess, isLastStep }: Props) => {
  
  const StepperItemContent = () => (
    <>
      <StepperItemCircle isActive={ isActive } isSuccess={ isSuccess } icon={ step.icon } />
      <StepperItemTitle title={ step.title } isActive={ isActive } />
    </>
  )

  return (
    <li className="group relative flex flex-1 last:flex-initial">
      { isSuccess ? (
        <Link href={ step.path } className="flex justify-center flex-col items-center hover:text-dynamicGreen">
          <StepperItemContent />
        </Link>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <StepperItemContent />
        </div>
      )}
      { !isLastStep && <StepperConnectorLine isActive={ isActive } isSuccess={ isSuccess } />}
    </li>
  )
}