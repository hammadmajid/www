"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

type FormData = {
    name: string
    email: string
    subject: string
    message: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        // Map form field names to state property names
        const fieldName = name === "_name" ? "name" : name === "_email" ? "email" : name === "_subject" ? "subject" : "message"
        setFormData((prev) => ({ ...prev, [fieldName]: value }))
    }

    return (
        <form action="https://formsubmit.co/hammadmajid@proton.me" method="POST" className="space-y-4 w-full">
            <div>
                <Label htmlFor="name" className="sr-only">Name</Label>
                <Input id="name" name="_name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            </div>

            <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" name="_email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>

            <div>
                <Label htmlFor="subject" className="sr-only">Subject</Label>
                <Input
                    id="subject"
                    name="_subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                />
            </div>

            <div>
                <Label htmlFor="message" className="sr-only">Message</Label>
                <Textarea id="message" name="_message" rows={4} value={formData.message} onChange={handleChange} placeholder="Message" required />
            </div>

            <Button type="submit">
                Send Message
            </Button>
        </form>
    )
}
