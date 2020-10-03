export default {
  HOME: () => "/",
  NOTES: () => "/notes",
  NOTE: (id = ":id") => `/notes/${id}`,
  NOTE_EDIT: (id = ":id") => `/notes/${id}/edit`
};
