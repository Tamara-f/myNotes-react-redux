import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import notesActions from '../redux/noteActions';

export default function NoteItem({ noteId, onEdit, isArchive }) {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.items);
  const note = notes.find(el => el.id === noteId);
  const [unarchive, setUnsrchive] = useState('archive');

  useEffect(() => {
    isArchive && setUnsrchive('unarchive');
  }, [isArchive]);

  const { id, name, created, category, content, dates } = note;

  const editNote = e => {
    const li = e.target.parentNode.parentNode.parentNode;
    const id = li.id;
    const name = li.childNodes[0].innerHTML;
    const content = li.childNodes[3].innerHTML;
    onEdit({ id, name, content });
  };

  return (
    <li className='note-item' key={id} id={id}>
      <p className='note-text'>{name}</p>
      <p>{created}</p>
      <p>{category}</p>
      <p>{content}</p>
      <p>{dates}</p>
      <p>
        <span className='note-edit' onClick={editNote}>
          <i className='fas fa-edit' data-title='edit'></i>
        </span>
        <span
          className='note-archive'
          onClick={() => dispatch(notesActions.toggleArchived(id))}
        >
          <i className='fas fa-archive' data-title={unarchive}></i>
        </span>
        <span
          className='note-trash'
          onClick={() => dispatch(notesActions.deleteNote(id))}
        >
          <i className='fas fa-trash-alt' data-title='delete'></i>
        </span>
      </p>
    </li>
  );
}
