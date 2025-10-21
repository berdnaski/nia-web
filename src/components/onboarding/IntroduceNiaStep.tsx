import Image from "next/image";
import Nia from "@/assets/nia.png";
import { Lock, Sparkles, Shield } from "lucide-react";

export default function IntroduceNiaStep() {
  const features = [
    {
      icon: Sparkles,
      title: "Sugestões práticas",
      description:
        "Receba desafios e rituais personalizados para fortalecer a conexão no dia a dia.",
      bgColor: "bg-[#4884FC]",
    },
    {
      icon: Sparkles,
      title: "Análises personalizadas",
      description:
        "Nia identifica padrões únicos nos seus sinais e oferece insights exclusivos para o seu relacionamento",
      bgColor: "bg-[#4884FC]",
    },
    {
      icon: Lock,
      title: "Privacidade garantida",
      description:
        "Suas conversas com Nia são completamente privadas e você controla o que compartilhar",
      bgColor: "bg-[#4884FC]",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[14px] sm:w-[100%] mx-auto">
      <div className="flex flex-col mb-[32px] gap-[14px] items-center">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center sm:flex-row mt-[14px] gap-[14px]">
            <Image src={Nia} className="lg:w-[120px] lg:h-[120px] w-[70px] h-[70px]" alt="Logo nia" />
            <div className="flex flex-col lg:flex-col items-start gap-[14px]">
  
              <h1 className="text-center sm:text-start text-[32px] md:text-5xl font-semibold w-[75%] sm:w-[100%] mx-auto">
                Conheça Nia
              </h1>
                          <p className="sm:w-[100%] text-[16px] text-black">
              Nia analisa os sinais do seu relacionamento e oferece orientações
              baseadas em inteligência emocional.
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full border-3 border-[#4884FC] rounded-xl bg-gradient-to-b from-[#C4EFFF] to-[#FFFFFF] p-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex gap-4 p-2 items-center rounded-xl">
              <div
                className={`w-12 h-[50px] ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <IconComponent size={16} color="white" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <h3 className="sm:text-[20px] text-[14px] font-bold text-black">
                  {feature.title}
                </h3>
                <p className="sm:text-[18px] text-[12px] text-black leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
