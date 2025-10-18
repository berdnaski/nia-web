"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/useToast"
import { registerSchema } from "@/features/auth/schema"
import Image from "next/image"
import Logo from "@/assets/logo.png"
import Nia from "@/assets/nia.png"
import { Mail, Lock, User, LockIcon } from "lucide-react"

type FormValues = z.infer<typeof registerSchema>

export default function RegisterForm() {
  const { register: registerAction, isAuthenticated } = useAuth()
  const router = useRouter()
  const toast = useToast()

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  })

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/onboarding")
    }
  }, [isAuthenticated, router])

  const onSubmit = async (data: FormValues) => {
    try {
      await registerAction(data.name, data.email, data.password, data.avatarUrl)
      toast.success("Conta criada! Faça login.")
      router.push("/login")
    } catch (err: any) {
      toast.error(err?.response?.data?.message ?? "Erro ao criar conta")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="hidden lg:block lg:p-6 xl:p-8 2xl:p-16 flex flex-col justify-between">
            <div className="space-y-4 lg:space-y-6 xl:space-y-8">
              <div className="flex items-center gap-2 lg:gap-3">
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="Logo Sintonia"
                  width={62}
                  height={57}
                  className="w-10 h-10 lg:w-12 lg:h-12 xl:w-[62px] xl:h-[57px]"
                />
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#FF2897]">Sintonia</h1>
              </div>

              <div className="space-y-3 lg:space-y-4 max-w-lg">
                <h2 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
                  Comece
                  <br />
                  sua
                  <span className="text-[#FF2897]"> jornada</span>
                </h2>
                <p className="text-gray-600 text-base lg:text-lg xl:text-xl max-w-md leading-relaxed">
                  Crie sua conta gratuita e descubra como fortalecer sua conexão através de insights personalizados e
                  inteligência emocional.
                </p>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4 lg:mt-12 xl:mt-20 2xl:mt-[150px]">
              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 xl:p-6 bg-gray-50 rounded-lg border border-gray-100">
                <Image
                  alt="Logo Personagem nia"
                  src={Nia}
                  width={56}
                  height={46}
                  className="w-10 h-8 lg:w-12 lg:h-10 xl:w-14 xl:h-[46px]"
                />
                <div>
                  <h3 className="font-bold text-sm lg:text-base xl:text-[18px] text-black mb-1">Inteligência Emocional</h3>
                  <p className="text-xs lg:text-sm font-normal text-[#343232]">
                    Na análise seus sinais e oferece insights únicos para fortalecer sua relação
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 xl:p-6 bg-gray-50 rounded-lg border border-gray-100">
                <div className="bg-purple-500 px-2 py-2 rounded-xl">
                  <LockIcon size={24} color="white" className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-sm lg:text-base xl:text-[18px] text-black mb-1">Privacidade Total</h3>
                  <p className="text-xs lg:text-sm font-normal text-[#343232]">
                    Seus momentos são só seus. Compartilhe apenas o que desejar!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-8 xl:p-12 2xl:p-16 flex items-center justify-center">
            <div className="w-full max-w-md space-y-5 lg:space-y-6 xl:space-y-8">
              <div className="text-start space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold text-black">Criar conta!</h2>
                <p className="text-black text-base sm:text-lg lg:text-lg xl:text-xl font-normal">Preencha seus dados para começar</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-4 xl:space-y-5">
                <div>
                  <label className="text-black font-semibold text-sm lg:text-sm xl:text-md">Nome</label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 lg:left-3 xl:left-4 top-1/2 -translate-y-1/2 text-[#191919] opacity-75 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                    <input
                      placeholder="Nome completo"
                      {...register("name")}
                      className="w-full text-sm font-light pl-9 lg:pl-10 xl:pl-12 pr-4 py-3 lg:py-3 xl:py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF2897] focus:border-transparent transition-all"
                    />
                  </div>
                  {formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">{formState.errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-black font-semibold text-sm lg:text-sm xl:text-md">Email</label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 lg:left-3 xl:left-4 top-1/2 -translate-y-1/2 text-[#191919] opacity-75 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />
                    <input
                      placeholder="seuemail@gmail.com"
                      type="email"
                      {...register("email")}
                      className="w-full text-sm font-light pl-9 lg:pl-10 xl:pl-12 pr-4 py-3 lg:py-3 xl:py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF2897] focus:border-transparent transition-all"
                    />
                  </div>
                  {formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">{formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-black font-semibold text-sm lg:text-sm xl:text-md">Senha</label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-3 lg:left-3 xl:left-4 top-1/2 -translate-y-1/2 text-[#191919] opacity-75 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    />

                    <input
                      placeholder="..................................."
                      type="password"
                      {...register("password")}
                      className="w-full text-sm font-light pl-9 lg:pl-10 xl:pl-12 pr-4 py-3 lg:py-3 xl:py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF2897] focus:border-transparent transition-all"
                    />
                  </div>
                  {formState.errors.password && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">{formState.errors.password.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full py-3 lg:py-3 xl:py-4 rounded-xl bg-gradient-to-r from-[#FF2776] to-[#FFA7C0] text-white font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-pink-500/25"
                >
                  {formState.isSubmitting ? "Criando conta..." : "Criar conta"}
                </button>
              </form>

              <div className="space-y-3 lg:space-y-3 xl:space-y-4">
                <div className="text-center text-sm lg:text-sm xl:text-[16px] font-thin">
                  <p className="text-black">
                    Já tem uma conta?{" "}
                    <button
                      onClick={() => router.push("/login")}
                      className="text-[#DC143C] font-semibold hover:underline"
                    >
                      Fazer login
                    </button>
                  </p>
                </div>

                <div className="border-t border-gray-200 my-4"></div>

                <p className="text-xs text-center text-black font-thin leading-relaxed">
                  Ao continuar, você concorda com nossos{" "}
                  <a href="#" className="font-normal hover:underline">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="font-normal hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
