import { Users, Calendar, Heart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Komandas darbs",
    description: "Mūsu pasākumi veicina sadarbību un palīdz jauniešiem veidot jaunas draudzības.",
  },
  {
    icon: Calendar,
    title: "Regulāri pasākumi",
    description: "Organizējam aktivitātes visa gada garumā - gan vasarā, gan ziemā.",
  },
  {
    icon: Heart,
    title: "Pozitīva vide",
    description: "Radām drošu un atbalstošu vidi, kur katrs jaunietis var būt pats.",
  },
]

export function AboutSection() {
  return (
    <section id="par-mums" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Par mums
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Mēs organizējam neaizmirstamus pasākumus un aktivitātes jauniešiem. 
            Mūsu mērķis ir radīt iespējas jauniešiem augt, mācīties un piedzīvot 
            jaunas lietas drošā un atbalstošā vidē. Katrs pasākums ir rūpīgi 
            plānots, lai sniegtu gan izklaidējošas, gan izglītojošas pieredzes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-lg bg-card border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
