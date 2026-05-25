import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, className = '' }) => {
  if (href) return <a href={href} className={className}>{children}</a>;
  return <button className={className}>{children}</button>;
};
export default Button;
