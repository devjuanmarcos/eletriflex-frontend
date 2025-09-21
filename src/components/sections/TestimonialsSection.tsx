import React from "react";
import Icon from "@mdi/react";
import { mdiStar, mdiAccountCircle, mdiShieldCheck, mdiClockFast, mdiCashMultiple } from "@mdi/js";

export const TestimonialsSection = () => {
  const benefits = [
    {
      icon: mdiShieldCheck,
      title: "Profissionais Verificados",
      description: "Todos os técnicos são verificados e possuem suas credenciais validadas.",
    },
    {
      icon: mdiClockFast,
      title: "Atendimento Rápido",
      description: "Encontre um profissional disponível em sua região em minutos.",
    },
    {
      icon: mdiCashMultiple,
      title: "Preços Transparentes",
      description: "Saiba o valor do serviço antes de confirmar, sem surpresas no final.",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Cliente",
      rating: 5,
      text: "O aplicativo me salvou quando tive problemas elétricos tarde da noite. Em menos de 1 hora um técnico já estava resolvendo o problema.",
    },
    {
      name: "Mariana Costa",
      role: "Cliente",
      rating: 5,
      text: "Serviço excelente! O técnico foi muito profissional e resolveu meu problema rapidamente. O pagamento pelo app também foi super prático.",
    },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-03-bold mb-4 text-foreground">Por que escolher a Eletriflex</h2>
          <p className="body-paragraph-medium text-muted-foreground max-w-2xl mx-auto">
            Nossa plataforma conecta você aos melhores profissionais da área elétrica, garantindo qualidade, segurança e
            rapidez no atendimento.
          </p>
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon path={benefit.icon} size={1} color="hsl(var(--primary))" />
              </div>
              <h3 className="body-title-bold mb-2 text-foreground">{benefit.title}</h3>
              <p className="body-callout-medium text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon path={mdiAccountCircle} size={1.2} color="hsl(var(--primary))" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} path={mdiStar} size={0.6} color="#FFB400" className="mr-0.5" />
                    ))}
                  </div>
                  <p className="body-paragraph-medium mb-3 text-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center">
                    <span className="body-callout-bold text-foreground mr-1">{testimonial.name}</span>
                    <span className="body-callout-medium text-muted-foreground">• {testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
