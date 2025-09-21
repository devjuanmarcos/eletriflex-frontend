"use client";

import React from "react";
import BarToolsSkeleton from "../ui/BarToolsSkeleton";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import SwitchWithIcon from "../ui/switchWithIcon";

export const CombinedHeader = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <BarToolsSkeleton />;
  }

  return (
    <header className="bg-background flex justify-between items-center h-16 gap-4 section-container">
      <Image src={"/img/logo-modo-claro.png"} alt={"Logo"} aria-label={"Logo"} width={109} height={37} />

      <div className="flex gap-8">
        <Link href="/" className="body-callout-bold">
          Home
        </Link>

        <Link href="/" className="body-callout-bold">
          Contato
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <SwitchWithIcon />
        <Button>Baixar o app</Button>
      </div>
    </header>
  );
};

export default CombinedHeader;
