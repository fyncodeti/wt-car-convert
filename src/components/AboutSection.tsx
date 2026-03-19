import { ShieldCheck, Wrench, CheckCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const features = [
  { icon: ShieldCheck, title: "Atendimento transparente", desc: "Sem surpresas. Você sabe exatamente o que será feito." },
  { icon: Wrench, title: "Equipe preparada", desc: "Profissionais experientes e em constante atualização." },
  { icon: CheckCircle, title: "Atenção aos detalhes", desc: "Cada serviço é realizado com cuidado e precisão." },
  { icon: Car, title: "Compromisso com seu veículo", desc: "Tratamos seu carro como se fosse nosso." },
];

const stats = [
  { value: "2.500+", label: "Clientes atendidos" },
  { value: "5.000+", label: "Serviços realizados" },
  { value: "10+", label: "Anos de experiência" },
  { value: "98%", label: "Satisfação" },
];

const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-28 bg-surface-about">
    <div className="container">
      <SectionHeader
        tag="Sobre nós"
        title="Cuidamos do seu veículo com atenção e compromisso"
        description="A WT Car Oficina Mecânica é referência em manutenção automotiva, unindo qualidade, transparência e agilidade no atendimento."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="text-3xl md:text-4xl font-black text-primary mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="ctaOutline" size="lg" asChild>
          <a href="#contato">Fale com nossa equipe</a>
        </Button>
      </div>
    </div>
  </section>
);

export default AboutSection;
