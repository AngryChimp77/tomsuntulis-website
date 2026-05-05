"use client"
import { useState } from "react"
import {
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/37129580288"

const seasons = {
  spring: {
    label: "Maijs – Jūnijs",
    intro: "Skolas klases ekskursijas viesu namā Josti, Tukuma novads.",
    programs: [
      {
        title: "1. Programma",
        sub: "1.–4. klasei",
        time: "10:00–16:00",
        price: "1000",
        featured: false,
        features: [
          "Pasākuma vadītāji",
          "Pusdienas (specifiskus ēdienus nenodrošinām)",
          "Apmaksāta vietas īre",
          "Daudz un dažādas klasi saliedējošas atrakcijas",
        ],
      },
      {
        title: "2. Programma",
        sub: "5.–12. klasei",
        time: "12:00–08:45",
        price: "1600",
        featured: true,
        features: [
          "Pasākuma vadītāji",
          "Pārgājiens / Sporta aktivitātes",
          "Vakara pasākums",
          "Pusdienas (specifiskus ēdienus nenodrošinām)",
          "Vakariņas (specifiskus ēdienus nenodrošinām)",
          "Brokastis",
          "Apmaksātu vietas īre",
          "Daudz un dažādas klasi saliedējošas atrakcijas",
          "Nakts trase",
          "Pirts / Kubls",
        ],
      },
      {
        title: "3. Programma",
        sub: "5.–12. klasei",
        time: "17:00–08:45",
        price: "1400",
        featured: false,
        features: [
          "Pasākuma vadītāji",
          "Vakara pasākums",
          "Vakariņas (specifiskus ēdienus nenodrošinām)",
          "Brokastis",
          "Apmaksātu vietas īre",
          "Daudz un dažādas klasi saliedējošas atrakcijas",
          "Nakts trase",
          "Pirts / Kubls",
        ],
      },
    ],
    location: {
      name: 'Viesu nams "Josti"',
      desc: "Tukuma novads · ~1h no Rīgas",
      detail:
        "Pasākumi notiek skaistā lauku vidē ar plašu teritoriju, mežiem, dīķiem un aktivitāšu zonām. Ideāla vieta komandas saliedēšanai.",
      href: "https://viesunamiem.lv/josti",
      mapsUrl: "https://maps.google.com/?q=Viesu+nams+Josti+Tukuma+novads+Latvija",
    },
  },
  summer: {
    label: "Jūlijs – Augusts",
    intro: "Katru nedēļu jūlijā un augustā · Bērniem 10–16 gadu vecumā",
    location: {
      name: "RTK regbija laukums",
      desc: "RK Miesnieki bāze · Rīga, pie Domina T/C",
      detail:
        "Nedēļas garā dienas ekskursija notiek RTK regbija laukumā — RK Miesnieki bāzes laukumā pie Domina T/C, Rīgā. Mūsdienīga regbija infrastruktūra ar profesionālu trenera komandu.",
      href: null as string | null,
      mapsUrl: "https://maps.google.com/?q=R%C4%ABgas+Tehnisk%C4%81+kole%C4%8D%C5%BEa+Braslas+iela+R%C4%ABga",
    },
  },
} as const

type SeasonKey = keyof typeof seasons

const summerSchedule = [
  { day: "Pirmdiena", training: "Pieskāriena regbijs — ātruma izaicinājumi", activity: "Sky Park (Domina T/C)" },
  { day: "Otrdiena", training: "Pieskāriena regbijs — veiklības izaicinājumi", activity: "Lazertag" },
  { day: "Trešdiena", training: "Pieskāriena regbijs — spēka izaicinājumi", activity: "Bouldering (Wagon Wall)" },
  { day: "Ceturtdiena", training: "Pieskāriena regbijs — izturības un taktika", activity: "Kino" },
  { day: "Piektdiena", training: "—", activity: "Starptautiskas sacensības (LV / EE / LT)" },
]

const summerIncluded = [
  "Nedēļas dienas ekskursija (Pirmd.–Ceturtd. 9:00–18:00)",
  "Treniņi ar profesionālu treneri katru dienu",
  "Katras dienas aktivitāte apkārtnē",
  "Pusdienas, uzkodas, augļi, ūdens un enerģijas batoniņi",
  "Dalība piektdienas pieskāriena turnīrā",
  "Visi piektdienu turnīri visu jūliju un augustu",
]

const summerPracticalInfo = [
  { icon: MapPin, text: "RTK regbija laukums, Rīga (pie Domina T/C)" },
  { icon: Calendar, text: "Jūlijs–Augusts 2026 · Katru nedēļu" },
  { icon: Clock, text: "Pirmd.–Ceturtd. 9:00–18:00 · Piektdiena — sacensības" },
  { icon: Users, text: "Maksimums 20 bērni nedēļā" },
  { icon: Sparkles, text: "Vecums: 10–16 gadi" },
  { icon: Wallet, text: "€350 / bērns — viss iekļauts" },
]

export function ProgramsSection() {
  const [activeSeason, setActiveSeason] = useState<SeasonKey>("summer")
  const [locationExpanded, setLocationExpanded] = useState(false)
  const season = seasons[activeSeason]

  const scrollToContact = () => {
    document.getElementById("kontakti")?.scrollIntoView({ behavior: "smooth" })
  }

  const switchSeason = (key: SeasonKey) => {
    setActiveSeason(key)
    setLocationExpanded(false)
  }

  return (
    <section id="programmas" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Programmas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Izvēlieties sezonu un piemērotāko programmu.
          </p>
        </div>

        {/* Season toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-2 bg-background border border-border rounded-full p-1">
            {(Object.keys(seasons) as SeasonKey[]).map((key) => (
              <button
                key={key}
                onClick={() => switchSeason(key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSeason === key
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {seasons[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Season intro */}
        <p className="mt-4 text-center text-sm text-muted-foreground max-w-2xl mx-auto px-4">
          {season.intro}
        </p>

        {/* Spring view: 3-card grid */}
        {activeSeason === "spring" && (
          <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
            {seasons.spring.programs.map((program) => (
              <div
                key={program.title}
                className={`relative flex flex-col rounded-2xl bg-card p-6 lg:p-8 ${
                  program.featured
                    ? "border-2 border-accent shadow-md"
                    : "border border-border"
                }`}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Populārākā
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{program.sub}</p>

                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="text-sm">{program.time}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 shrink-0" />
                    <span className="text-sm">15–25 dalībnieki</span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {program.price}
                      <span className="text-2xl">€</span>
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">/ klase</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6 flex-1">
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={scrollToContact}
                  className={`mt-8 w-full ${
                    program.featured
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : ""
                  }`}
                >
                  Pieteikt pasākumu
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Summer view: hero + schedule + included/info + callout */}
        {activeSeason === "summer" && (
          <div className="mt-10 space-y-6">
            {/* Hero card */}
            <div className="rounded-2xl bg-card border-2 border-accent shadow-md p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                    Vasaras Nedēļas Ekskursija Rīgā
                  </h3>
                  <p className="mt-2 text-base sm:text-lg text-muted-foreground font-medium">
                    Pieskāriena Regbijs
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                    Nedēļas garā dienas ekskursija RTK regbija laukumā (RK Miesnieki bāzes
                    laukums, pie Domina T/C, Rīgā). Pirmdien–ceturtdien 9:00–18:00. Bērni
                    mācās spēlēt pieskāriena regbiju — bezkontakta, dinamiska komandas
                    spēle — un katru dienu dodas uz citu aktivitāti apkārtnē.
                  </p>
                </div>
                <div className="shrink-0 lg:text-right">
                  <div className="inline-flex flex-col items-start lg:items-end bg-accent/10 rounded-xl px-5 py-3">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">
                      €350
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      / bērns · viss iekļauts
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={scrollToContact}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground sm:flex-1"
                >
                  Pierakstīties
                </Button>
                <Button asChild variant="outline" className="sm:flex-1">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Jautāt WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Weekly schedule */}
            <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
              <h4 className="text-lg font-semibold text-foreground">Nedēļas grafiks</h4>

              {/* Daily timeline */}
              <div className="mt-4 rounded-lg bg-muted/50 border border-border p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Dienas plāns (Pirmd.–Ceturtd.)
                </p>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">09:00–11:00</p>
                    <p className="text-muted-foreground mt-0.5">Rīta treniņš</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">11:00–14:00</p>
                    <p className="text-muted-foreground mt-0.5">Aktivitāte</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">14:00–16:00</p>
                    <p className="text-muted-foreground mt-0.5">Pusdienas</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">16:00–18:00</p>
                    <p className="text-muted-foreground mt-0.5">Pēcpusdienas treniņš</p>
                  </div>
                </div>
              </div>

              {/* Desktop table */}
              <div className="mt-4 hidden sm:block overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold text-foreground">Diena</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Treniņš</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Aktivitāte</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summerSchedule.map((row, i) => (
                      <tr
                        key={row.day}
                        className={i !== summerSchedule.length - 1 ? "border-b border-border" : ""}
                      >
                        <td className="px-4 py-3 font-medium text-foreground">{row.day}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.training}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile stacked */}
              <ul className="mt-4 sm:hidden space-y-3">
                {summerSchedule.map((row) => (
                  <li
                    key={row.day}
                    className="rounded-lg border border-border p-3"
                  >
                    <p className="font-semibold text-foreground text-sm">{row.day}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="font-medium text-foreground/80">Treniņš: </span>
                      {row.training}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      <span className="font-medium text-foreground/80">Aktivitāte: </span>
                      {row.activity}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Included + Practical info */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-foreground">Iekļauts</h4>
                <ul className="mt-4 space-y-3">
                  {summerIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-foreground">Praktiskā info</h4>
                <ul className="mt-4 space-y-3">
                  {summerPracticalInfo.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item.text}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            {/* Vakara treniņi callout — free perk for graduates */}
            <div className="rounded-2xl bg-accent/10 border border-accent/30 p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">
                      Bezmaksas vakara treniņi nometnes absolventiem
                    </h4>
                    <span className="inline-flex items-center bg-accent text-accent-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                      BEZMAKSAS
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Pēc nometnes pabeigšanas — bezmaksas vakara treniņi RTK laukumā visu vasaru.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <span className="font-medium text-foreground/80">Pirmd. un Trešd. 18:00–19:00 </span>
                      — fiziskās sagatavotības treniņi
                    </li>
                    <li>
                      <span className="font-medium text-foreground/80">Otrd. un Ceturtd. 18:00–19:00 </span>
                      — regbija treniņi
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="text-center text-xs sm:text-sm text-muted-foreground italic">
              Iepriekšēja pieredze nav nepieciešama. Bērni sāk no nulles.
            </p>
          </div>
        )}

        {/* Location card */}
        <div className="mt-8 rounded-2xl bg-card border border-border overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-4 items-start p-6">
            <a
              href={season.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 shrink-0 hover:bg-accent/20 transition-colors"
              title="Skatīt kartē"
            >
              <MapPin className="w-5 h-5 text-accent" />
            </a>
            <div className="flex-1">
              <p className="font-semibold text-foreground">{season.location.name}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{season.location.desc}</p>
              <button
                onClick={() => setLocationExpanded(!locationExpanded)}
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-foreground border border-border rounded-md px-3 py-1.5 hover:bg-muted transition-colors"
              >
                {locationExpanded ? (
                  <>
                    Aizvērt
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Skatīt vietu
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className={locationExpanded ? "block" : "hidden"}>
            <div className="border-t border-border">
              <div className="relative w-full h-56 sm:h-72 max-h-80">
                <img
                  src={
                    activeSeason === "spring"
                      ? "/images/location-josti.jpg"
                      : "/images/location-rtk.jpg"
                  }
                  alt={season.location.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-6 pb-6 pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {season.location.detail}
                </p>
                {season.location.href && (
                  <a
                    href={season.location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
                  >
                    Apmeklēt vietni →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
