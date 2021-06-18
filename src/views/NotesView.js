import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import Stats from '../components/Stats';
import Table from '../components/Table';

const NotesView = () => {
  const [showModal, setShowModal] = useState(false);
  const notes = useSelector(state =>
    state.items.filter(item => !item.archived)
  );

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const headNotes = ['name', 'created', 'category', 'content', 'dates', 'edit'];
  const head = ['category', 'active', 'archived'];

  return (
    <div>
      <Table data={headNotes}>
        <NoteList notes={notes} />
      </Table>

      <div>
        <button id='modal' onClick={toggleModal}>
          Add note
        </button>
      </div>
      <Table data={head}>
        <Stats />
      </Table>

      {showModal && (
        <Modal onClose={toggleModal}>
          <NoteForm onSave={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default NotesView;
