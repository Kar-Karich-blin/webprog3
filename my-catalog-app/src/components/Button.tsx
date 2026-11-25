import { type ButtonProps } from '../types';

export const Button = ({ 
  text, variant = 'primary', size = 'm', isLoading = false, icon, disabled, className, ...props 
}: ButtonProps) => {
  const buttonClass = [
    'button',
    `button_variant_${variant}`,
    `button_size_${size}`,
    (disabled || isLoading) ? 'button_state_disabled' : '',
    isLoading ? 'button_state_loading' : ''
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClass} disabled={disabled || isLoading} {...props}>
      {icon && <span className="button__icon" style={{ marginRight: '4px' }}>{icon}</span>}
      <span className="button__text">{isLoading ? 'Загрузка...' : text}</span>
    </button>
  );
};