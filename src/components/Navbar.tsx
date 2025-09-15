import React from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  brandName: string;
  links: NavLink[];
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  brandName,
  links,
  className,
}) => {
  return (
    <nav className={`bg-foreground p-4 text-background ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          {brandName}
        </a>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-muted">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
