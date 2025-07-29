"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

import { Send } from 'lucide-react';

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    return (
        <form action="https://formsubmit.co/hammadmajid@proton.me" method="POST" className="space-y-4 w-full">
            <div>
                <Label htmlFor="name" className="sr-only">Name</Label>
                <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            </div>

            <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>

            <div>
                <Label htmlFor="subject" className="sr-only">Subject</Label>
                <Input
                    id="subject"
                    name="_subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    required
                />
            </div>

            <div>
                <Label htmlFor="message" className="sr-only">Message</Label>
                <Textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
            </div>

            <Button type="submit">
                <Send />
                Send Message
            </Button>
        </form>
    )
}
