"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { searchWord } from "@/features/dictionary/adapters/elixApi";
import { Meaning } from "@/features/dictionary/types";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Meaning[]>([]);
  const [loading, setLoading] = useState(false);

  // Update URL when query changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        router.replace(`?q=${encodeURIComponent(query)}`, { scroll: false });
      } else {
        router.replace("/", { scroll: false });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, router]);

  // Fetch results when query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await searchWord(query);
        setResults(response.data);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-fuchsia-900 to-amber-900 animate-gradient" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.75s" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 py-12">
        {/* Top section: Title, subtitle, button */}
        <header className="flex flex-col items-center text-center gap-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight animate-float">
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-amber-200 bg-clip-text text-transparent">
              RELIX
            </span>
            <span className="ml-3">🐇</span>
          </h1>
          
          <p className="text-lg md:text-xl text-fuchsia-100/80 font-medium tracking-widest uppercase">
            Le dico Elix en plus rapide
          </p>
          
          <button className="mt-4 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-white/40">
            Vocabulaire vu en cours
          </button>
        </header>

        {/* Results section */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-full max-w-3xl">
            {loading && (
              <div className="flex justify-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
            
            {!loading && results.length > 0 && (
              <div className="grid gap-4">
                {results.map((meaning, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Definition */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {meaning.definition.word}
                          {meaning.definition.typology && (
                            <span className="ml-2 text-sm font-normal text-fuchsia-200/80">
                              {meaning.definition.typology}
                            </span>
                          )}
                        </h3>
                        <p className="text-white/80">{meaning.definition.meaning}</p>
                      </div>

                      {/* Sign video */}
                      {meaning.signs.length > 0 && meaning.signs[0].path && (
                        <div className="flex-shrink-0">
                          <video
                            src={meaning.signs[0].path}
                            className="w-40 h-40 object-cover rounded-xl bg-black/30"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loading && query.trim() && results.length === 0 && (
              <p className="text-center text-white/60">Aucun résultat pour "{query}"</p>
            )}
          </div>
        </div>

        {/* Bottom section: Search input */}
        <footer className="flex justify-center pb-8">
          <div className="w-full max-w-xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Chercher un mot"
              className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/50 outline-none focus:border-fuchsia-400/60 focus:bg-white/15 transition-all duration-300 focus:ring-2 focus:ring-fuchsia-400/20"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
