import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-surface-footer border-t border-border py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-black text-sm">WT</span>
              </div>
              <span className="font-bold text-foreground">WT Car</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Oficina mecânica profissional com atendimento rápido, transparente e confiável.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              {["Início", "Serviços", "Sobre nós", "Contato"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l === "Início" ? "inicio" : l === "Serviços" ? "servicos" : l === "Sobre nós" ? "sobre" : "contato"}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" /> (00) 0000-0000
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" /> (00) 00000-0000
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Rua Exemplo, 123 – Centro, Cidade/UF
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Horário</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Seg a Sex: 08h – 18h</li>
              <li>Sábado: 08h – 12h</li>
              <li>Dom e feriados: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WT Car Oficina Mecânica. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
