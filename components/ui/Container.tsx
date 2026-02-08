import { ReactNode } from 'react';

type ContainerSize = 'md' | 'lg' | 'xl';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizeStyles: Record<ContainerSize, string> = {
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[80rem]',
};

export default function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${sizeStyles[size]} px-4 md:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
