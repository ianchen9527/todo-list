import { testSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { getNotes as getNotesFromResponse } from "../../selectors/responses/notes";
import apis from "../../apis";
import { decrypt, encrypt } from "../../utils/encrypt";
import {
  sagaFetchNotes,
  sagaSaveNotes,
  sagaDeleteNote,
} from "./index";

describe("sagaFetchNotes", () => {
  let mockNotes;
  describe("note.length > 0", () => {
    beforeEach(() => {
      mockNotes = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ];
    });

    it("should run correctly", () => {
      testSaga(sagaFetchNotes)
        .next()
        .select(getNotesFromResponse)
        .next(mockNotes)
        .isDone();
    });
  });

  describe("note.length === 0", () => {
    beforeEach(() => {
      mockNotes = [
        { id: 1, content: "content 1" },
        { id: 2, content: "content 2"  },
        { id: 3, content: "content 3"  },
      ];
    });

    it("should run correctly", () => {
      testSaga(sagaFetchNotes)
        .next()
        .select(getNotesFromResponse)
        .next([])
        .call(apis.fetchNotes)
        .next(mockNotes)
        .all(mockNotes.map((note) => call(decrypt, note.content)))
        .next(mockNotes.map((note) => note.content))
        .isDone();
    });
  });
});

describe("sagaSaveNotes", () => {
  let mockNotes, mockNote, expectedNotes;
  beforeEach(() => {
    mockNotes = [
      { id: 1, content: "content 1" },
      { id: 2, content: "content 2"  },
      { id: 3, content: "content 3"  },
    ];
    mockNote = { id: 2, content: "content 4"};
    expectedNotes = [mockNotes[0], mockNote, mockNotes[2]];
  });

  it("should run correctly", () => {
    testSaga(sagaSaveNotes, mockNote)
      .next()
      .select(getNotesFromResponse)
      .next(mockNotes)
      .call(encrypt, mockNote.content)
      .next(mockNote.content)
      .call(apis.saveNotes, expectedNotes)
      .next()
      .isDone();
  });
});