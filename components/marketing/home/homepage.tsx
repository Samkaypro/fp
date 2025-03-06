/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable tailwindcss/classnames-order */
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import About from "./about"
import HomeGallerySection from "./photo"

const carouselImages = [
  "/_static/images/pics/6.jpg",
  "/_static/images/hero.jpg",
  "/_static/images/pics/3.jpg",
  "/_static/images/pics/2.jpg",
  "/_static/images/pics/11.jpg",
]
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovering])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-orange-50">
      <div
        ref={carouselRef}
        className="relative h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={carouselImages[currentSlide] || "/placeholder.svg"}
              alt={`Carousel image ${currentSlide + 1}`}
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={100}
              priority={currentSlide === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "scale-125 bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl md:max-w-2xl lg:ml-0">
              <motion.h1
                className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Ondo State Public Complaints, Financial Crime and Anti-Corruption Commission
              </motion.h1>
              <motion.p
                className="mb-6 text-base text-white/90 sm:text-lg md:text-xl lg:text-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Established in 2022 to promote probity and accountability in government activities
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center rounded-full bg-[#F96600] px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#FF7F00]"
                >
                  Learn More
                  <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <About />

      {/* <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Scale className="mx-auto mb-6 h-16 w-16 text-[#F96600]" />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Key Information</h2>
            <p className="mt-4 text-gray-600">Essential details about our commission</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Establishment</h3>
              <p className="text-gray-700">
                Established in 2022 to checkmate sharp practices and enhance financial sanity in Ondo State.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Legal Mandate</h3>
              <p className="text-gray-700">
                Empowered by the Ondo State Public Complaints Financial Crime and Anti-Corruption Commission Law 2022.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Structure</h3>
              <p className="text-gray-700">
                Led by a Chairman and Secretary, with specialized departments handling different aspects of our mandate.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <Image
                src="/_static/images/pics/13.jpg"
                alt="SPFACC officers in the field"
                width={600}
                height={400}
                className="rounded-3xl object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mission Statement</h2>
              <p className="text-lg leading-relaxed text-gray-600">
               The Commission will use well-structured supervision; lawful enforcement of laws, regulations and guidelines; and public sensitization and orientation to combat all forms of official improprieties, financial crimes and corrupt practices in Ondo State. 
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 space-y-6 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Vision Statement</h2>
              <p className="text-lg leading-relaxed text-gray-600">
              Our vision is to be a leading internationally recognized public anti-corruption organization, leading Ondo State to an enviable public ethical atmosphere, guided by the principles of accountability and probity; devoid of all forms of corruption and sharp practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 overflow-hidden rounded-3xl shadow-2xl lg:order-2"
            >
              <Image
                src="/_static/images/pics/3/12.jpg"
                alt="SPFACC officers monitoring activities"
                width={600}
                height={600}
                className="rounded-3xl object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-gray-600">Working towards a corruption-free Ondo State</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Investigate</h3>
              <p className="text-gray-700">
                Investigate financial crimes and corruption practices thoroughly and impartially to ensure justice and
                accountability.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Resolve</h3>
              <p className="text-gray-700">
                Resolve public complaints through enlightenment and mediation processes to maintain public trust.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Prevent</h3>
              <p className="text-gray-700">
                Prevent corruption through education, enforcement, and systemic improvements in governance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Shield className="mx-auto mb-6 h-16 w-16 text-[#F96600]" />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Information We Collect</h2>
            <p className="mt-4 text-gray-600">We collect the following types of information</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Personal Information</h3>
              <p className="text-gray-700">
                Includes your name, email address, phone number, and any other details you provide when submitting a
                report or inquiry
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Case Information</h3>
              <p className="text-gray-700">
                Details about the complaint or report, including dates, locations, and other relevant information
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#F96600]">Supporting Documents</h3>
              <p className="text-gray-700">
                Any additional documentation, evidence, or materials you submit to support your case
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Mail className="mx-auto mb-6 h-16 w-16 text-[#F96600]" />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-gray-600">Get in touch with our team</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm"
            >
              <Phone className="mr-4 h-6 w-6 text-[#F96600]" />
              <p className="text-gray-700">07071249966</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm"
            >
              <Mail className="mr-4 h-6 w-6 text-[#F96600]" />
              <p className="text-gray-700">info@spfacc.on.gov.ng</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm"
            >
              <MapPin className="mr-4 h-6 w-6 text-[#F96600]" />
              <p className="text-gray-700">Quarter 21, Alagbaka, Beside Government House, Akure, Ondo State</p>
            </motion.div>
          </div>
        </div>
      </section> */}
      <HomeGallerySection />

      {/* <footer className="bg-[#F96600] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p>
            &copy; 2025 Ondo State Public Complaints, Financial Crimes and Anti-Corruption Commission. All rights
            reserved.
          </p>
        </div>
      </footer> */}
    </main>
  )
}

