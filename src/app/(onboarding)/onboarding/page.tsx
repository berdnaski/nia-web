'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useOnboardingSteps, OnboardingStep } from '@/hooks/useOnboardingSteps'
import OnboardingNavigation from '@/components/onboarding/OnboardingNavigation'
import WelcomeStep from '@/components/onboarding/WelcomeStep'
import IntroduceNiaStep from '@/components/onboarding/IntroduceNiaStep'
import HowItWorksStep from '@/components/onboarding/HowItWorksStep'
import InviteEmailPersonStep from '@/components/onboarding/InviteEmailPersonStep'
import CoupleStep from '@/components/onboarding/CoupleStep'

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    title: 'Boas-vindas',
    description: 'Apresentação do Sintonia',
    component: WelcomeStep
  },
  {
    id: 2,
    title: 'Informações Pessoais',
    description: 'Conte-nos sobre você',
    component: IntroduceNiaStep
  },
  {
    id: 3,
    title: 'Preferências',
    description: 'O que mais te interessa',
    component: HowItWorksStep
  },
  {
    id: 4,
    title: 'Conclusão',
    description: 'Tudo pronto!',
    component: InviteEmailPersonStep
  },
  {
    id: 5,
    title: 'Casal',
    description: 'Agora vocês são um casal!',
    component: CoupleStep
  }
]

export default function OnboardingPage() {
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
  } = useOnboardingSteps(onboardingSteps)

  const handleComplete = () => {
    router.push('/couple-questions')
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
            onPrevious={prevStep}
            onNext={nextStep}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  )
}
