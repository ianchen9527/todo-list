import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NoteViewer from "./index";
import Button from "../Button";

describe("NoteViewer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NoteViewer />);
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

      describe("props.note", () => {
        let note;
        describe("is set", () => {
          beforeEach(() => {
            note = { id: 123, title: "title", content: "content" };
            wrapper.setProps({ note });
          });

          it("should render without crashing", () => {
            expect(toJSON(wrapper)).toMatchSnapshot();
          });

          describe("props.onEditClick", () => {
            let onEditClick, event;
            beforeEach(() => {
              onEditClick = jest.fn();
              wrapper.setProps({ onEditClick });
            });

            afterEach(() => {
              onEditClick.mockClear();
            });

            describe("when .title is clicked", () => {
              beforeEach(() => {
                wrapper.find(Button).simulate("click");
              });

              it("should be triggered", () => {
                expect(onEditClick).toHaveBeenCalled();
              });
            });
          });
        });
      });
    });
  });
});
