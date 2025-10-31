"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "emailjs-com"
import { projects } from "@/lib/projects"
import Hero from "./_components/Hero"
import Project from "./_components/Project"
import Skills from "./_components/Skills"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [showAll, setShowAll] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .send(
        "service_wdd7d1p", // ✅ replace with your actual service ID
        "template_0z6xbgr", // ✅ replace with your actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Yb71XUs5cd6ykJZxB" // ✅ replace with your actual public key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅")
          setFormData({ name: "", email: "", message: "" })
        },
        (error) => {
          console.error("EmailJS Error:", error)
          setStatus("Failed to send message ❌")
        }
      )
  }

  return (
    <main className="mb-20 scroll-smooth">
      {/* ===== ABOUT SECTION ===== */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.section>

      {/* ===== SKILLS SECTION ===== */}
      <motion.section
        id="skills"
        className="scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-0 mt-7">
          <h1 className="text-xl font-bold">
            Skills<span className="text-primary">.</span>
          </h1>
          <p className="text-xs">
            Some of my skills I learnt in my journey of <br /> self-taught coding
            <span className="text-primary">.</span>
          </p>
        </div>
        <Skills />
      </motion.section>

      {/* ===== PROJECTS SECTION ===== */}
      <motion.section
        id="projects"
        className="scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-5">
          <h1 className="text-xl font-bold">
            Projects<span className="text-primary">.</span>
          </h1>
          <p className="text-xs">
            Some of my projects I built. Click below to view more
            <span className="text-primary">.</span>
          </p>
        </div>

        <div className="flex gap-2 flex-wrap items-center justify-center md:px-20 lg:px-32 px-5">
          {displayedProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <div className="grid place-content-center mt-10">
          <Button variant="secondary" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      </motion.section>

      {/* ===== CONTACT SECTION ===== */}
      <motion.section
        id="contact"
        className="scroll-mt-20 mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl font-bold">
          Contact<span className="text-primary">.</span>
        </h1>
        <p className="text-xs mb-6">
          Feel free to reach out for collaborations or any queries!
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto grid gap-3 px-6 text-left"
        >
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@doe.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="I want to work with you..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="mt-3">
            Send Message
          </Button>

          {/* Animated Status Message */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 text-center text-sm ${
                  status.includes("successfully") ? "text-green-500" : "text-red-500"
                }`}
              >
                {status}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.section>
    </main>
  )
}
