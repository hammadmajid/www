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
    message: string
}

type FormErrors = {
    name?: string
    email?: string
    message?: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    })
    const [errors, setErrors] = useState<FormErrors>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    return (
        <form action="https://formsubmit.co/hammadmajid@proton.me" method="POST" className="space-y-4 max-w-md">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required />
                {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
            </div>

            <Button type="submit">
                Send Message
            </Button>
        </form>
    )
}
