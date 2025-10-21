import { useState } from 'react'
import Image from "next/image"
import Nia from "@/assets/nia.png"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface QuestionStepProps {
  onNext?: () => void
  onPrevious?: () => void
}

export default function QuestionStep({ onNext, onPrevious }: QuestionStepProps) {
  const [relationshipStart, setRelationshipStart] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelationshipStart(e.target.value)
  }

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

          <div className="relative bg-[#CDEAFF] rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 max-w-md sm:max-w-lg">
            <div className="absolute -left-3 top-8 transform -translate-y-1/2">
              <div className="w-6 h-6 bg-[#CDEAFF] border-l border-t border-gray-100 transform -rotate-45"></div>
            </div>
            
            <div className="text-left">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed">
                Há quanto tempo vocês estão construindo essa conexão?
              </h2>
            </div>
          </div>
        </div>

        <div className='w-full max-w-md mx-auto space-y-6'>
          <div className="text-center space-y-2">
            <Label htmlFor="relationship-start" className='block text-gray-700 font-semibold text-lg'>
              Data de início do relacionamento
            </Label>
            <p className='text-sm text-gray-500 leading-relaxed'>
              Nos conte quando vocês começaram essa jornada juntos
            </p>
          </div>
          
          <div className='relative'>
            <Input
              id="relationship-start"
              type="date"
              value={relationshipStart}
              onChange={handleInputChange}
              className='w-full px-6 py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none text-center text-lg font-medium bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md'
              placeholder='Selecione a data'
            />
          </div>
        </div>
      </div>
    </div>
  )
}