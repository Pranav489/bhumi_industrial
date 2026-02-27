// components/Footer/Footer.js
"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Download,
} from "lucide-react";
import { bhumilogo, rajhanslogo } from "../../assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Industrial Services", href: "/industrial" },
    { name: "Financial Services", href: "/financial" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  const industrialServices = [
    {
      name: "MIDC Transfer Process",
      href: "/industrial/midc-transfer-process",
    },
    {
      name: "Bank Auction Deals",
      href: "/industrial/bank-auction-deals-sarfaesi",
    },
    { name: "DRT/NCLT Deals", href: "/industrial/drt-nclt-deals" },
    {
      name: "MIDC Water Connection",
      href: "/industrial/midc-water-mseb-connection",
    },
    { name: "Project Reports", href: "/industrial/midc-project-report" },
  ];

  const financialServices = [
    { name: "Term Loans", href: "/financial/term-loans" },
    {
      name: "MSME Udyam Registration",
      href: "/financial/msme-udyam-registration",
    },
    { name: "CMA/DPR Reports", href: "/financial/cma-cra-dpr-report" },
    { name: "Working Capital", href: "/financial/cash-credit-working-capital" },
    { name: "Subsidy Compliance", href: "/financial/subsidy-compliance" },
  ];

  const handleDownloadBrochure = () => {
    const brochureUrl = "/brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Bhumi-Industrial-Consultant-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gradient-to-r from-[#001a33] via-[#003366] to-[#f97316] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - FIXED: Added min-height to prevent CLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 min-h-[400px]">
          {/* Company Info - FIXED: Added fixed dimensions */}
          <div className="space-y-4" style={{ minHeight: "300px" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-24">
                <Image
                  src={bhumilogo}
                  alt="Bhumi Industrial Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="96px"
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="relative h-10 w-20">
                <Image
                  src={rajhanslogo}
                  alt="Rajhans Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="80px"
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <p className="text-[#d9e6f2] font-secondary text-sm leading-relaxed">
              26+ years of excellence in industrial & financial consulting. Your
              trusted partner for MIDC services, MSME Udyam registration, and
              project finance in Nashik, Pune & Chakan.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919822242170"
                className="flex items-center gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group"
              >
                <span className="p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Phone size={16} />
                </span>
                <span className="font-secondary">+91 9822242170</span>
              </a>
              <a
                href="mailto:infofiiacc@gmail.com"
                className="flex items-center gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group"
              >
                <span className="p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Mail size={16} />
                </span>
                <span className="font-secondary">infofiiacc@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-[#d9e6f2]">
                <span className="p-2 bg-white/10 rounded-lg shrink-0">
                  <MapPin size={16} />
                </span>
                <span className="font-secondary text-sm">
                  Office no 301/302, Tulips Apartment,
                  <br />
                  College Road, Nashik-422005
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links - FIXED: Added min-height */}
          <div style={{ minHeight: "250px" }}>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial Services - FIXED: Added min-height */}
          <div style={{ minHeight: "250px" }}>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Industrial Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {industrialServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industrial"
                  className="text-[#f97316] hover:text-[#fb923c] transition-colors font-secondary text-sm font-semibold flex items-center gap-1"
                >
                  View All (11 Services) <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Financial Services - FIXED: Added min-height */}
          <div style={{ minHeight: "300px" }}>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Financial Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-3 mb-6">
              {financialServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/financial"
                  className="text-[#f97316] hover:text-[#fb923c] transition-colors font-secondary text-sm font-semibold flex items-center gap-1"
                >
                  View All (14 Services) <ArrowRight size={14} />
                </Link>
              </li>
            </ul>

            {/* Brochure Download */}
            <button
              onClick={handleDownloadBrochure}
              className="w-full flex items-center justify-center gap-2 p-3 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-bold transition-all group"
            >
              <Download
                size={18}
                className="group-hover:animate-bounce shrink-0"
              />
              Download Company Brochure
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#f97316] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#f97316] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#f97316] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-[#f97316] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup - Optional, can be removed if not needed */}
        <div className="mb-12 p-4 md:p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-[#d9e6f2] text-sm">
                Get latest updates on MIDC policies and financial schemes
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-white/50 focus:outline-none focus:border-[#f97316]"
              />
              <button className="px-6 py-3 bg-[#f97316] hover:bg-[#ea580c] rounded-r-xl font-semibold transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#b3cce6] text-sm font-secondary">
              © {currentYear} Bhumi Industrial Consultant. All rights reserved.
              | FI-ACC Since 1999
            </p>
            <div className="flex items-center gap-6 text-sm font-secondary">
              <Link
                href="/privacy-policy"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-center text-[#8cb3d9] text-xs mt-4 font-secondary">
            Located in Nashik | Serving Ambad MIDC, Satpur MIDC, Sinnar MIDC,
            Pune MIDC, Chakan MIDC
          </p>
        </div>
      </div>
    </footer>
  );
}
