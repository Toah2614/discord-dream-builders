import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.06 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            <span className="text-xs font-medium text-muted-foreground">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1], delay: 0.06 }}
            className="mb-6 text-5xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-7xl"
          >
            Architecting high‑performance{" "}
            <span className="text-brand">communities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1], delay: 0.12 }}
            className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground"
          >
            We build the infrastructure, automation, and custom tooling that turns a chat room into a business asset.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1], delay: 0.18 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-inner bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 ease-out-expo hover:brightness-110"
            >
              Start a Project
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-inner border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 ease-out-expo hover:bg-accent"
            >
              View Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
