interface OnboardingFooterProps {
  currentStep: number;
  totalSteps: number;
  onPrevious?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  previousLabel?: string;
  showPrevious?: boolean;
  showNext?: boolean;
}

export default function OnboardingFooter({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  nextLabel = "Próximo",
  previousLabel = "Voltar",
  showPrevious = true,
  showNext = true,
}: OnboardingFooterProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mt-8">
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-gradient-to-r from-[#FF2776] to-[#FFA7C0] h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-500 mb-6 text-left">
        Passo {currentStep} de {totalSteps}
      </p>

      <div className="flex justify-between gap-4">
        {showPrevious ? (
          <button
            onClick={onPrevious}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ← {previousLabel}
          </button>
        ) : (
          <div></div>
        )}

        {showNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF2776] to-[#FFA7C0] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            {nextLabel} →
          </button>
        )}
      </div>
    </div>
  );
}