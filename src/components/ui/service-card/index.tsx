import React, { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
}

export const ServiceCard = ({ icon, title, description, iconBgColor = "bg-blue-100" }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-md p-4 h-full">
      <div className="mb-4">
        <div className={`${iconBgColor} w-10 h-10 rounded-md flex items-center justify-center`}>{icon}</div>
      </div>
      <div className="flex flex-col gap-1 text-center">
        <h3 className="body-callout-bold">{title}</h3>
        <p className="body-callout-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
