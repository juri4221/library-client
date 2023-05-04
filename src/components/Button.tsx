import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconProp;
  isIconButton?: boolean;
  isLoading?: boolean;
  $outlined?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { children, icon, isIconButton, isLoading, onClick } = props;
  return (
    <ButtonStyled {...props} onClick={!isLoading ? onClick : undefined}>
      {isIconButton && icon ? <FontAwesomeIcon icon={icon} /> : children}{' '}
      {isLoading && (
        <FontAwesomeIcon className="loading-indicator" icon={faSpinner} />
      )}
    </ButtonStyled>
  );
};
