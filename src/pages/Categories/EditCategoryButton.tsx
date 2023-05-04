import { Modal } from '../../components/Modal';
import React, { useState } from 'react';
import { Category } from '../../utils/types';
import { EditCategoryForm } from './EditCategoryForm';
import { Button } from '../../components/Button';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

interface EditCategoryButtonProps {
  category: Category;
}
export const EditCategoryButton = ({ category }: EditCategoryButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const hideModal = () => setIsVisible(false);

  return (
    <>
      <Button onClick={() => setIsVisible(true)} isIconButton icon={faEdit} />
      <Modal isVisible={isVisible} onDismiss={hideModal} title="Edit Category">
        <EditCategoryForm category={category} onSuccess={hideModal} />
      </Modal>
    </>
  );
};
