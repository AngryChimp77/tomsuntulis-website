import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold text-background">
            Toms Untulis
          </Link>
          <p className="text-sm text-background/60">
            &copy; {currentYear} Toms Untulis. Visas tiesības aizsargātas.
          </p>
        </div>
      </div>
    </footer>
  )
}
