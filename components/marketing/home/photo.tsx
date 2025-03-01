/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable tailwindcss/classnames-order */
"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import galleryData from "@/data/photo-gallery.json"

export default function HomeGallerySection() {
  // Get the 3 most recent albums based on date
  const recentAlbums = [...galleryData.albums]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Photo Gallery</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of official events and ceremonies
          </p>
        </div>

        {/* Album Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {recentAlbums.map((album) => {
            const category = galleryData.categories.find((c) => c.id === album.categoryId)

            return (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/info/gallery/${album.id}`}>
                  <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={album.coverImage || "/placeholder.svg"}
                      alt={album.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="px-4 text-center text-white">View Album</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    {category && (
                      <Badge variant="secondary" className="mb-2">
                        {category.title}
                      </Badge>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900">{album.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                      {/* <div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        <span>
                          {new Date(album.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="size-4" />
                        <span>{album.author}</span>
                      </div> */}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/info/gallery">
            <Button variant="default" className="bg-[#F96600] hover:bg-[#e05a00] text-white">
              View More Albums
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

