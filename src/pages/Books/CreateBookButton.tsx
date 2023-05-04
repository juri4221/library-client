import React, { useState } from 'react';
import { Modal } from '../../components/Modal';
import { CreateBookForm } from './CreateBookForm';
import { Button } from '../../components/Button';

export const CreateBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hideModal = () => setIsVisible(false);

  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Create Book</Button>
      <Modal isVisible={isVisible} onDismiss={hideModal} title="Create Book">
        <CreateBookForm onSuccess={hideModal} />
      </Modal>
    </>
  );
};
