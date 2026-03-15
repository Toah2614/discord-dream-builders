import { motion } from "framer-motion";
import { Server, Bot, Zap, Shield, Settings, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Full Server Architecture",
    description: "Complete Discord server builds with structured channels, roles, permissions, and onboarding flows designed for scale.",
    tags: ["Permissions", "Channels", "Roles", "Onboarding"],
  },
  {
    icon: Bot,
    title: "Custom Bot Development",
    description: "Purpose-built bots tailored to your community's needs. Moderation, engagement, analytics, and utility — all in one.",
    tags: ["Node.js", "Discord.js", "PostgreSQL"],
  },
  {
    icon: Zap,
    title: "Automation & Integrations",
    description: "Automated workflows that connect your Discord to external services. Webhooks, APIs, and event-driven pipelines.",
    tags: ["Webhooks", "REST APIs", "Automation"],
  },
  {
    icon: Shield,
    title: "Security & Moderation",
    description: "Anti-raid systems, verification gates, auto-moderation rules, and logging infrastructure to keep your community safe.",
    tags: ["AutoMod", "Verification", "Logging"],
  },
  {
    icon: Settings,
    title: "Server Optimization",
    description: "Audit and restructure existing servers for better engagement, clearer navigation, and improved member retention.",
    tags: ["Audit", "Restructure", "Optimization"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Custom dashboards and bots that track engagement, growth metrics, and member activity patterns in real-time.",
    tags: ["Metrics", "Dashboards", "Real-time"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.2, 0, 0, 1] },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="mb-16"
        >
          <p className="mb-2 font-mono-tech text-xs uppercase tracking-widest text-brand">Services</p>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Everything your community needs
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-card group rounded-card p-6 transition-all duration-200 ease-out-expo"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-inner bg-brand/10">
                <service.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-tech rounded-sm bg-secondary px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
