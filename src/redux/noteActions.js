import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import findDatesInStr from '../helpers/findDatesInStr';

const addNote = createAction('notes/add', ({ name, category, content }) => ({
  payload: {
    id: shortid.generate(),
    name,
    created: new Date().toLocaleDateString(),
    category,
    content,
    dates: findDatesInStr(content),
    archived: false,
  },
}));

const deleteNote = createAction('notes/delete');

const editNote = createAction(
  'notes/edit',
  ({ id, name, category, content }) => ({
    payload: {
      id,
      name,
      created: new Date().toLocaleDateString(),
      category,
      content,
      dates: findDatesInStr(content),
      archived: false,
    },
  })
);

const toggleArchived = createAction('notes/toggleArchived');

const notesActions = { addNote, deleteNote, editNote, toggleArchived };
export default notesActions;
