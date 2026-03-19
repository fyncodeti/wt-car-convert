interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
}

const SectionHeader = ({ tag, title, description }: SectionHeaderProps) => (
  <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
    {tag && (
      <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeader;
