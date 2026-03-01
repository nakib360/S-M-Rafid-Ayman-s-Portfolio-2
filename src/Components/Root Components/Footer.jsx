import { useEffect, useMemo, useState } from "react";
import { LuFacebook, LuMail, LuPhone } from "react-icons/lu";
import { motion } from "motion/react";
import { cardPop, fadeInUp, viewportOnce } from "../../lib/animations";
import nakibLogo from "../../assets/Nakib Logo.svg";

const toAbsoluteUrl = (value = "") => {
  const trimmed = value.trim();
  if (!trimmed) return "#";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

const toGmailComposeUrl = (value = "") => {
  const trimmed = value.trim();
  if (!trimmed) return "#";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const normalizedEmail = trimmed.replace(/^mailto:/i, "");
  if (!normalizedEmail.includes("@")) return "#";

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(normalizedEmail)}`;
};

const toWhatsappUrl = (value = "") => {
  const trimmed = value.trim();
  if (!trimmed) return "#";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const digits = trimmed.replace(/[^\d]/g, "");
  if (!digits) return "#";

  return `https://wa.me/${digits}`;
};

const Footer = () => {
  const apiBase = import.meta.env.VITE_API;
  const [links, setLinks] = useState({
    email: "",
    facebook: "",
    whatsapp: "",
  });

  useEffect(() => {
    if (!apiBase) return;

    fetch(`${apiBase}/links`)
      .then(async (res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (!data || typeof data !== "object") return;

        setLinks({
          email: data?.email || "",
          facebook: data?.facebook || "",
          whatsapp: data?.whatsapp || "",
        });
      })
      .catch(() => {
        setLinks({
          email: "",
          facebook: "",
          whatsapp: "",
        });
      });
  }, [apiBase]);

  const emailHref = useMemo(() => toGmailComposeUrl(links.email), [links.email]);
  const facebookHref = useMemo(() => toAbsoluteUrl(links.facebook), [links.facebook]);
  const whatsappHref = useMemo(() => toWhatsappUrl(links.whatsapp), [links.whatsapp]);

  return (
    <motion.footer
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      variants={{
        initial: {},
        whileInView: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="border-t border-white/5 py-12 text-center bg-[#0B0F1A]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.span variants={fadeInUp} className="text-xl font-bold tracking-tighter text-white">
          S M Rafid Ayman
        </motion.span>

        <motion.div variants={fadeInUp} className="flex items-center gap-6 text-sm font-medium text-[#9CA3AF]">
          <motion.a
            href={emailHref}
            target="_blank"
            rel="noreferrer"
            whileHover={cardPop.whileHover}
            whileTap={cardPop.whileTap}
            transition={cardPop.transition}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <LuMail size={18} strokeWidth={1.5} /> Email
          </motion.a>
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            whileHover={cardPop.whileHover}
            whileTap={cardPop.whileTap}
            transition={cardPop.transition}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <LuPhone size={18} strokeWidth={1.5} /> WhatsApp
          </motion.a>
          <motion.a
            href={facebookHref}
            target="_blank"
            rel="noreferrer"
            whileHover={cardPop.whileHover}
            whileTap={cardPop.whileTap}
            transition={cardPop.transition}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <LuFacebook size={18} strokeWidth={1.5} /> Facebook
          </motion.a>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-xs text-[#9CA3AF]">
          © 2024 S M Rafid Ayman. All rights reserved.
        </motion.p>
      </div>
      <motion.div
        variants={fadeInUp}
        className="mt-8 flex justify-center"
      >
        <a
          href="https://nakib-360.web.app/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
          aria-label="Visit Nakib website"
        >
          <span className="text-[11px] tracking-[0.08em] uppercase text-[#9CA3AF]">
            Build with
          </span>
          <img src={nakibLogo} alt="Nakib logo" className="h-7 w-auto" />
        </a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
