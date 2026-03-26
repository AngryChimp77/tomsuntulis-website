"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Ugunskurs" },
  { src: "/images/gallery2.jpg", alt: "Pārgājiens" },
  { src: "/images/gallery3.jpg", alt: "Ēdiena gatavošana" },
  { src: "/images/gallery4.jpg", alt: "Ūdens aktivitātes" },
  { src: "/images/gallery5.jpg", alt: "Mūzikas darbnīca" },
  { src: "/images/gallery6.jpg", alt: "Jogas nodarbība" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galerija" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Foto galerija
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aplūko mirkļus no mūsu iepriekšējiem pasākumiem.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage}
                alt="Palielināts attēls"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
