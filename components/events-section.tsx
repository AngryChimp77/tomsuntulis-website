import Image from "next/image"
import { Button } from "@/components/ui/button"

export function EventsSection() {
  return (
    <section id="pasakumi" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Pasākumu norises vieta
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/location.jpg"
              alt="Viesu nams lauku vidē ar mežu un ūdenstilpni"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Viesu nams &quot;Josti&quot;
            </h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Mūsu pasākumi notiek skaistā lauku vidē Tukuma novadā, kur pieejamas plašas
              teritorijas, meži, dīķi un aktivitāšu zonas. Ideāla vieta jauniešu
              piedzīvojumiem, sporta spēlēm un komandas saliedēšanai.
            </p>

            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-foreground" />
                <span>Plaša teritorija ar mežu un pļavām</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-foreground" />
                <span>Viesu nams ar nakšņošanas iespējām</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-foreground" />
                <span>Pirts un atpūtas zona</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-foreground" />
                <span>Vietas komandu aktivitātēm un spēlēm</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center rounded-full bg-background px-3 py-1 border border-border">
                Tukuma novads
              </span>
              <span className="inline-flex items-center rounded-full bg-background px-3 py-1 border border-border">
                Aptuveni 1h no Rīgas
              </span>
              <span className="inline-flex items-center rounded-full bg-background px-3 py-1 border border-border">
                Piemērota grupām un pasākumiem
              </span>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <a
                  href="https://viesunamiem.lv/josti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Skatīt vietu
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
