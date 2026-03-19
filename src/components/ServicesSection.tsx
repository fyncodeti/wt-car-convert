import { Wrench, Car, ShieldCheck, Settings, Zap, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const services = [
  { icon: Settings, title: "Revisão preventiva", desc: "Manutenção programada para manter seu veículo seguro e econômico.", tag: "Atendimento ágil" },
  { icon: Wrench, title: "Troca de óleo e filtros", desc: "Troca de óleo e filtros com produtos de qualidade e garantia.", tag: "Serviço rápido" },
  { icon: ShieldCheck, title: "Freios e suspensão", desc: "Revisão completa de freios, discos, pastilhas e componentes de suspensão.", tag: "Diagnóstico confiável" },
  { icon: Car, title: "Motor e diagnóstico", desc: "Análise detalhada do motor com equipamento de diagnóstico eletrônico.", tag: "Serviço especializado" },
  { icon: Zap, title: "Injeção eletrônica", desc: "Limpeza e manutenção do sistema de injeção para melhor desempenho.", tag: "Tecnologia avançada" },
  { icon: CircleDot, title: "Alinhamento e balanceamento", desc: "Alinhamento preciso e balanceamento para maior segurança e conforto.", tag: "Equipamento moderno" },
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
            className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.desc}</p>
            <span className="text-xs text-primary font-medium">{s.tag}</span>
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
