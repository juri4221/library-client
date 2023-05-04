import { Book } from '../../utils/types';
import { Modal } from '../../components/Modal';
import { EditBookForm } from './EditBookForm';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

interface EditBookButtonProps {
  book: Book;
}
export const EditBookButton = ({ book }: EditBookButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const hideModal = () => setIsVisible(false);

  return (
    <>
      <Button onClick={() => setIsVisible(true)} isIconButton icon={faEdit} />
      <Modal isVisible={isVisible} onDismiss={hideModal} title="Edit Book">
        <EditBookForm book={book} onSuccess={hideModal} />
      </Modal>
    </>
  );
};
