import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <p className="mb-2 text-center font-mono-tech text-xs uppercase tracking-widest text-brand">Contact</p>
            <h2 className="mb-4 text-center text-3xl font-semibold text-foreground md:text-4xl">
              Let's build your community
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Defined scope & technical architecture. No fluff.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-card p-8 text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Message sent</h3>
              <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              onSubmit={handleSubmit}
              className="glass-card space-y-4 rounded-card p-6"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-inner border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Discord Username</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-inner border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand"
                  placeholder="username#0000"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Project Details</label>
                <textarea
                  required
                  rows={4}
                  className="w-full resize-none rounded-inner border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand"
                  placeholder="Tell us about your community and what you need..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-inner bg-brand py-3 text-sm font-medium text-primary-foreground transition-all duration-200 ease-out-expo hover:brightness-110"
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
