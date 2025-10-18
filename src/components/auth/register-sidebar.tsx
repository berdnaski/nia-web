"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RegisterSidebarProps {
  className?: string
}

export function RegisterSidebar({ className }: RegisterSidebarProps) {
  return (
    <Card className={cn("bg-gradient-to-br from-[#FF2897] to-[#DC143C] border-0", className)}>
      <CardContent className="p-8 xl:p-12 h-full flex flex-col justify-center">
        <div className="space-y-6 xl:space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
              Bem-vindo à nossa plataforma!
            </h2>
            <p className="text-white/90 text-lg xl:text-xl leading-relaxed">
              Crie sua conta e tenha acesso a todas as funcionalidades exclusivas.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-white/90 text-base xl:text-lg">
                Acesso completo a todos os recursos
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-white/90 text-base xl:text-lg">
                Interface intuitiva e fácil de usar
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-white/90 text-base xl:text-lg">
                Suporte técnico especializado
              </p>
            </div>
          </div>

          <div className="pt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 xl:p-6">
              <p className="text-white/95 text-sm xl:text-base italic">
                "A melhor plataforma que já utilizei. Simples, rápida e eficiente!"
              </p>
              <p className="text-white/80 text-xs xl:text-sm mt-2">
                - Cliente satisfeito
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}