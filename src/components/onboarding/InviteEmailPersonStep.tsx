import { Mail } from "lucide-react";

export default function InviteEmailPersonStep() {
  return (
    <div className="flex flex-col items-center gap-[14px] sm:w-[100%] mx-auto">
      <div className="flex flex-col mb-[32px] gap-[14px] items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-[14px] text-center">
            <h1 className="text-[32px] md:text-5xl font-semibold">
              Você está pronto!
            </h1>
            <p className="text-[16px] text-black">
              Insira o email do seu parceiro(a), e convide para começarem um relacionamento juntos no Sintonia!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email do parceiro(a)
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="seuemail@gmail.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Enviaremos um convite para que possam sincronizar seus corações.
        </p>
      </div>
    </div>
  );
}