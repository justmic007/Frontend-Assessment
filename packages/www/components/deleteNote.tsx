import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'
import {
  Button, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter, useDisclosure,
  useToast
} from '@chakra-ui/core';
import { HOST_URL } from '../constants';


const DeleteNote = ({noteId}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter()

  const deleteNote = async () => {
    onClose()
    
    try {
      const response = await axios.delete(`${HOST_URL}/api/notes/${noteId}`)
      toast({
        title: "An error occurred.",
        description: "Note successfully deleted",
        status: "success",
        position: "top",
        duration: 9000,
        isClosable: true
      })
      router.push('/')
    } catch (err) {
      toast({
        title: "An error occurred.",
        description: "Something went wrong. Try again",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true
      })
    }
  } 

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon="delete"
        variantColor="red"
        borderRadius={7}
        fontSize={14}
        ml={1} mr={1}
      >
        Delete
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius={10}>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this note?
          </ModalBody>
          <ModalFooter>
            <Button
                variantColor="blue"
                borderRadius={7}
                fontSize={14}
                mr={3}
                onClick={deleteNote}
              >
                Yes
            </Button>
            <Button
              variantColor="red"
              onClick={onClose}
              borderRadius={7}
              fontSize={14}
            >
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteNote;
