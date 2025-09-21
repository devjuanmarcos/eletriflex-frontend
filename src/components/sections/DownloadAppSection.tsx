import React from "react";
import { Button } from "../ui/button";
import Icon from "@mdi/react";
import { mdiCellphone, mdiGooglePlay, mdiApple } from "@mdi/js";

export const DownloadAppSection = () => {
  return (
    <section className="w-full py-16 bg-card">
      <div className=" mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <Icon path={mdiCellphone} size={1} color="hsl(var(--primary))" />
                </div>
                <h3 className="heading-05-bold text-primary">Baixe nosso App</h3>
              </div>

              <h2 className="heading-04-medium mb-4 text-foreground">
                Tenha o melhor serviço de eletricidade na palma da sua mão
              </h2>

              <p className="body-paragraph-medium mb-8 text-muted-foreground">
                Com o aplicativo Eletriflex, você encontra profissionais qualificados para resolver seus problemas
                elétricos de forma rápida, segura e com garantia de qualidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-800">
                  <Icon path={mdiApple} size={0.8} />
                  <span>App Store</span>
                </Button>
                <Button className="flex items-center gap-2 bg-primary hover:bg-primary-hover">
                  <Icon path={mdiGooglePlay} size={0.8} />
                  <span>Google Play</span>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 flex items-center justify-center">
              <div className="w-48 h-96 bg-black/20 rounded-3xl border-4 border-white/20 relative flex items-center justify-center">
                <div className="text-white/80 body-paragraph-medium text-center">Preview do App</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
