import { useRef } from 'react';
import { useInView } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";

interface Stat {
  number: number;
  suffix: string;
  label: string;
  display?: string;
}

export default function StatsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const statLabels = translations.stats.labels.map(label => t(label));
  const stats: Stat[] = [
    { number: 70, suffix: '%', label: statLabels[0] },
    { number: 200, suffix: '+', label: statLabels[1] },
    { number: 0, suffix: '', label: statLabels[2], display: '24/7' },
    { number: 80, suffix: '%', label: statLabels[3] },
  ];

  return (
    <section ref={ref} className="border-t border-b border-border py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="sr-only">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-8 ${
                index < stats.length - 1 ? 'md:border-r border-border' : ''
              } ${index % 2 === 0 ? 'border-r border-border md:border-r' : 'md:border-r'} ${index === stats.length - 1 ? '!border-r-0' : ''}`}
            >
              <div className="flex items-baseline justify-center h-12">
                {stat.display ? (
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    {stat.display}
                  </span>
                ) : isInView ? (
                  <AnimatedNumber from={0} to={stat.number} suffix={stat.suffix} />
                ) : (
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    0{stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
