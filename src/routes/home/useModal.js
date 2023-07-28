import React from "react";

function useModal() {

  const [openModal, setOpenModal] = React.useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  return {
    openModal,
    toggleModal,
  };
}

export { useModal };