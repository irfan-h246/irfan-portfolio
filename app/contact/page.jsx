"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [showAll, setShowAll] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

 const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("Sending...");

  emailjs
    .send(
      "service_wdd7d1p", // ✅ Your actual Service ID (string)
      "template_0z6xbgr", // ✅ Your actual Template ID (string)
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "Yb71XUs5cd6ykJZxB" // ✅ Your actual Public Key (string)
    )
    .then(
      () => {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message ❌");
      }
    );
};


  return (
    <main className="mb-20 scroll-smooth">
      {/* ...your other sections (Hero, Skills, Projects) */}

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 mt-20 text-center">
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

          {status && (
            <p className="text-xs text-center mt-3 text-primary">{status}</p>
          )}
        </form>
      </section>
    </main>
  )
}
