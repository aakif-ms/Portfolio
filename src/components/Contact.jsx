import { useState } from "react";
import { motion } from "framer-motion";

import { CONTACT } from "../constants";
import { FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const emailAddress = CONTACT.email;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Message could not be sent right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-neutral-900 via-neutral-900 to-cyan-950/40 p-8 shadow-[0_0_60px_-20px_rgba(34,211,238,0.45)]"
      >
        <div className="mb-6 flex items-center justify-center gap-3 text-cyan-300">
          <span className="rounded-full border border-cyan-400/60 bg-cyan-400/10 p-3 text-xl">
            <FaPaperPlane />
          </span>
          <p className="text-lg font-medium">Open to collaborations and exciting opportunities</p>
        </div>

        <p className="mb-8 text-center text-neutral-400">
          Have a project idea or role in mind? Reach out and let&apos;s build something impactful.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-lg border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-neutral-200 outline-none transition focus:border-cyan-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="rounded-lg border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-neutral-200 outline-none transition focus:border-cyan-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-neutral-200 outline-none transition focus:border-cyan-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900/70 px-4 py-3 text-neutral-200 outline-none transition focus:border-cyan-400"
          />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-neutral-900 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {submitStatus.message ? (
            <p
              className={`text-sm ${
                submitStatus.type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {submitStatus.message}
            </p>
          ) : null}
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">{emailAddress}</p>
      </motion.div>
    </div>
  );
} 
