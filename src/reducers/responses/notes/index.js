export const UPDATE_NOTES = `${__filename}/UPDATE_NOTES`;

export const updateNotes = (notes) => ({ type: UPDATE_NOTES, payload: notes });

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTES:
      return action.payload;
    default:
      return state;
  }
};
