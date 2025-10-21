'use client'

import { useState, useCallback } from 'react'

export interface OnboardingStep {
  id: number
  title: string
  description: string
  component: React.ComponentType
}

export const useOnboardingSteps = (steps: OnboardingStep[], initialStep: number = 0) => {
  const [currentStep, setCurrentStep] = useState(initialStep)

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => {
      const newStep = Math.min(prev + 1, steps.length - 1)
      return newStep
    })
  }, [steps.length, currentStep])

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => {
      const newStep = Math.max(prev - 1, 0)
      return newStep
    })
  }, [currentStep])

  const goToStep = useCallback((stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex)
    }
  }, [steps.length])

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1
  const progress = ((currentStep + 1) / steps.length) * 100

  return {
    currentStep,
    currentStepData: steps[currentStep],
    nextStep,
    prevStep,
    goToStep,
    isFirstStep,
    isLastStep,
    progress,
    totalSteps: steps.length,
    stepNumber: currentStep + 1
  }
}