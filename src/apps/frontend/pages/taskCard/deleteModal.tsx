import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from 'baseui/modal';
import { KIND as ButtonKind } from 'baseui/button';
const deleteModal = (isOpen, setUpdateIsOpen) => {
  return (
    <Modal
      onClose={() => setUpdateIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Confirm Delete</ModalHeader>
      <ModalBody>
        Are you Sure you want to delete this task? This change cannot be
        reversed. Please Be careful!!
      </ModalBody>
      <ModalFooter>
        <ModalButton
          onClick={() => {
            setUpdateIsOpen(false);
          }}
          kind={ButtonKind.tertiary}
        >
          Cancel
        </ModalButton>
        <ModalButton>Delete Task</ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default deleteModal;
