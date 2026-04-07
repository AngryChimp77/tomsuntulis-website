"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const seasons = {
  spring: {
    label: "Maijs – Jūnijs",
    note: "Pavasara sezona",
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
          "Pārgājiens",
          "Vakara pasākums",
          "Pusdienas (specifiskus ēdienus nenodrošinām)",
          "Vakariņas (specifiskus ēdienus nenodrošinām)",
          "Brokastis",
          "Apmaksātu vietas īre",
          "Daudz un dažādas klasi saliedējošas atrakcijas",
          "Nakts trase",
          "Pirts",
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
          "Pirts",
        ],
      },
    ],
    location: {
      name: 'Viesu nams "Josti"',
      desc: "Tukuma novads · ~1h no Rīgas",
      detail:
        "Pasākumi notiek skaistā lauku vidē ar plašu teritoriju, mežiem, dīķiem un aktivitāšu zonām. Ideāla vieta komandas saliedēšanai.",
      href: "https://viesunamiem.lv/josti",
    },
  },
  summer: {
    label: "Jūlijs – Augusts",
    note: "Vasaras sezona",
    programs: [
      {
        title: "Vasaras programma",
        sub: "1.–12. klasei",
        time: "Tiek precizēts",
        price: null,
        featured: false,
        features: [
          "Pasākuma vadītāji",
          "Pilna dienas programma",
          "Ēdināšana",
          "Klasi saliedējošas aktivitātes",
        ],
      },
    ],
    location: {
      name: "RTK skola",
      desc: "Detaļas drīzumā",
      detail:
        "Vasaras sezonā pasākumi notiek RTK skolā. Sīkāka informācija par programmu un cenām drīzumā.",
      href: null,
    },
  },
}

type SeasonKey = keyof typeof seasons

export function ProgramsSection() {
  const [activeSeason, setActiveSeason] = useState<SeasonKey>("spring")
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

        {/* Season note */}
        <p className="mt-4 text-center text-sm text-muted-foreground">{season.note}</p>

        {/* Program cards */}
        <div
          className={`mt-10 grid gap-6 ${
            season.programs.length === 1
              ? "grid-cols-1 max-w-sm mx-auto"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {season.programs.map((program) => (
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

                <div className="mt-4">
                  {program.price ? (
                    <span className="text-4xl font-bold text-foreground">
                      {program.price}
                      <span className="text-2xl">€</span>
                    </span>
                  ) : (
                    <span className="text-lg text-muted-foreground font-medium">
                      Cena drīzumā
                    </span>
                  )}
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

        {/* Location card */}
        <div className="mt-8 rounded-2xl bg-card border border-border overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-4 items-start p-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
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
              <div className="relative w-full aspect-[16/9] bg-muted">
                <Image
                  src="/images/location.jpg"
                  alt={season.location.name}
                  fill
                  className="object-cover"
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
