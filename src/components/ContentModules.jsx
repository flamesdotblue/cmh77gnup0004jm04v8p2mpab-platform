import { Layers, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContentModules({ t, completed, onComplete }) {
  const modules = [
    { key: 'physics', title: t.physics, diff: 'Adaptive', color: 'from-cyan-400 to-emerald-300', description: 'Forces, motion, energy with 3D simulations.' },
    { key: 'chemistry', title: t.chemistry, diff: 'Adaptive', color: 'from-fuchsia-400 to-pink-300', description: 'Safe virtual labs and interactive experiments.' },
    { key: 'math', title: t.math, diff: 'Adaptive', color: 'from-amber-300 to-yellow-200', description: 'Step-by-step problem solving and hints.' },
  ];

  return (
    <section id="modules" aria-label={t.modulesTitle}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold flex items-center gap-2"><Layers className="w-5 h-5" /> {t.modulesTitle}</h2>
        <div className="text-xs text-slate-300">Offline packs support background sync</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modules.map((m, idx) => (
          <motion.div
            key={m.key}
            className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden backdrop-blur"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <div className={`h-2 bg-gradient-to-r ${m.color}`} />
            <div className="p-5">
              <h3 className="text-base font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{m.description}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 border border-white/10">{m.diff}</span>
                {completed[m.key] && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 border border-emerald-400/30 text-emerald-200">Completed</span>
                )}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => onComplete(m.key)}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  aria-label={`${t.continue} ${m.title}`}
                >
                  {t.continue}
                </button>
                <button
                  onClick={() => alert('Queued for offline download. This will use background sync when online.')}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  aria-label={`${t.downloadPack} ${m.title}`}
                >
                  <Download className="w-4 h-4" /> {t.downloadPack}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
