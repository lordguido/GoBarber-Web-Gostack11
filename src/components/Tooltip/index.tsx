import React from 'react';

import { Contanier } from './styles';

interface TooltipsProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipsProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Contanier className={className}>
      {children}
      <span>{title}</span>
    </Contanier>
  );
};

export default Tooltip;
