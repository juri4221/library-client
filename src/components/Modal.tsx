import React, { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import {
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalWrapper,
} from './Modal.styles';
import { Button } from './Button';

interface ModalProps {
  isVisible: boolean;
  title?: string;
  children: React.ReactNode;
  onDismiss: () => void;
}
export const Modal = ({
  children,
  isVisible,
  onDismiss,
  title,
}: ModalProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, onDismiss);

  if (!isVisible) {
    return null;
  }

  return (
    <ModalOverlay className="modal">
      <ModalWrapper ref={ref}>
        <ModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          <Button $outlined onClick={onDismiss}>
            x
          </Button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    </ModalOverlay>
  );
};
