import { getNotes } from "./index";

describe("notes", () => {
  let mockStore;

  describe("getNotes", () => {
    let expectedNotes;

    beforeEach(() => {
      expectedNotes = "expectedNotes";
      mockStore = { responses: { notes: expectedNotes } };
    });

    it("should return state.responses.notes", () => {
      expect(getNotes(mockStore)).toBe(expectedNotes);
    });
  });
});
