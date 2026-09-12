import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  target,
  rel,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 select-none cursor-pointer';

  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/20 active:scale-[0.98]',
    outline: 'border-2 border-brand-500 text-brand-500 hover:bg-brand-50 hover:border-brand-600 active:scale-[0.98]',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-[0.98]',
    ghost: 'text-slate-600 hover:text-brand-500 hover:bg-brand-50',
    white: 'bg-white text-slate-800 shadow-sm border border-slate-200 hover:border-brand-300 hover:text-brand-500'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold'
  };

  const combinedClass = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
}
