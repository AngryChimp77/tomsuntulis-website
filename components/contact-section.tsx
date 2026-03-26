import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Tālrunis",
    value: "+371 20 000 000",
    href: "tel:+37120000000",
  },
  {
    icon: Mail,
    label: "E-pasts",
    value: "info@tomsuntulis.lv",
    href: "mailto:info@tomsuntulis.lv",
  },
  {
    icon: MapPin,
    label: "Atrašanās vieta",
    value: "Rīga, Latvija",
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="kontakti" className="py-24 bg-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-background tracking-tight">
              Sazinies ar mums
            </h2>
            <p className="mt-4 text-lg text-background/70 leading-relaxed">
              Vai tev ir jautājumi vai vēlies pieteikties kādam no mūsu pasākumiem? 
              Sazinies ar mums un mēs ar prieku tev palīdzēsim.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/10">
                    <item.icon className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-background font-medium hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-background font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Nosūti ziņu
            </h3>
            <form className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Vārds
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tavs vārds"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-pasts
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tavs@epasts.lv"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Ziņa
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tava ziņa..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full mt-2">
                Nosūtīt
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
