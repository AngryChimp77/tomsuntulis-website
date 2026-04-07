import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Jaunieši aktivitātēs"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-balance">
          Toms Untulis
        </h1>
        <p className="mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
          Pasākumi un aktivitātes jauniešiem
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 sm:mt-10 md:mt-12">
          <a
            href="#kontakti"
            className="inline-flex items-center justify-center rounded-md text-base sm:text-lg px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors"
          >
            Pieteikties
          </a>
          <a
            href="#programmas"
            className="inline-flex items-center justify-center rounded-md text-base sm:text-lg px-8 py-4 bg-transparent text-white font-medium border border-white/50 hover:bg-white/10 transition-colors"
          >
            Skatīt programmas
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
