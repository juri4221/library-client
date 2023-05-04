import React, { useState } from 'react';
import { Modal } from '../../components/Modal';
import { CreateAuthorForm } from './CreateAuthorForm';
import { Button } from '../../components/Button';

export const CreateAuthorButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hideModal = () => setIsVisible(false);

  return (
    <>
      <Button onClick={() => setIsVisible(true)}> Create Author</Button>
      <Modal isVisible={isVisible} onDismiss={hideModal} title="Create Author">
        <CreateAuthorForm onSuccess={hideModal} />
      </Modal>
    </>
  );
};
