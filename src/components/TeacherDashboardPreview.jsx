export default function TeacherDashboardPreview({ t }) {
  const data = [
    { name: 'Asha', completion: 92 },
    { name: 'Ravi', completion: 80 },
    { name: 'Imran', completion: 67 },
    { name: 'Kiran', completion: 51 },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{t.teacherTitle}</h2>
          <p className="text-sm text-slate-300 mt-1">{t.teacherSubtitle}</p>
        </div>
        <div className="text-xs text-slate-300">Demo data · Real-time when connected</div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-sm font-semibold mb-3">{t.students}</h3>
          <ul className="space-y-2">
            {data.map((s) => (
              <li key={s.name} className="flex items-center justify-between text-sm">
                <span className="text-slate-200">{s.name}</span>
                <span className="text-emerald-300 font-semibold">{s.completion}% {t.completion}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-sm font-semibold mb-3">Engagement Overview</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border border-white/10 bg-slate-900/60 p-3">
              <div className="text-2xl font-bold text-emerald-300">3m</div>
              <div className="text-xs text-slate-300">Avg. time/lesson</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 p-3">
              <div className="text-2xl font-bold text-cyan-300">85%</div>
              <div className="text-xs text-slate-300">Completion target</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 p-3">
              <div className="text-2xl font-bold text-amber-300">4.7</div>
              <div className="text-xs text-slate-300">Satisfaction</div>
            </div>
          </div>
          <div className="mt-4 h-2 rounded bg-white/5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-300" style={{ width: '78%' }} />
          </div>
          <p className="mt-2 text-xs text-slate-300">Projected engagement growth in next 3 months.</p>
        </div>
      </div>
    </section>
  );
}
