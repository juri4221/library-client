import { Modal } from '../../components/Modal';
import { CreateCategoryForm } from './CreateCategoryForm';
import React, { useState } from 'react';
import { Button } from '../../components/Button';

export const CreateCategoryButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hideModal = () => setIsVisible(false);

  return (
    <>
      <Button onClick={() => setIsVisible(true)}> Create Category</Button>
      <Modal
        isVisible={isVisible}
        onDismiss={hideModal}
        title="Create Category">
        <CreateCategoryForm onSuccess={hideModal} />
      </Modal>
    </>
  );
};
