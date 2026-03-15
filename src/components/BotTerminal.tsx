import { motion } from "framer-motion";

const lines = [
  { prefix: "$", text: "!deploy server --template community", color: "text-foreground" },
  { prefix: "→", text: "Creating 24 channels across 6 categories...", color: "text-muted-foreground" },
  { prefix: "→", text: "Configuring 8 roles with granular permissions...", color: "text-muted-foreground" },
  { prefix: "→", text: "Setting up auto-moderation rules...", color: "text-muted-foreground" },
  { prefix: "→", text: "Deploying welcome bot with onboarding flow...", color: "text-muted-foreground" },
  { prefix: "✓", text: "Server deployed successfully. 142ms", color: "text-success" },
];

const BotTerminal = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="mx-auto max-w-2xl"
        >
          <p className="mb-2 text-center font-mono-tech text-xs uppercase tracking-widest text-brand">
            Custom Tooling
          </p>
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground md:text-4xl">
            Built with precision
          </h2>

          <div className="glass-card overflow-hidden rounded-card">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-2 font-mono-tech text-xs text-muted-foreground">studio-bot v2.4.1</span>
            </div>

            {/* Terminal body */}
            <div className="p-5">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
                  className="flex gap-3 py-1 font-mono-tech text-sm"
                >
                  <span className={line.prefix === "✓" ? "text-success" : "text-brand"}>{line.prefix}</span>
                  <span className={line.color}>{line.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BotTerminal;
