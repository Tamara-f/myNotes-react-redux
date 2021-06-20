import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import notesActions from '../redux/noteActions';

export default function NoteForm({ onSave, noteData }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (noteData) {
      setName(noteData.name);
      setContent(noteData.content);
    }
  }, [noteData]);

  const handleChangeName = e => setName(e.target.value);
  const handleChangeCategory = e => setCategory(e.target.value);
  const handleChangeContent = e => setContent(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (category === '') {
      return alert('All fields must be filled');
    }

    if (noteData) {
      const id = noteData.id;
      dispatch(notesActions.editNote({ id, name, category, content }));
    } else {
      dispatch(notesActions.addNote({ name, category, content }));
    }

    onSave();
    setName('');
    setContent('');
  };

  return (
    <div className='addNote'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className='inputModal'
          type='text'
          placeholder={name}
          value={name}
          onChange={handleChangeName}
          required='required'
        />
        <div className='radio' onChange={handleChangeCategory}>
          Choose category:
          <label>
            <input type='radio' name='radio' value='Task' />
            Task
          </label>
          <label>
            <input type='radio' name='radio' value='Random Though' />
            Random Though
          </label>
          <label>
            <input type='radio' name='radio' value='Idea' />
            Idea
          </label>
        </div>
        <label htmlFor='content'>Content:</label>
        <textarea
          id='content'
          name='content'
          rows='5'
          cols='33'
          onChange={handleChangeContent}
          value={content}
          required='required'
        >
          {content}
        </textarea>
        <button className='save' type='submit'>
          Save
        </button>
      </form>
    </div>
  );
}
