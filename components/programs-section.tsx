"use client"

import { Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "1. Programma (1.–4. klasei)",
    time: "10:00–16:00",
    price: "1000",
    features: [
      "Pasākuma vadītāji",
      "Pusdienas (specifiskus ēdienus nenodrošinām)",
      "Apmaksāta vietas īre",
      "Daudz un dažādas klasi saliedējošas atrakcijas",
    ],
  },
  {
    title: "2. Programma (5.–12. klasei)",
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
    title: "3. Programma (5.–12. klasei)",
    time: "17:00–08:45",
    price: "1400",
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
]

export function ProgramsSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakti")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programmas" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Programmas
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Izvēlieties sev piemērotāko programmu atkarībā no klases vecuma un vēlamā pasākuma ilguma.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`relative flex flex-col rounded-2xl bg-card border p-6 lg:p-8 ${
                program.featured 
                  ? "border-orange-400 shadow-lg shadow-orange-100" 
                  : "border-border"
              }`}
            >
              {program.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Populārākā
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground">
                  {program.title}
                </h3>
                
                <div className="mt-3 flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{program.time}</span>
                </div>

                <div className="mt-4">
                  <span className="text-4xl lg:text-5xl font-bold text-orange-500">
                    {program.price}
                  </span>
                  <span className="text-2xl font-bold text-orange-500">€</span>
                </div>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`mt-8 w-full ${
                  program.featured
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                Pieteikt pasākumu
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
