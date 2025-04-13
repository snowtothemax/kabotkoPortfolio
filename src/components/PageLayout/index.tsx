import React from "react";

interface PageLayoutProps {
  title: string;
  links?: React.ReactNode;
  children: React.ReactNode;
  contentStyle?: React.CSSProperties;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  links, 
  children,
  contentStyle
}) => (
  <div className="container-fluid" style={{ padding: 0, ...(contentStyle || {}) }}>
    <div className="avoidNav">
      <h1 className="page-header">{title}</h1>
      {links && <p className="small-links">{links}</p>}
    </div>
    {children}
  </div>
);

export default PageLayout;