import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { Logo } from "@/components/logo";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-sm tracking-widest text-white/70">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-base">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const devboxLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/tutorials", label: "Tutorials" },
];

const companyLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-brand text-white py-8">
        <div className="container max-w-8xl flex flex-col md:flex-row items-start justify-between mx-auto px-4">
          <div className="space-y-16">
            <div className="grid grid-cols-3 gap-8">
              <FooterSection title="DEVBOX" links={devboxLinks} />
              <FooterSection title="COMPANY" links={companyLinks} />
              <FooterSection title="LEGAL" links={legalLinks} />
            </div>
            <p className="text-sm text-white/70">
              © 2024 Jetify Inc. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col justify-between items-center mt-4 md:mt-0 space-y-8 md:space-y-24">
            <Logo className="pt-0 mr-auto md:ml-auto mt-16 md:mt-0 order-2 md:order-1" />
            <SocialLinks className="order-1 md:order-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
