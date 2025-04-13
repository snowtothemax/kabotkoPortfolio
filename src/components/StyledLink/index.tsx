import React from "react";

interface StyledLinkProps {
  href: string;
  icon?: string;
  iconAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ 
  href, 
  icon, 
  iconAlt, 
  children, 
  className 
}) => (
  <a
    href={href}
    style={{
      fontSize: 20,
      fontWeight: 350,
      cursor: "pointer",
      textDecoration: "none",
      color: "black",
    }}
    className={className}
  >
    {icon && <img alt={iconAlt || ""} src={icon} className="linkedInIcon" />}
    {children}
  </a>
);

export default StyledLink;