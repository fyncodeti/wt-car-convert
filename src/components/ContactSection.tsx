import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Phone, label: "Telefone", value: "(00) 0000-0000", href: "tel:+5500000000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "(00) 00000-0000", href: "https://wa.me/5500000000000" },
  { icon: MapPin, label: "Endereço", value: "Rua Exemplo, 123 – Centro, Cidade/UF", href: "#" },
  { icon: Clock, label: "Horário", value: "Seg a Sex: 8h–18h | Sáb: 8h–12h", href: "#" },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-surface-contact">
      <div className="container">
        <SectionHeader
          tag="Contato"
          title="Fale com nossa equipe"
          description="Solicite seu atendimento de forma rápida e simples."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium text-foreground">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-card border border-primary/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Solicitação enviada!</h3>
                <p className="text-muted-foreground">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                <h3 className="text-lg font-bold text-foreground mb-2">Envie sua solicitação</h3>
                <input type="text" placeholder="Seu nome" required className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="tel" placeholder="Seu telefone" required className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="text" placeholder="Veículo (ex: Gol 2020)" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <select defaultValue="" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="" disabled>Serviço desejado</option>
                  <option>Revisão preventiva</option>
                  <option>Troca de óleo</option>
                  <option>Freios e suspensão</option>
                  <option>Motor e diagnóstico</option>
                  <option>Injeção eletrônica</option>
                  <option>Outro</option>
                </select>
                <textarea placeholder="Mensagem (opcional)" rows={3} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                <Button variant="cta" size="lg" className="w-full" type="submit">
                  Enviar solicitação
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
