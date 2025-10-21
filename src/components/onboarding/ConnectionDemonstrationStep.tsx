import { useState } from 'react'
import Image from "next/image"
import Nia from "@/assets/nia.png"

interface ConnectionDemonstrationStepProps {
  onNext?: () => void
  onPrevious?: () => void
}

export default function ConnectionDemonstrationStep({ onNext, onPrevious }: ConnectionDemonstrationStepProps) {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  const options = [
    'Conversas atenciosas e palavras de carinho.',
    'Pequenos gestos de ajuda e serviço (um café feito, uma mãozinha na tarefa).',
    'Momentos de qualidade, com foco total um no outro.',
    'Carinho físico (abraços, beijos, andar de mãos dadas).',
    'Pequenas surpresas ou presentes simbólicos.'
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-8">
          <div className="flex-shrink-0">
            <Image 
              src={Nia} 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" 
              alt="Logo Nia" 
            />
          </div>

          <div className="relative bg-[#CDEAFF] rounded-2xl shadow-lg p-6 sm:p-8 border max-w-md sm:max-w-lg">
            <div className="absolute -left-3 top-8 transform -translate-y-1/2">
              <div className="w-6 h-6 bg-[#CDEAFF] border-l border-t border-gray-100 transform -rotate-45"></div>
            </div>
            
            <div className="text-left">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed">
                E como vocês mais gosta de demonstrar sua conexão? (5 linguagens do amor)
              </h2>
            </div>
          </div>
        </div>
        
        <div className='w-full max-w-md mx-auto space-y-3'>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left font-medium text-lg ${
                selectedOption === option
                  ? 'border-[#FF2897] bg-pink-50 text-pink-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedOption === option
                    ? 'border-[#FF2897] bg-[#FF2897]'
                    : 'border-gray-300'
                }`}>
                  {selectedOption === option && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}</div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}