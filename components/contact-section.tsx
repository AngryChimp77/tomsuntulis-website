import { Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakti" className="py-24 bg-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-background tracking-tight">
            Sazinies ar mums
          </h2>
          <p className="mt-4 text-lg text-background/70 leading-relaxed">
            Raksti, zvani vai sazinies WhatsApp — atbildēsim pēc iespējas ātrāk.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto flex flex-col gap-4">
          <a
            href="https://wa.me/37129580288?text=Sveiki%2C%20v%C4%93los%20uzzin%C4%81t%20vair%C4%81k%20par%20kl%C4%81ses%20pas%C4%81kumiem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-5 rounded-2xl bg-background/10 hover:bg-background/20 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/10 shrink-0">
              <MessageCircle className="w-6 h-6 text-background" />
            </div>
            <div>
              <p className="text-sm text-background/60">WhatsApp</p>
              <p className="text-background font-medium text-lg">+371 29 580 288</p>
            </div>
          </a>

          <a
            href="tel:+37129580288"
            className="flex items-center gap-5 p-5 rounded-2xl bg-background/10 hover:bg-background/20 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/10 shrink-0">
              <Phone className="w-6 h-6 text-background" />
            </div>
            <div>
              <p className="text-sm text-background/60">Tālrunis</p>
              <p className="text-background font-medium text-lg">+371 29 580 288</p>
            </div>
          </a>

          <a
            href="mailto:Toms.asejevs@gmail.com?subject=Jautājums%20par%20klases%20pasākumu"
            className="flex items-center gap-5 p-5 rounded-2xl bg-background/10 hover:bg-background/20 transition-colors group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/10 shrink-0">
              <Mail className="w-6 h-6 text-background" />
            </div>
            <div>
              <p className="text-sm text-background/60">E-pasts</p>
              <p className="text-background font-medium text-lg">Toms.asejevs@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
