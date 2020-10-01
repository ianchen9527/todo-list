export const UPDATE_NOTES = `${__filename}/UPDATE_NOTES`;

export const updateNotes = (notes) => ({ type: UPDATE_NOTES, payload: notes });

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_NOTES:
      return action.payload;
    default:
      return state;
  }
};
