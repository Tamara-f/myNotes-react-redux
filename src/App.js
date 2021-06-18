import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import NotesView from './views/NotesView';
import Archive from './components/Archive';

function App() {
  return (
    <>
      <ul className='nav'>
        <li>
          <Link to='/notes'>My notes</Link>
        </li>
        <li>
          <Link to='/archive'>My archive</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/archive'>
          <Archive />
        </Route>

        <Route path='/notes'>
          <NotesView />
        </Route>
        <Route path='/'>
          <NotesView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
