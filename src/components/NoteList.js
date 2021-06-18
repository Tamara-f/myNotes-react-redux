import React, { useState } from 'react';
import NoteItem from './NoteItem';
import Modal from './Modal';
import NoteForm from './NoteForm';

export default function NoteList({ notes, isArchive }) {
  const [showModal, setShowModal] = useState(false);
  const [noteData, setNoteData] = useState();

  const toggleModal = data => {
    setNoteData(data);
    setShowModal(!showModal);
  };

  return (
    <>
      <ul>
        {notes.map(({ id }) => (
          <NoteItem
            key={id}
            noteId={id}
            onEdit={toggleModal}
            isArchive={isArchive}
          />
        ))}
      </ul>

      {showModal && (
        <Modal onClose={toggleModal}>
          <NoteForm onSave={toggleModal} noteData={noteData} />
        </Modal>
      )}
    </>
  );
}
