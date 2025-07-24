"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
    { name: "GitHub", href: "https://github.com/hammadmajid", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/hammadmajid", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/hammadmajid", icon: Twitter },
    { name: "Email", href: "mailto:contact@hammadmajid.dev", icon: Mail },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="sticky bottom-4 z-50 w-full px-4 md:px-6 mt-16">
            <div className="mx-auto max-w-4xl flex flex-col items-center justify-center py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-full shadow-lg">
                {/* Social Icons Row */}
                <div className="flex items-center space-x-6">
                    {socialLinks.map((link) => {
                        const IconComponent = link.icon
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/60 hover:text-foreground transition-colors p-2 rounded-full hover:bg-accent"
                                aria-label={link.name}
                            >
                                <IconComponent className="h-5 w-5" />
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}
