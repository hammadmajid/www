"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"

const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check for Cmd + P (Mac) or Ctrl + P (Windows/Linux)
            if ((event.metaKey || event.ctrlKey) && event.key === "p") {
                event.preventDefault()
                // Only open drawer on smaller screens
                if (window.innerWidth < 768) {
                    setIsOpen(true)
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                {/* Application Title */}
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-foreground hover:text-foreground/80 transition-colors">
                        MyApp
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Drawer open={isOpen} onOpenChange={setIsOpen}>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Navigation</DrawerTitle>
                            </DrawerHeader>
                            <div className="px-4 pb-6">
                                <nav className="flex flex-col space-y-3">
                                    {navigationLinks.map((link) => (
                                        <DrawerClose asChild key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-3 px-4 rounded-md hover:bg-accent text-left"
                                            >
                                                {link.name}
                                            </Link>
                                        </DrawerClose>
                                    ))}
                                </nav>
                                <div className="pt-4 mt-4 border-t">
                                    <p className="text-xs text-muted-foreground text-center">
                                        Press <kbd className="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">Cmd</kbd> +{" "}
                                        <kbd className="px-1.5 py-0.5 text-xs font-mono bg-muted rounded">P</kbd> to open this menu
                                    </p>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    )
}

function Link({ href, children, className }: {
    href: string
    children: React.ReactNode
    className?: string
}) {
    return (
        <a
            href={href}
            className={`text-sm font-medium text-foreground/80 hover:text-foreground transition-colors ${className}`}
        >
            {children}
        </a>
    )
}
