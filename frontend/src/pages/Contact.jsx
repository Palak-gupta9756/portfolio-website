import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { submitContact } from "../services/api";
import {
  FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedinIn,
} from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const { data } = await submitContact(form);
      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.message || "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "guptapalakpg9756@gmail.com", href: "mailto:guptapalakpg9756@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+91-9027747449", href: "tel:+919027747449" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Bareilly, Uttar Pradesh", href: null },
  ];

  const socials = [
    { icon: FaGithub, href: "https://github.com/Palak-gupta9756", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/palak-gupta-12063a2a3/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:guptapalakpg9756@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-dark-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's connect!"
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s talk!
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent-cyan/10">
                    <item.icon className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-accent-cyan transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                Follow Me
              </p>
              <div className="flex gap-2">
                {socials.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-gray-200 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-accent-cyan/20 hover:text-accent-cyan transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-400 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan transition-all text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan transition-all text-sm"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-dark-400 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan transition-all text-sm resize-none"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mb-4 p-3 rounded-xl text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium rounded-xl shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
