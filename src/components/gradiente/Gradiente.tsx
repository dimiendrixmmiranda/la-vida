"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

interface GradienteProps{
    children: React.ReactNode
}
export function Gradiente({children}:GradienteProps) {
    return (
        <div className="w-full h-full">
            <BackgroundGradient className="rounded-[22px] bg-azul-medio p-4 w-full h-full lg:p-8">
                {
                    children
                }
            </BackgroundGradient>
        </div>
    );
}
