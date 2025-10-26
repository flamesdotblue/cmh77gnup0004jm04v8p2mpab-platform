import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection({ t }) {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950/90" />
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
            {t.title}
          </h1>
          <p className="mt-4 text-slate-200/90 text-base sm:text-lg">
            {t.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#modules"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              aria-label={t.startLearning}
            >
              {t.startLearning}
            </a>
            <a
              href="#modules"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              aria-label={t.exploreModules}
            >
              {t.exploreModules}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
