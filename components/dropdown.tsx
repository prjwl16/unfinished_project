import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const links = [
  "Building Reproducible Packages with Nixpkgs",
  "Speeding up Installations with Nix Package Caches",
  "Jetify Cache: A Package Cache designed for Devbox and Nix",
  "Devbox: Optimized for Nix Package Caching",
];

const Dropdown = () => {
  return (
    <Select>
      <SelectTrigger className="w-full outline-none text-neutral mt-6 md:hidden">
        <SelectValue placeholder="In this article" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {links.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
