import { MapPin, Clock, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTAFinalSection = () => (
  <section className="py-20 md:py-28 bg-surface-cta">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">Localização</h3>
          </div>
          <div className="flex-1 bg-secondary rounded-xl flex items-center justify-center min-h-[180px] mb-4">
            <span className="text-muted-foreground text-sm">Mapa – em breve</span>
          </div>
          <p className="text-sm text-muted-foreground">Rua Exemplo, 123 – Centro, Cidade/UF</p>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">Horários</h3>
          </div>
          <div className="space-y-4">
            {[
              { day: "Segunda a Sexta", time: "08:00 – 18:00" },
              { day: "Sábado", time: "08:00 – 12:00" },
              { day: "Domingo e feriados", time: "Fechado" },
            ].map((h) => (
              <div key={h.day} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                <span className="text-sm text-muted-foreground">{h.day}</span>
                <span className="text-sm font-medium text-foreground">{h.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Fale com a <span className="text-primary">oficina</span> agora
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Entre em contato e traga seu carro para quem entende do assunto. Atendimento rápido e profissional.
            </p>
          </div>
          <div className="space-y-3">
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="ctaOutline" size="lg" className="w-full" asChild>
              <a href="tel:+5500000000000">
                <Phone className="w-5 h-5" />
                Ligar agora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTAFinalSection;
