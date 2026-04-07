export function AboutSection() {
  return (
    <section id="par-mums" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-3">
            Par mums
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-[family-name:var(--font-heading)] italic">
            Cilvēki aiz pasākumiem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Divi draugi ar kopīgu mērķi — radīt klases pasākumus, kurus jaunieši
            atceras.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              initials: "TA",
              name: "Toms Asejevs",
              bio: "Teksts drīzumā. Toms ir atbildīgs par pasākumu organizāciju un dalībnieku pieredzi.",
            },
            {
              initials: "EU",
              name: "Elvis Untulis",
              bio: "Teksts drīzumā. Elvis vada programmu izstrādi un nodrošina katras dienas plūsmu.",
            },
          ].map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center text-2xl font-bold text-accent font-[family-name:var(--font-heading)] italic">
                {founder.initials}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {founder.name}
                </h3>
                <p className="text-sm text-accent mt-1">Līdzdibinātājs</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10 text-center">
          <p className="text-xl md:text-2xl font-[family-name:var(--font-heading)] italic text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            "Katrs pasākums ir rūpīgi plānots, lai klase atgrieztos ar jaunām
            atmiņām un stiprāku kopību."
          </p>
        </div>
      </div>
    </section>
  )
}
