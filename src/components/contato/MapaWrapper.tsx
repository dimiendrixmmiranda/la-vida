"use client";
import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("./Mapa"), { ssr: false });

export default function MapaWrapper({ position }: { position: [number, number] }) {
  return <Mapa position={position} />;
}
