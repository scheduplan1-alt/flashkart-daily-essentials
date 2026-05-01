import { Zap, Clock, BadgePercent } from "lucide-react";
import heroImg from "@/assets/hero-delivery.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-ink-foreground">
      <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-[260px] w-[260px] rounded-full bg-warm/20 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:py-20">
        <div className="animate-slide-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 fill-warm text-warm" />
            India's fastest grocery app
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl lg:text-7xl">
            Groceries.{" "}
            <span className="bg-sunset-gradient bg-clip-text text-transparent">In a flash.</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-ink-foreground/75 md:text-lg">
            Fresh produce, daily essentials & late-night cravings — delivered to your door in
            under 10 minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Stat icon={<Clock className="h-4 w-4" />} label="10 min" sub="avg delivery" />
            <Stat icon={<BadgePercent className="h-4 w-4" />} label="Up to 40%" sub="off everyday" />
            <Stat icon={<Zap className="h-4 w-4 fill-current" />} label="7,500+" sub="products" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-mint-gradient/20 blur-2xl" />
          <img
            src={heroImg}
            alt="Flashkart 10-minute delivery scooter with groceries"
            width={1280}
            height={1024}
            className="animate-float-slow w-full rounded-[2rem] object-cover shadow-float"
          />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint-gradient text-white shadow-mint">
      {icon}
    </span>
    <div className="leading-tight">
      <div className="font-display text-base font-bold">{label}</div>
      <div className="text-[11px] text-ink-foreground/60">{sub}</div>
    </div>
  </div>
);
