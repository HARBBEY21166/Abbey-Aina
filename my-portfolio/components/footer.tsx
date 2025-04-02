import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="mt-4 flex space-x-3">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-2 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Navigation</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium">Services</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Web Development
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Frontend Development
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                UI/UX Design
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Responsive Design
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Performance Optimization
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium">Legal</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

