import React from "react";
import { ServiceCard } from "../ui/service-card";
import Icon from "@mdi/react";
import {
  mdiClipboardListOutline,
  mdiAccountSupervisorOutline,
  mdiCheckDecagramOutline,
  mdiShieldCheckOutline,
  mdiClockOutline,
  mdiPlusBoxOutline,
  mdiCogOutline,
  mdiCashRegister,
  mdiCheckCircleOutline,
  mdiArrowLeftRightBold,
} from "@mdi/js";

export const ServicesSection = () => {
  const services = [
    {
      title: "Solicitação Rápida",
      description: "Peça serviços de instalação, corretiva ou personalizados de forma simples pelo aplicativo.",
      icon: <Icon path={mdiClipboardListOutline} size={1} color="#FF5722" />,
      iconBgColor: "bg-orange-100",
    },
    {
      title: "Gestão de Chamados",
      description: "Acompanhe chamados em andamento e visualize detalhes de cada solicitação recebida.",
      icon: <Icon path={mdiAccountSupervisorOutline} size={1} color="#FF9800" />,
      iconBgColor: "bg-amber-100",
    },
    {
      title: "Escolha de Técnico",
      description: "Visualize técnicos próximos da sua localização e selecione o que preferir.",
      icon: <Icon path={mdiCheckDecagramOutline} size={1} color="#FFC107" />,
      iconBgColor: "bg-yellow-100",
    },
    {
      title: "Aceite de Serviços",
      description: "Confirme o chamado para acessar endereço, contato e iniciar o atendimento ao cliente.",
      icon: <Icon path={mdiShieldCheckOutline} size={1} color="#CDDC39" />,
      iconBgColor: "bg-lime-100",
    },
    {
      title: "Confirmação Segura",
      description: "Após confirmar o chamado, o técnico é notificado e deve validar um código antes de iniciar.",
      icon: <Icon path={mdiCheckCircleOutline} size={1} color="#8BC34A" />,
      iconBgColor: "bg-green-100",
    },
    {
      title: "Validação Obrigatória",
      description: "Antes de começar, valide o código fornecido pelo cliente para garantir segurança.",
      icon: <Icon path={mdiShieldCheckOutline} size={1} color="#4CAF50" />,
      iconBgColor: "bg-emerald-100",
    },
    {
      title: "Acompanhamento do Serviço",
      description: "Acompanhe em tempo real o andamento do chamado e qualquer alteração solicitada pelo técnico.",
      icon: <Icon path={mdiClockOutline} size={1} color="#009688" />,
      iconBgColor: "bg-teal-100",
    },
    {
      title: "Adição de Serviços",
      description: "Inclua serviços extras no chamado quando necessário, com valores já definidos.",
      icon: <Icon path={mdiPlusBoxOutline} size={1} color="#03A9F4" />,
      iconBgColor: "bg-sky-100",
    },
    {
      title: "Finalização e Pagamento",
      description: "Finalize o serviço e gere o QR Code para pagamento via Pix de forma rápida.",
      icon: <Icon path={mdiCashRegister} size={1} color="#2196F3" />,
      iconBgColor: "bg-blue-100",
    },
    {
      title: "Repasse da Plataforma",
      description: "Após receber do cliente, faça o repasse do valor à plataforma para liberar novos chamados.",
      icon: <Icon path={mdiArrowLeftRightBold} size={1} color="#3F51B5" />,
      iconBgColor: "bg-indigo-100",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor={service.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
