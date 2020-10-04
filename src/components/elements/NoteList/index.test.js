import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NoteList from "./index";

describe("NoteList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NoteList />);
  });

  describe("default props", () => {
    it("should render without crashing", () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });

  describe("props.loading", () => {
    let loading;
    describe("is true", () => {
      beforeEach(() => {
        loading = true;
        wrapper.setProps({ loading });
      });

      it("should render without crashing", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
    });

    describe("is false", () => {
      beforeEach(() => {
        loading = false;
        wrapper.setProps({ loading });
      });

      it("should render without crashing", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
      });

      describe("props.notes", () => {
        let notes;
        describe("is an empty array", () => {
          beforeEach(() => {
            notes = [];
            wrapper.setProps({ notes });
          });

          it("should render without crashing", () => {
            expect(toJSON(wrapper)).toMatchSnapshot();
          });
        });

        describe("is not an empty array", () => {
          beforeEach(() => {
            notes = [
              { id: 1, title: "title 1" },
              { id: 2, title: "title 2" },
              { id: 3, title: "title 3" },
            ];
            wrapper.setProps({ notes });
          });

          it("should render without crashing", () => {
            expect(toJSON(wrapper)).toMatchSnapshot();
          });

          describe("props.onNoteClick", () => {
            let onNoteClick, random;
            beforeEach(() => {
              onNoteClick = jest.fn();
              random = Math.floor(Math.random() * notes.length);
              wrapper.setProps({ onNoteClick });
            });

            afterEach(() => {
              onNoteClick.mockClear();
            });

            describe("when any of .note-wrapper is changed", () => {
              beforeEach(() => {
                wrapper.find(".note-wrapper").at(random).simulate("click");
              });

              it("should be triggered with correspond id", () => {
                expect(onNoteClick).toHaveBeenCalledWith(notes[random].id);
              });
            });
          });
        });
      });
    });
  });
});
