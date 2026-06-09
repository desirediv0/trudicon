import React from "react";
import { motion } from "framer-motion";

export function ImagePlaceholder({
  aspectRatio = "aspect-[16/10]",
  borderRadius = "rounded-[32px]",
  icon: Icon,
  text,
  className = "",
  src,
}: {
  aspectRatio?: string;
  borderRadius?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  className?: string;
  src?: string;
}) {
  if (src) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative w-full ${aspectRatio} ${borderRadius} overflow-hidden group border border-border bg-[#F8FAFC]/50 ${className}`}
      >
        <img
          src={src}
          alt={text}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative w-full ${aspectRatio} ${borderRadius} border border-dashed border-border bg-[#F8FAFC]/50 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group transition-all duration-300 hover:border-primary/20 hover:bg-[#F8FAFC] ${className}`}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:16px_16px]" />

      {Icon && (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border text-[#5B6470] transition-all duration-300 group-hover:scale-105 group-hover:text-primary">
          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
        </div>
      )}
      <span className="mt-4 text-xs font-bold uppercase tracking-wider text-[#5B6470] group-hover:text-primary transition-colors duration-300">
        {text}
      </span>
    </motion.div>
  );
}
