import { CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const allServices = [
  "Revisão geral", "Troca de óleo", "Troca de filtros", "Freios", "Suspensão",
  "Amortecedores", "Motor", "Diagnóstico eletrônico", "Injeção eletrônica",
  "Bateria", "Arrefecimento", "Radiador", "Correias", "Embreagem",
  "Escapamento", "Alinhamento", "Balanceamento", "Troca de pneus",
  "Direção", "Velas", "Limpeza de bicos", "Sistema elétrico",
  "Ar-condicionado automotivo", "Pré-inspeção", "Manutenção preventiva", "Check-up completo",
];

const ServiceListSection = () => (
  <section id="lista-servicos" className="py-20 md:py-28 bg-surface-list">
    <div className="container">
      <SectionHeader
        tag="Lista completa"
        title="Todos os nossos serviços"
        description="Confira a amplitude de soluções que oferecemos para seu veículo."
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
      >
        {allServices.map((s) => (
          <div
            key={s}
            className="flex items-center gap-3 py-3 px-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/20 transition-colors"
          >
            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm text-foreground">{s}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServiceListSection;
