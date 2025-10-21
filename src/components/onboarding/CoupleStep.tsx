interface CoupleStepProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function CoupleStep({ onNext, onPrevious }: CoupleStepProps) {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='text-3xl md:text-4xl font-bold text-[#FF2897] mb-6'>
        Agora vocês são um casal!
      </h1>
      
      <p className='text-lg md:text-xl text-gray-700 max-w-md leading-relaxed'>
        Antes de vocês começarem a utilizar o app, a Nia tem algumas perguntas para vocês.
      </p>
    </div>
  );
}