import React from 'react';
import { useSelector } from 'react-redux';
import NoteList from './NoteList';
import Table from './Table';
const head = ['name', 'created', 'category', 'content', 'dates', 'edit'];

const Archive = () => {
  const notes = useSelector(state => state.items.filter(item => item.archived));

  return (
    <>
      <Table data={head}>
        <div className='archive'>
          <NoteList notes={notes} isArchive='true' />
        </div>
      </Table>
    </>
  );
};

export default Archive;
