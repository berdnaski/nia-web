import Image from "next/image";
import Logo from "@/assets/logo.png";
import FeatureCard from "./FeatureCard";

export default function HowItWorksStep() {
  const preferences = [
    {
      number: 1,
      title: "Defina suas preferências",
      description:
        "Configure como você gostaria de receber orientações e sugestões personalizadas.",
      bgColor: "bg-gradient-to-b from-[#FF2776] to-[#FFA7C0]",
    },
    {
      number: 2,
      title: "Escolha sua frequência",
      description:
        "Determine com que frequência você deseja receber insights e análises do seu relacionamento.",
      bgColor: "bg-gradient-to-b from-[#FF2776] to-[#FFA7C0]",
    },
    {
      number: 3,
      title: "Personalize sua experiência",
      description:
        "Ajuste as configurações para que Nia possa oferecer a melhor experiência para você.",
      bgColor: "bg-gradient-to-b from-[#FF2776] to-[#FFA7C0]",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[14px] sm:w-[100%] mx-auto">
      <div className="flex flex-col mb-[32px] gap-[14px] items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Image src={Logo} className="w-[48px] h-[48px]" alt="Logo" />
            <h1 className="font-extrabold text-[32px] bg-gradient-to-r from-[#FF2776] to-[#FFA7C0] bg-clip-text text-transparent">Sintonia</h1>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-[32px] md:text-5xl font-semibold">
              Como funciona
            </h1>
            <p className="text-[16px] text-black">
              Em 3 passos simples, vocês cultivam a conexão.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="bg-gradient-to-r from-[#FF2776] to-[#FFA7C0] rounded-xl p-[3px]">
          <div className="flex flex-col gap-4 w-full rounded-xl bg-white p-4">
            {preferences.map((preference, index) => (
              <FeatureCard
                key={index}
                number={preference.number}
                title={preference.title}
                description={preference.description}
                bgColor={preference.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}