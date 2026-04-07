import Link from "next/link"
import Image from "next/image"

const sponsors = [
  {
    name: "Rugby Miesnieki",
    href: "https://www.facebook.com/Miesnieki/?ref=1",
    src: "/images/sponsor-miesnieki.png",
  },
  {
    name: "Regbija Federācija",
    href: "https://rugby-latvia.lv",
    src: "/images/sponsor-federacija.png",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-10 bg-background border-t border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8">
          Atbalstītāji
        </p>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {sponsors.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={s.src}
                alt={s.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
