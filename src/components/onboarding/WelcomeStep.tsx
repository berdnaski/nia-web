import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import Nia from '@/assets/nia.png'

export default function WelcomeStep() {
  return (
    <div className='flex flex-col gap-[14px] text-center'>
      <h1 className='text-[32px] md:text-5xl font-semibold'>Que bom ter você aqui!</h1>
      
      <p className='text-[16px] font-regular md:text-[20px] text-black'>
        Ajudamos vocês fortalecerem a conexão através dos pequenos momentos que realmente importam.
      </p>

      <div className='flex flex-col gap-6 mb-8 mt-[4rem]'>
        <div className='flex items-center gap-4 bg-white px-4 py-4 rounded-xl shadow-sm'>
          <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#FE016E] to-[#F49AA7] flex items-center justify-center flex-shrink-0'>
            <Sparkles size={18} color="white" />
          </div>
          <div className='flex flex-row items-center justify-between flex-1'>
            <div className='flex-1'>
              <h1 className='text-sm md:text-xl font-bold mb-1'>Como funciona o Sintonia?</h1>
              <p className='text-xs md:text-[18px] text-black'>Aprenda mais sobre o Sintonia de forma rápida</p>
            </div>
            <div className='ml-4'>
              <ArrowRight size={20} className='text-gray-400' />
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white px-4 py-4 rounded-xl shadow-sm'>
          <Image 
            alt='Logo do Sintonia'
            src={Nia}
            width={48}
            height={38}
            className='flex-shrink-0 md:w-14 md:h-11'
          />
          <div className='flex flex-row items-center justify-between flex-1'>
            <div className='flex-1'>
              <h1 className='text-sm md:text-xl font-bold mb-1'>Conheça a Nia</h1>
              <p className='text-xs md:text-[18px] text-black'>Nia analisa seus padrões e oferece orientações personalizadas.</p>
            </div>
            <div className='ml-4'>
              <ArrowRight size={20} className='text-gray-400' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}