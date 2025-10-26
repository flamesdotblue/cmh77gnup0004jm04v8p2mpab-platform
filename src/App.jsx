import { useEffect, useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import GamificationPanel from './components/GamificationPanel';
import ContentModules from './components/ContentModules';
import TeacherDashboardPreview from './components/TeacherDashboardPreview';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ta', label: 'தமிழ்' },
];

const STRINGS = {
  en: {
    title: 'Rural STEM Learning Platform',
    subtitle: 'Learn by doing: interactive, offline-first, and gamified STEM for grades 6-12',
    startLearning: 'Start Learning',
    exploreModules: 'Explore Modules',
    points: 'Points',
    badges: 'Badges',
    leaderboard: 'Leaderboard',
    syncing: 'Syncing',
    offline: 'Offline mode',
    online: 'Online',
    modulesTitle: 'Interactive STEM Modules',
    physics: 'Physics Simulations',
    chemistry: 'Chemistry Experiments',
    math: 'Math Problem-Solving',
    downloadPack: 'Download pack',
    continue: 'Continue',
    teacherTitle: 'Teacher Dashboard Preview',
    teacherSubtitle: 'Track progress, assignments, and engagement analytics',
    students: 'Students',
    completion: 'Completion',
    language: 'Language',
  },
  hi: {
    title: 'ग्रामीण STEM शिक्षण मंच',
    subtitle: 'करके सीखें: इंटरएक्टिव, ऑफलाइन-फर्स्ट और गेमिफाइड STEM (कक्षा 6-12)',
    startLearning: 'सीखना शुरू करें',
    exploreModules: 'मॉड्यूल देखें',
    points: 'अंक',
    badges: 'बैज',
    leaderboard: 'लीडरबोर्ड',
    syncing: 'सिंक हो रहा है',
    offline: 'ऑफलाइन मोड',
    online: 'ऑनलाइन',
    modulesTitle: 'इंटरएक्टिव STEM मॉड्यूल',
    physics: 'भौतिकी सिमुलेशन',
    chemistry: 'रसायन विज्ञान प्रयोग',
    math: 'गणित समस्या-समाधान',
    downloadPack: 'पैक डाउनलोड करें',
    continue: 'जारी रखें',
    teacherTitle: 'शिक्षक डैशबोर्ड पूर्वावलोकन',
    teacherSubtitle: 'प्रगति, असाइनमेंट और एंगेजमेंट एनालिटिक्स ट्रैक करें',
    students: 'विद्यार्थी',
    completion: 'पूर्णता',
    language: 'भाषा',
  },
  bn: {
    title: 'গ্রামীণ STEM শিক্ষার প্ল্যাটফর্ম',
    subtitle: 'করে শিখুন: ইন্টারঅ্যাকটিভ, অফলাইন-প্রথম এবং গ্যামিফাইড STEM (শ্রেণি ৬-১২)',
    startLearning: 'শেখা শুরু করুন',
    exploreModules: 'মডিউল দেখুন',
    points: 'পয়েন্ট',
    badges: 'ব্যাজ',
    leaderboard: 'লিডারবোর্ড',
    syncing: 'সিঙ্ক হচ্ছে',
    offline: 'অফলাইন মোড',
    online: 'অনলাইন',
    modulesTitle: 'ইন্টারঅ্যাকটিভ STEM মডিউল',
    physics: 'পদার্থবিজ্ঞানের সিমুলেশন',
    chemistry: 'রসায়ন পরীক্ষণ',
    math: 'গণিত সমস্যা সমাধান',
    downloadPack: 'প্যাক ডাউনলোড',
    continue: 'চালিয়ে যান',
    teacherTitle: 'শিক্ষক ড্যাশবোর্ড প্রিভিউ',
    teacherSubtitle: 'অগ্রগতি, অ্যাসাইনমেন্ট এবং এনালিটিক্স ট্র্যাক করুন',
    students: 'শিক্ষার্থী',
    completion: 'সম্পন্ন',
    language: 'ভাষা',
  },
  ta: {
    title: 'ஊரக STEM கல்வி தளம்',
    subtitle: 'செய்து கற்போம்: தொடர்பாடல், ஆஃப்லைன்-முதன்மை, விளையாட்டு சார்ந்த STEM (தரம் 6-12)',
    startLearning: 'கற்பத தொடங்கு',
    exploreModules: 'தொகுதிகளை காண',
    points: 'மதிப்பெண்கள்',
    badges: 'பேட்ஜ்கள்',
    leaderboard: 'முன்னணி பட்டியல்',
    syncing: 'ஒத்திசைவு',
    offline: 'ஆஃப்லைன் முறை',
    online: 'ஆன்லைன்',
    modulesTitle: 'இணைய செயல் STEM தொகுதிகள்',
    physics: 'இயற்பியல் சிமுலேஷன்கள்',
    chemistry: 'வேதியியல் பரிசோதனைகள்',
    math: 'கணிதப் பிரச்சினை தீர்வு',
    downloadPack: 'தொகுப்பு பதிவிறக்க',
    continue: 'தொடர',
    teacherTitle: 'ஆசிரியர் பலகை முன்னோட்டம்',
    teacherSubtitle: 'முன்னேற்றம், பணிகள், ஈடுபாட்டை கண்காணிக்க',
    students: 'மாணவர்கள்',
    completion: 'முடிவு',
    language: 'மொழி',
  },
};

export default function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const t = useMemo(() => STRINGS[lang] || STRINGS.en, [lang]);

  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('progress')) || { points: 0, badges: 0, completed: {} };
    } catch {
      return { points: 0, badges: 0, completed: {} };
    }
  });

  const [syncing, setSyncing] = useState(false);
  const online = typeof navigator !== 'undefined' ? navigator.onLine : true;

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(progress));
    if (online) {
      setSyncing(true);
      const id = setTimeout(() => setSyncing(false), 800);
      return () => clearTimeout(id);
    }
  }, [progress, online]);

  useEffect(() => {
    const onOnline = () => setSyncing(true);
    const onOffline = () => setSyncing(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  const handleModuleComplete = (key) => {
    setProgress((p) => {
      if (p.completed[key]) return p;
      const newPoints = p.points + 50;
      const newBadges = newPoints >= 200 && p.badges === 0 ? 1 : p.badges;
      return { ...p, points: newPoints, badges: newBadges, completed: { ...p.completed, [key]: true } };
    });
  };

  const handleAddPoints = (amount) => setProgress((p) => ({ ...p, points: p.points + amount }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-400/40" />
            <span className="font-semibold tracking-wide">STEMQuest</span>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="lang" className="sr-only">{t.language}</label>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-slate-800 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={t.language}
            >
              {LANGS.map((l) => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main>
        <HeroSection t={t} />
        <section className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <GamificationPanel t={t} progress={progress} syncing={syncing} online={online} onAddPoints={handleAddPoints} />
          </div>
          <div className="xl:col-span-2">
            <ContentModules t={t} completed={progress.completed} onComplete={handleModuleComplete} />
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 mt-10 mb-16">
          <TeacherDashboardPreview t={t} />
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} STEMQuest · PWA · Offline-first · WCAG 2.1 AA
          </p>
          <p className="opacity-80">
            CDN optimized · Encrypted sync · Rural connectivity ready
          </p>
        </div>
      </footer>
    </div>
  );
}
