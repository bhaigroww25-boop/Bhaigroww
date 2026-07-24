import { useRef } from "react";
import logoImg from "@assets/WhatsApp_Image_2026-07-25_at_2.08.17_AM_1784927022564.jpeg";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Target,
  BarChart3,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Shield,
  Handshake,
  TrendingUp,
  DollarSign,
  Phone,
  Instagram,
  Facebook,
  Megaphone,
  FileText,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "918171706705";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function WhatsAppButton({
  size = "md",
  className = "",
  label = "Chat on WhatsApp",
  "data-testid": testId = "btn-whatsapp",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  "data-testid"?: string;
}) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-3.5 text-base gap-2.5",
    lg: "px-10 py-5 text-xl gap-3",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 whatsapp-pulse ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: "#25D366", color: "#fff" }}
    >
      <WhatsAppIcon size={size === "lg" ? 26 : size === "md" ? 22 : 18} />
      <span>{label}</span>
    </a>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ──────────────────────────────────────────────
// HERO
// ──────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="hero-bg relative min-h-[100dvh] flex flex-col overflow-hidden"
      data-testid="section-hero"
    >
      {/* Decorative circles */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(27 90% 52%), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[360px] h-[360px] rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, hsl(38 95% 54%), transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="bg-white rounded-lg px-3 py-1.5">
          <img
            src={logoImg}
            alt="Bhaigroww"
            className="h-9 w-auto object-contain"
          />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-whatsapp"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 hover:bg-white/10"
          style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}
        >
          <WhatsAppIcon size={16} />
          Free Consultation
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 py-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(240,120,24,0.15)",
            border: "1px solid rgba(240,120,24,0.3)",
            color: "hsl(38 95% 65%)",
          }}
        >
          <Zap size={14} />
          Meta Ads &amp; Social Media for Local Businesses
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 bg-white rounded-2xl px-8 py-4"
        >
          <img
            src={logoImg}
            alt="Bhaigroww"
            className="h-28 md:h-40 w-auto object-contain"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl font-medium max-w-2xl mb-4 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          We run Facebook &amp; Instagram ads that bring real customers to your door.
          No guesswork, no fluff — just results.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-sm mb-10"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Trusted by local shops, restaurants &amp; service businesses
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <WhatsAppButton size="lg" label="Chat on WhatsApp — It's Free" data-testid="hero-whatsapp-cta" />
          <a
            href="#services"
            data-testid="hero-learn-more"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            See how it works <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6 mt-16 flex-wrap justify-center"
        >
          {[
            { icon: <Target size={16} />, text: "Facebook Ads" },
            { icon: <Instagram size={16} />, text: "Instagram Ads" },
            { icon: <BarChart3 size={16} />, text: "Monthly Reports" },
            { icon: <Users size={16} />, text: "Audience Growth" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="hsl(38, 30%, 96%)" />
        </svg>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// SERVICES
// ──────────────────────────────────────────────
function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 px-6 md:px-12"
      style={{ background: "hsl(38 30% 96%)" }}
      data-testid="section-services"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(27 90% 52%)" }}>
              What We Do
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: "hsl(20 25% 14%)" }}>
              Two ways we grow<br />your business
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "hsl(20 20% 40%)" }}>
              We keep it simple. No packages you don't need. No services you can't understand.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1: Meta Ads */}
          <FadeIn delay={0.1} direction="left">
            <div
              className="relative rounded-3xl p-8 md:p-10 overflow-hidden h-full"
              data-testid="card-meta-ads"
              style={{
                background: "linear-gradient(135deg, hsl(20 25% 12%) 0%, hsl(27 40% 18%) 100%)",
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute top-[-40px] right-[-40px] w-52 h-52 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, hsl(27 90% 52%), transparent)" }}
                aria-hidden="true"
              />
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ background: "rgba(240,120,24,0.15)", border: "1px solid rgba(240,120,24,0.25)" }}
              >
                <Megaphone size={26} style={{ color: "hsl(27 90% 60%)" }} />
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 text-white">
                Meta Ads Management
              </h3>
              <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.62)" }}>
                We set up, run, and optimize your Facebook &amp; Instagram ad campaigns so you get more customers without wasting money.
              </p>
              <ul className="space-y-3">
                {[
                  "Campaign setup & audience targeting",
                  "Ad creative guidance & copywriting",
                  "Ongoing optimization & testing",
                  "Monthly performance report",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "hsl(27 90% 60%)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: "rgba(240,120,24,0.18)", color: "hsl(38 95% 60%)" }}
              >
                <Facebook size={14} /> Facebook &amp; Instagram
              </div>
            </div>
          </FadeIn>

          {/* Service 2: Social Media */}
          <FadeIn delay={0.2} direction="right">
            <div
              className="relative rounded-3xl p-8 md:p-10 overflow-hidden h-full"
              data-testid="card-social-media"
              style={{
                background: "hsl(38 40% 98%)",
                border: "2px solid hsl(32 20% 88%)",
              }}
            >
              <div
                className="absolute top-[-40px] right-[-40px] w-52 h-52 rounded-full opacity-6"
                style={{ background: "radial-gradient(circle, hsl(38 95% 54%), transparent)" }}
                aria-hidden="true"
              />
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                style={{ background: "hsl(27 90% 52% / 0.1)", border: "1px solid hsl(27 90% 52% / 0.2)" }}
              >
                <Calendar size={26} style={{ color: "hsl(27 90% 52%)" }} />
              </div>
              <h3
                className="font-display font-bold text-2xl md:text-3xl mb-3"
                style={{ color: "hsl(20 25% 14%)" }}
              >
                Social Media Management
              </h3>
              <p className="text-base mb-6" style={{ color: "hsl(20 20% 42%)" }}>
                Consistent posts, a growing audience, and a social presence that builds trust — all handled for you.
              </p>
              <ul className="space-y-3">
                {[
                  "Monthly content calendar & planning",
                  "Regular posting on Facebook & Instagram",
                  "Caption writing in your brand voice",
                  "Audience engagement & growth tactics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "hsl(20 20% 42%)" }}>
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "hsl(27 90% 52%)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: "hsl(27 90% 52% / 0.1)", color: "hsl(27 90% 42%)" }}
              >
                <Instagram size={14} /> Consistent presence
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// HOW IT WORKS
// ──────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Phone size={28} />,
      title: "Free Consultation",
      desc: "We start with a no-obligation call to understand your business, your goals, and who your ideal customers are. No commitment needed.",
    },
    {
      number: "02",
      icon: <FileText size={28} />,
      title: "Custom Strategy & Setup",
      desc: "We build a tailored plan for your business — ad account setup, audience research, creative direction, and campaign launch. Ready in days, not weeks.",
    },
    {
      number: "03",
      icon: <TrendingUp size={28} />,
      title: "Ongoing Management & Reporting",
      desc: "We actively manage and optimize every month. You get a clear monthly report showing what's working, what changed, and what's coming next.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 px-6 md:px-12"
      style={{ background: "hsl(20 25% 12%)" }}
      data-testid="section-how-it-works"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(38 95% 54%)" }}>
              The Process
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
              Simple, honest,<br />and straightforward
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Getting started is easy. Here's exactly what happens when you reach out.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                className="relative rounded-2xl p-7 h-full"
                data-testid={`card-step-${i + 1}`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-display font-black text-5xl leading-none opacity-20"
                    style={{ color: "hsl(38 95% 54%)" }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ background: "rgba(240,120,24,0.15)", color: "hsl(27 90% 60%)" }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <WhatsAppButton label="Start with a free consultation" data-testid="how-it-works-whatsapp" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// WHY CHOOSE US
// ──────────────────────────────────────────────
function WhyUs() {
  const points = [
    {
      icon: <Handshake size={28} />,
      title: "Personalized service",
      desc: "You're not a ticket number. We learn your business and treat it like our own. No templates, no copy-paste campaigns.",
    },
    {
      icon: <Shield size={28} />,
      title: "Transparent pricing",
      desc: "You'll always know where your money goes. No surprise charges, no fine print. What we quote is what you pay.",
    },
    {
      icon: <Users size={28} />,
      title: "Hands-on management",
      desc: "You work directly with us — not an account manager, not an intern. The person you talk to is the person doing the work.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Results-focused",
      desc: "We track what actually matters: leads, calls, visits, and sales. Not just likes and impressions.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 px-6 md:px-12"
      style={{ background: "hsl(38 30% 96%)" }}
      data-testid="section-why-us"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(27 90% 52%)" }}>
                Why Bhaigroww
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: "hsl(20 25% 14%)" }}>
                Not a faceless agency.<br />A trusted partner.
              </h2>
              <p className="text-lg mb-8" style={{ color: "hsl(20 20% 40%)" }}>
                Most agencies put you in a queue. We give you direct access, honest communication, and work that's built around your business — not a generic playbook.
              </p>

              {/* Visual accent bar */}
              <div className="flex gap-3">
                <div className="h-1 w-16 rounded-full" style={{ background: "hsl(27 90% 52%)" }} />
                <div className="h-1 w-8 rounded-full" style={{ background: "hsl(38 95% 54%)" }} />
                <div className="h-1 w-4 rounded-full" style={{ background: "hsl(27 90% 52% / 0.3)" }} />
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div
                  className="rounded-2xl p-6 h-full"
                  data-testid={`card-why-${i + 1}`}
                  style={{
                    background: i % 2 === 0 ? "hsl(38 40% 98%)" : "hsl(20 25% 12%)",
                    border: i % 2 === 0 ? "2px solid hsl(32 20% 88%)" : "none",
                    color: i % 2 === 0 ? "hsl(20 25% 14%)" : "#fff",
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                    style={{
                      background: i % 2 === 0 ? "hsl(27 90% 52% / 0.1)" : "rgba(240,120,24,0.18)",
                      color: "hsl(27 90% 52%)",
                    }}
                  >
                    {pt.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{pt.title}</h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: i % 2 === 0 ? "hsl(20 20% 44%)" : "rgba(255,255,255,0.6)" }}
                  >
                    {pt.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// PRICING
// ──────────────────────────────────────────────
function Pricing() {
  const tiers = [
    {
      icon: <Zap size={22} />,
      label: "One-time",
      title: "Setup Fee",
      from: "Starting at a one-time fee",
      desc: "Covers everything to get you started: ad account setup, audience research, campaign creation, and strategy planning.",
      items: ["Ad account setup", "Audience research", "Campaign creation", "Strategy document"],
    },
    {
      icon: <BarChart3 size={22} />,
      label: "Monthly",
      title: "Management Fee",
      from: "Starting at a monthly retainer",
      desc: "Ongoing work every month — optimization, new creatives, reporting, and strategy calls. You stay in the loop, we handle the rest.",
      items: ["Campaign optimization", "Monthly report", "Strategy review call", "Ad spend management"],
      highlighted: true,
    },
    {
      icon: <DollarSign size={22} />,
      label: "Your budget",
      title: "Ad Spend",
      from: "Flexible — based on your goals",
      desc: "Your ad spend goes directly to Facebook/Instagram — not to us. We help you get the most out of whatever budget you're comfortable with.",
      items: ["Goes directly to Meta", "Flexible starting budget", "We optimize for every rupee", "Scale up as you grow"],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 px-6 md:px-12"
      style={{ background: "hsl(20 25% 12%)" }}
      data-testid="section-pricing"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(38 95% 54%)" }}>
              Pricing
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
              Fair pricing,<br />no hidden fees
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Every business is different. Contact us for a custom quote — we'll build something that makes sense for your budget.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="rounded-3xl p-7 h-full flex flex-col"
                data-testid={`card-pricing-${i + 1}`}
                style={
                  tier.highlighted
                    ? {
                        background: "linear-gradient(135deg, hsl(27 90% 52%) 0%, hsl(38 95% 54%) 100%)",
                        color: "#fff",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#fff",
                      }
                }
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{
                      background: tier.highlighted ? "rgba(255,255,255,0.2)" : "rgba(240,120,24,0.18)",
                      color: tier.highlighted ? "#fff" : "hsl(27 90% 60%)",
                    }}
                  >
                    {tier.icon}
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      background: tier.highlighted ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {tier.label}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl mb-1">{tier.title}</h3>
                <p
                  className="text-xs mb-4 font-medium"
                  style={{ color: tier.highlighted ? "rgba(255,255,255,0.75)" : "hsl(38 95% 54%)" }}
                >
                  {tier.from}
                </p>
                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: tier.highlighted ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0.55)" }}
                >
                  {tier.desc}
                </p>

                <ul className="space-y-2.5 mt-auto">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2
                        size={15}
                        style={{ color: tier.highlighted ? "rgba(255,255,255,0.85)" : "hsl(27 90% 52%)" }}
                        className="flex-shrink-0"
                      />
                      <span style={{ color: tier.highlighted ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.62)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div
            className="mt-10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="font-display font-bold text-lg text-white mb-1">Not sure what you need?</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                Message us and we'll recommend the right plan for your business — no pressure, no sales pitch.
              </p>
            </div>
            <WhatsAppButton label="Get a custom quote" data-testid="pricing-whatsapp" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// CONTACT / CTA SECTION
// ──────────────────────────────────────────────
function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "hsl(38 30% 96%)" }}
      data-testid="section-contact"
    >
      {/* Big decorative BG text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-[20vw] leading-none opacity-[0.04]"
          style={{ color: "hsl(27 90% 52%)" }}
        >
          GROW
        </span>
      </div>

      <div className="max-w-3xl mx-auto relative text-center">
        <FadeIn>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{
              background: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.25)",
              color: "#1a8a42",
            }}
          >
            <MessageCircle size={16} />
            Response within a few hours
          </div>

          <h2
            className="font-display font-black text-4xl md:text-6xl mb-6 leading-tight"
            style={{ color: "hsl(20 25% 14%)" }}
          >
            Ready to get more<br />
            <span style={{ color: "hsl(27 90% 52%)" }}>real customers?</span>
          </h2>

          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsl(20 20% 42%)" }}>
            Send us a message on WhatsApp for a free, no-pressure consultation. We'll listen, answer your questions, and tell you honestly what we can do for you.
          </p>

          <div className="flex flex-col items-center gap-4">
            <WhatsAppButton
              size="lg"
              label="Message us on WhatsApp"
              data-testid="contact-whatsapp-cta"
            />
            <p className="text-sm" style={{ color: "hsl(20 20% 52%)" }}>
              WhatsApp:{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "hsl(20 25% 24%)" }}
                data-testid="contact-whatsapp-number"
              >
                [INSERT WHATSAPP NUMBER]
              </a>
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10" style={{ borderTop: "1px solid hsl(32 20% 88%)" }}>
            {[
              { icon: <CheckCircle2 size={16} />, text: "Free consultation" },
              { icon: <Shield size={16} />, text: "No commitment required" },
              { icon: <Zap size={16} />, text: "Quick response" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(20 20% 44%)" }}>
                <span style={{ color: "hsl(27 90% 52%)" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-10 px-6 md:px-12"
      style={{
        background: "hsl(20 25% 10%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      data-testid="section-footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="bg-white rounded-lg px-3 py-1.5 inline-block mb-1">
            <img
              src={logoImg}
              alt="Bhaigroww"
              className="h-9 w-auto object-contain"
            />
          </div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Helping local businesses grow with Meta Ads &amp; social media.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-facebook"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(37,211,102,0.12)", color: "#25D366" }}
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 text-center text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}>
        &copy; {new Date().getFullYear()} Bhaigroww. All rights reserved.
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────
// FLOATING WHATSAPP BUTTON
// ──────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 floating-btn" data-testid="floating-whatsapp">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 whatsapp-pulse"
        style={{ backgroundColor: "#25D366", color: "#fff" }}
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
}

// ──────────────────────────────────────────────
// APP ROOT
// ──────────────────────────────────────────────
function App() {
  return (
    <div className="min-h-[100dvh]">
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Pricing />
      <ContactCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
