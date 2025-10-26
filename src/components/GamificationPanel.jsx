import { Trophy, Star, Users, Cloud, WifiOff } from 'lucide-react';

export default function GamificationPanel({ t, progress, syncing, online, onAddPoints }) {
  const leaderboardSample = [
    { name: 'Asha', points: 420 },
    { name: 'Ravi', points: 360 },
    { name: 'Imran', points: 290 },
  ];

  return (
    <aside className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-300" /> {t.points}: <span className="text-emerald-300">{progress.points}</span>
        </h2>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          {online ? (
            <><Cloud className="w-4 h-4 text-emerald-300" /> {t.online}{syncing ? ` · ${t.syncing}` : ''}</>
          ) : (
            <><WifiOff className="w-4 h-4 text-rose-300" /> {t.offline}</>
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-slate-300">{t.badges}</div>
          <div className="mt-1 text-2xl font-bold flex items-center gap-2"><Star className="w-5 h-5 text-yellow-300" /> {progress.badges}</div>
        </div>
        <button
          onClick={() => onAddPoints(10)}
          className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 hover:bg-emerald-500/20 p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-emerald-300"
          aria-label="Add points by completing a quick challenge"
        >
          <div className="text-sm text-emerald-200">+10 XP</div>
          <div className="mt-1 text-slate-100">Quick Challenge</div>
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm uppercase tracking-wide text-slate-300 flex items-center gap-2"><Users className="w-4 h-4" /> {t.leaderboard}</h3>
        <ul className="mt-3 space-y-2">
          {leaderboardSample.map((u, i) => (
            <li key={u.name} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-slate-800 text-slate-200 text-xs">{i + 1}</span>
                <span>{u.name}</span>
              </div>
              <span className="text-emerald-300 font-semibold">{u.points}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
