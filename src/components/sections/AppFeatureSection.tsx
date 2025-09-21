import React from "react";
import Image from "next/image";

export const AppFeatureSection = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Fundo colorido */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/img/jogo-de-luz.png" alt="Fundo colorido" fill className="object-cover" priority />
      </div>

      {/* Conteúdo */}
      <div className=" relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Coluna Esquerda - Imagem do App */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[400px] h-[500px]">
              <Image
                src="/img/prints-do-app.png"
                alt="Telas do aplicativo Eletriflex"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Coluna Direita - Card com texto */}
          <div className="bg-card backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="heading-05-bold text-primary-light mb-4">
              Usando a tecnologia para conectar clientes ao técnico
            </h2>
            <p className="body-paragraph text-foreground">
              Leve para dentro da sua residência profissionais registrados. Seja para trocar uma simples tomada,
              ventilador, chuveiro ou demandas maiores com atendimento online 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
