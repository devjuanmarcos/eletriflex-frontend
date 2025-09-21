import React from "react";
import { Button } from "../ui/button";

export const ContactSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className=" mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-03-bold mb-4 text-gray-900">Entre em contato para tirarmos suas dúvidas</h2>
          <p className="body-paragraph mb-8 text-gray-700">
            Estamos disponíveis 100% do tempo prontos para te atender.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">Entrar em contato</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
