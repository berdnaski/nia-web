'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useOnboardingSteps, OnboardingStep } from '@/hooks/useOnboardingSteps'
import OnboardingNavigation from '@/components/onboarding/OnboardingNavigation'
import QuestionStep from '@/components/onboarding/QuestionStep'
import LivingTogetherStep from '@/components/onboarding/LivingTogetherStep'
import MainReasonStep from '@/components/onboarding/MainReasonStep'
import LoveLanguagesStep from '@/components/onboarding/LoveLanguagesStep'
import ConnectionDemonstrationStep from '@/components/onboarding/ConnectionDemonstrationStep'
import DisagreementStep from '@/components/onboarding/DisagreementStep'

const coupleQuestionSteps: OnboardingStep[] = [
  {
    id: 1,
    title: 'Tempo de Relacionamento',
    description: 'Há quanto tempo vocês estão juntos?',
    component: QuestionStep
  },
  {
    id: 2,
    title: 'Moradia',
    description: 'Vocês moram juntos?',
    component: LivingTogetherStep
  },
  {
    id: 3,
    title: 'Motivo Principal',
    description: 'Qual o principal motivo que trouxe vocês ao Sintonia?',
    component: MainReasonStep
  },
  {
    id: 4,
    title: 'Linguagens do Amor',
    description: 'O que mais faz vocês se sentir conectado(a) e valorizado(a)?',
    component: LoveLanguagesStep
  },
  {
    id: 5,
    title: 'Demonstração de Conexão',
    description: 'Como vocês mais gosta de demonstrar sua conexão?',
    component: ConnectionDemonstrationStep
  },
  {
    id: 6,
    title: 'Desacordos',
    description: 'Como vocês lidam com desacordos?',
    component: DisagreementStep
  }
]

export default function CoupleQuestionsPage() {
  const router = useRouter()
  const {
    currentStep,
    currentStepData,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    progress,
    totalSteps,
    stepNumber
  } = useOnboardingSteps(coupleQuestionSteps)

  const handleComplete = () => {
    router.push('/dashboard')
  }

  const handleGoBack = () => {
    router.push('/onboarding')
  }

  const CurrentStepComponent = currentStepData.component

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4'>
      <div className='w-full sm:bg-white max-w-3xl mx-auto sm:rounded-xl sm:p-8 flex flex-col sm:block min-h-screen sm:min-h-0'>
        <div className='flex-1 flex items-center justify-center sm:block'>
          <CurrentStepComponent />
        </div>
        
        <div className='w-full max-w-md mx-auto mb-8 sm:max-w-none sm:mx-0 sm:mb-0'>
          <OnboardingNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            progress={progress}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onPrevious={isFirstStep ? handleGoBack : prevStep}
            onNext={nextStep}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  )
}