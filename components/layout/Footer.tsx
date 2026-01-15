import Link from 'next/link';
import { GraduationCap, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <GraduationCap className="w-8 h-8 text-amber-500" />
              <span>Claude for India</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Transforming learners into creators. Claude as the guru to enhance learning and the
              collaborator that gives wings to turn ideas into reality.
            </p>
            <p className="text-sm text-slate-400">
              &ldquo;A Guru to Learn&rdquo; | &ldquo;Wings to Create&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/opportunity" className="text-slate-300 hover:text-white transition-colors">
                  The Opportunity
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-slate-300 hover:text-white transition-colors">
                  The Vision
                </Link>
              </li>
              <li>
                <Link href="/pillars" className="text-slate-300 hover:text-white transition-colors">
                  Three Pillars
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Three Pillars */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Three Pillars</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pillars/engineering" className="text-slate-300 hover:text-white transition-colors">
                  Engineering Colleges
                </Link>
              </li>
              <li>
                <Link href="/pillars/schools" className="text-slate-300 hover:text-white transition-colors">
                  Premium Schools
                </Link>
              </li>
              <li>
                <Link href="/pillars/government" className="text-slate-300 hover:text-white transition-colors">
                  Government Schools
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm text-slate-400">
              &copy; 2025 Claude for India Campaign. A proposal by Umesh.
            </p>
            <p className="text-sm text-slate-400 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> for Indian students
            </p>
          </div>

          {/* Built with Claude Badge */}
          <div className="flex justify-center">
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-sm text-amber-300 hover:text-amber-200 hover:border-amber-400/50 transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              <span>Built with Claude</span>
              <span className="text-amber-400/60">|</span>
              <span className="text-slate-400 text-xs">This entire website was created using Claude</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
