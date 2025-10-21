import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface OnboardingNavigationProps {
  currentStep: number
  totalSteps: number
  progress: number
  isFirstStep: boolean
  isLastStep: boolean
  onPrevious: () => void
  onNext: () => void
  onComplete?: () => void
  canProceed?: boolean
}

export default function OnboardingNavigation({
  currentStep,
  totalSteps,
  progress,
  isFirstStep,
  isLastStep,
  onPrevious,
  onNext,
  onComplete,
  canProceed = true
}: OnboardingNavigationProps) {
  const handleNext = () => {
    if (isLastStep && onComplete) {
      onComplete()
    } else {
      onNext()
    }
  }

  return (
    <div className='flex flex-col mt-[3rem] gap-4'>
      <Progress value={progress} />
      <div className='flex justify-between items-center mb-2'>
        <span className='text-[16px] font-semibold text-gray-500'>
          Passo {currentStep + 1} de {totalSteps}
        </span>
      </div>
      
      <div className='flex justify-between gap-4'>
        <Button 
          disabled={isFirstStep} 
          variant="outline" 
          className='font-bold text-[16px] border border-gray-300 px-2 md:px-6 py-2 flex items-center gap-2 flex-1 max-w-[120px]'
          onClick={onPrevious}
        >
          <ArrowLeft size={14} />
          Voltar
        </Button>
        
        <Button 
          className='font-bold text-[16px] px-2 md:px-6 py-2 bg-gradient-to-r from-[#FE016E] to-[#F49AA7] text-white hover:from-[#E0015E] hover:to-[#E08A97] flex items-center gap-2 flex-1 max-w-[140px]'
          onClick={handleNext}
          disabled={!canProceed}
        >
          {isLastStep ? 'Finalizar' : 'Próximo'}
          <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  )
}