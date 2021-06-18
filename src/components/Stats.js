import { useSelector } from 'react-redux';

const Stats = () => {
  const notes = useSelector(state => state.items);

  const taskArchNotes = notes.filter(
    item => item.archived && item.category === 'Task'
  ).length;
  const taskActiveNotes = notes.filter(
    item => !item.archived && item.category === 'Task'
  ).length;
  const randomArchNotes = notes.filter(
    item => item.archived && item.category === 'Random Though'
  ).length;
  const randomActiveNotes = notes.filter(
    item => !item.archived && item.category === 'Random Though'
  ).length;
  const ideaArchNotes = notes.filter(
    item => item.archived && item.category === 'Idea'
  ).length;
  const ideaActiveNotes = notes.filter(
    item => !item.archived && item.category === 'Idea'
  ).length;

  return (
    <div>
      <ul className='stats'>
        <li key='task'>
          <p>Task</p>
          <p>{taskActiveNotes}</p>
          <p>{taskArchNotes}</p>
        </li>
        <li key='random'>
          <p>Random Though</p>
          <p>{randomActiveNotes}</p>
          <p>{randomArchNotes}</p>
        </li>
        <li key='idea'>
          <p>Idea</p>
          <p>{ideaActiveNotes}</p>
          <p>{ideaArchNotes}</p>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
