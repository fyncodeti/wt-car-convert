import { Wrench, Car, ShieldCheck, Settings, Zap, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

import serviceRevisao from "@/assets/service-revisao.jpg";
import serviceOleo from "@/assets/service-oleo.jpg";
import serviceFreios from "@/assets/service-freios.jpg";
import serviceMotor from "@/assets/service-motor.jpg";
import serviceInjecao from "@/assets/service-injecao.jpg";
import serviceAlinhamento from "@/assets/service-alinhamento.jpg";

const services = [
  { icon: Settings, title: "Revisão preventiva", desc: "Manutenção programada para manter seu veículo seguro e econômico.", tag: "Atendimento ágil", image: serviceRevisao },
  { icon: Wrench, title: "Troca de óleo e filtros", desc: "Troca de óleo e filtros com produtos de qualidade e garantia.", tag: "Serviço rápido", image: serviceOleo },
  { icon: ShieldCheck, title: "Freios e suspensão", desc: "Revisão completa de freios, discos, pastilhas e componentes de suspensão.", tag: "Diagnóstico confiável", image: serviceFreios },
  { icon: Car, title: "Motor e diagnóstico", desc: "Análise detalhada do motor com equipamento de diagnóstico eletrônico.", tag: "Serviço especializado", image: serviceMotor },
  { icon: Zap, title: "Injeção eletrônica", desc: "Limpeza e manutenção do sistema de injeção para melhor desempenho.", tag: "Tecnologia avançada", image: serviceInjecao },
  { icon: CircleDot, title: "Alinhamento e balanceamento", desc: "Alinhamento preciso e balanceamento para maior segurança e conforto.", tag: "Equipamento moderno", image: serviceAlinhamento },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 md:py-28 bg-surface-services">
    <div className="container">
      <SectionHeader
        tag="Nossos serviços"
        title="Soluções automotivas completas"
        description="Atendimento direto e profissional para manter seu veículo em perfeitas condições."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 min-h-[280px] flex flex-col"
          >
            {/* Background image with zoom on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${s.image})` }}
            />

            {/* Dark overlay gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-black/85 group-hover:via-black/65 group-hover:to-black/45 transition-all duration-500" />

            {/* Vignette edge effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <div className="w-11 h-11 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 drop-shadow-md">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3 drop-shadow-sm">{s.desc}</p>
              <span className="inline-flex items-center text-xs text-primary font-semibold tracking-wide uppercase drop-shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                {s.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="cta" size="lg" asChild>
          <a href="#contato">Solicitar orçamento</a>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
