export const UPDATE_LOADING = "containers/noteEditor/UPDATE_LOADING";
export const UPDATE_NOTE = "containers/noteEditor/UPDATE_NOTE";

export const updateLoading = (loading) => ({
  type: UPDATE_LOADING,
  payload: loading,
});

export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  payload: note,
});

const initialState = {
  note: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return { ...state, loading: action.payload };
    case UPDATE_NOTE:
      return { ...state, note: action.payload };
    default:
      return state;
  }
};
