import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './noteActions';
import initialState from './initialState.json';

const items = createReducer(initialState, {
  [actions.addNote]: (state, { payload }) => [...state, payload],
  [actions.editNote]: (state, { payload }) =>
    state.map(note => (note.id === payload.id ? payload : note)),
  [actions.deleteNote]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.toggleArchived]: (state, { payload }) =>
    state.map(note =>
      note.id === payload ? { ...note, archived: !note.archived } : note
    ),
});

export default combineReducers({
  items,
});
