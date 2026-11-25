export interface Course {
  id: number;
  title: string;
  description: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary';
  size?: 'm' | 'l';
  isLoading?: boolean;
  icon?: string;
}