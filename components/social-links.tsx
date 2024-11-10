import React from "react";
import GitHub from "@/components/icons/github";
import Discord from "@/components/icons/discord";
import { cn } from "@/lib/utils";
import Twitter from "@/components/icons/twitter";
import LinkedIn from "@/components/icons/linkedin";
import YouTube from "@/components/icons/youtube";

interface Props {
  className?: string;
}

interface SocialLink {
  href: string;
  Icon: React.FC;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: "https://github.com", Icon: GitHub, label: "GitHub" },
  { href: "https://discord.com", Icon: Discord, label: "Discord" },
  { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", Icon: LinkedIn, label: "LinkedIn" },
  { href: "https://youtube.com", Icon: YouTube, label: "YouTube" },
];

const SocialLinks: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex space-x-4 items-center text-gray-400", className)}>
      {socialLinks.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
