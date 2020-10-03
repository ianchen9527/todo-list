export const UPDATE_LOADING = "noteIncreaser/UPDATE_LOADING";

export const updateLoading = (loading) => ({
  type: UPDATE_LOADING,
  payload: loading,
});

const initialState = { loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
