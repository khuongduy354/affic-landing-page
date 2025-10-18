import { Linkedin, Facebook, Mail, MapPin, Phone, FileText, BookOpen, Users, Building2 } from "lucide-react";
// FIXED: Changed to a relative path to prevent build errors
import logo from "../assets/Affic.AI Logo Footer.png";

const Footer = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-background/95 to-background border-t border-border/30">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-3xl" />
      
      <div className="container relative mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-4">
            <div className="flex flex-col gap-x-12 gap-y-8 ">
              {/* Logo with enhanced visibility */}
                  <div className="relative flex justify-start pl-16">
                    <img src={logo} alt="Affic AI" className="relative h-16 w-auto drop-shadow-lg" />
                  </div>
              
              <p className="text-[15px] text-muted-foreground/90 max-w-sm leading-relaxed">
                Affic AI is the no-code platform that empowers you to build and deploy an entire AI workforce. Our mission is to automate your business processes, freeing your team to focus on what matters most: innovation and growth.
              </p>

              {/* Social Links with enhanced styling */}
              <div className="flex items-center gap-6">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/affic-ai/", label: "LinkedIn" },
                  { icon: Facebook, href: "https://www.facebook.com/afficai/", label: "Facebook" },
                  { 
                    // FIXED: The function now accepts props (like className)
                    icon: ({ className }) => (
                      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    ),
                    href: "https://x.com",
                    label: "X (formerly Twitter)"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur" />
                    <social.icon className="relative w-[22px] h-[22px] text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="col-span-1 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                  Company
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: Building2, text: "About Us" },
                    { icon: BookOpen, text: "Blog" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="group flex items-center gap-2 text-[15px] text-muted-foreground/90 hover:text-primary transition-colors">
                        <item.icon className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors" />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {[
                    "Documentation",
                    "API Reference",
                    "Integration Guide",
                    "Case Studies"
                  ].map((text, index) => (
                    <li key={index}>
                      <a href="#" className="text-[15px] text-muted-foreground/90 hover:text-primary transition-colors">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:jin@afficai.com" className="group flex items-center gap-2 text-[15px] text-muted-foreground/90 hover:text-primary transition-colors">
                      <Mail className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors" />
                      jin@afficai.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+84946500646" className="group flex items-center gap-2 text-[15px] text-muted-foreground/90 hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 text-muted-foreground/70 group-hover:text-primary transition-colors" />
                      +84 (946) 500-646
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground/70 mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-muted-foreground/90">
                      District 3,<br />
                      Ho Chi Minh City, Vietnam
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground/80">
              &copy; Affic AI. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-muted-foreground/80 hover:text-primary transition-colors"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
