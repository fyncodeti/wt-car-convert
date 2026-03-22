import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ShieldCheck, Wrench, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: Clock, label: "Atendimento rápido" },
  { icon: Wrench, label: "Serviço profissional" },
  { icon: ShieldCheck, label: "Orçamento facilitado" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-surface-hero overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Oficina mecânica profissional" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              Oficina Mecânica Profissional | em Londrina, PR
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
              Seu carro em{" "}
              <span className="text-primary">boas mãos</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Cuidado, revisão e manutenção com atendimento rápido e confiança de verdade. Serviço profissional, diagnóstico preciso e contato fácil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a href="tel:+5500000000000">
                  <Phone className="w-5 h-5" />
                  Ligar agora
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {badges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <b.icon className="w-4 h-4 text-primary" />
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact mini card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-foreground mb-6">Solicite seu orçamento</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Veículo (ex: Gol 2020)"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled>Serviço desejado</option>
                  <option>Revisão preventiva</option>
                  <option>Troca de óleo</option>
                  <option>Freios e suspensão</option>
                  <option>Motor e diagnóstico</option>
                  <option>Outro</option>
                </select>
                <Button variant="cta" className="w-full" size="lg">
                  Solicitar orçamento
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
