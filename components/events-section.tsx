import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    image: "/images/event1.jpg",
    title: "Piedzīvojumu nometne",
    description: "Aizraujoša nometne ar komandas aktivitātēm, orientēšanos un piedzīvojumiem dabā.",
    date: "Jūlijs 2026",
  },
  {
    image: "/images/event2.jpg",
    title: "Radošā darbnīca",
    description: "Mākslas un radošuma darbnīca, kur jaunieši var attīstīt savas radošās prasmes.",
    date: "Augusts 2026",
  },
  {
    image: "/images/event3.jpg",
    title: "Sporta diena",
    description: "Aktīva sporta diena ar dažādām spēlēm un sacensībām svaigā gaisā.",
    date: "Septembris 2026",
  },
]

export function EventsSection() {
  return (
    <section id="pasakumi" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Gaidāmie pasākumi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Piesakies mūsu nākamajiem pasākumiem un piedzīvo neaizmirstamas pieredzes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.title} className="overflow-hidden border-0 shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {event.date}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
