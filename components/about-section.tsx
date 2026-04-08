export function AboutSection() {
  return (
    <section id="par-mums" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
            Par mums
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-[family-name:var(--font-heading)] italic">
            Mūsu pieeja
          </h2>
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-heading)] italic text-foreground max-w-2xl mx-auto leading-relaxed">
            "Katrs pasākums ir rūpīgi plānots, lai klase atgrieztos ar jaunām
            atmiņām un stiprāku kopību."
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="border-t border-border pt-8 pb-2">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-base">
                  Audzināt jaunus līderus
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  Mūsu pasākumi rada situācijas, kurās jaunieši mācās uzņemties
                  atbildību, pieņemt lēmumus un vadīt citus.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 pb-2">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-base">
                  Sadarboties un risināt problēmas
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  Katrs uzdevums ir veidots tā, lai klase strādātu kopā — nevis
                  individuāli. Tā veidojas īsta komanda.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 pb-2">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-base">
                  Pavadīt laiku jēgpilni
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  Mēs ticam, ka brīvais laiks var būt gan jautrs, gan vērtīgs.
                  Katrs pasākums atstāj kaut ko, ko atcerēties.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-4" />
          <div className="text-center mt-8">
            <a
              href="#programmas"
              className="text-sm font-medium text-accent hover:underline underline-offset-4 transition-colors"
            >
              Skatīt programmas →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
