import { motion } from "framer-motion";

const cases = [
  {
    label: "Web3 Community",
    title: "10K member NFT server with token-gated channels",
    metrics: [
      { value: "10K+", label: "Members" },
      { value: "98%", label: "Uptime" },
      { value: "24", label: "Auto-flows" },
    ],
    tags: ["Server Build", "Custom Bot", "Token Gating"],
  },
  {
    label: "Gaming Community",
    title: "Tournament infrastructure with automated brackets",
    metrics: [
      { value: "5K+", label: "Players" },
      { value: "200+", label: "Events" },
      { value: "12", label: "Integrations" },
    ],
    tags: ["Bot Dev", "Automation", "Analytics"],
  },
  {
    label: "Corporate Team",
    title: "Internal comms server for a 500-person company",
    metrics: [
      { value: "500", label: "Employees" },
      { value: "40+", label: "Channels" },
      { value: "99.9%", label: "Uptime" },
    ],
    tags: ["Server Build", "Security", "Onboarding"],
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <p className="mb-2 font-mono-tech text-xs uppercase tracking-widest text-brand">Case Studies</p>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Proven results</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.2, 0, 0, 1] }}
              className="glass-card flex flex-col rounded-card p-6 transition-all duration-200 ease-out-expo"
            >
              <p className="mb-3 font-mono-tech text-[10px] uppercase tracking-widest text-brand">{c.label}</p>
              <h3 className="mb-6 text-lg font-semibold text-foreground">{c.title}</h3>

              <div className="mb-6 grid grid-cols-3 gap-4">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-semibold text-foreground">{m.value}</p>
                    <p className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-secondary px-2 py-0.5 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
