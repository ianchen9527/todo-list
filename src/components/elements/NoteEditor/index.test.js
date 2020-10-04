import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NoteEditor from "./index";
import Button from "../Button";

describe("NoteEditor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NoteEditor />);
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

          describe("props.onTitleChange", () => {
            let onTitleChange, event;
            beforeEach(() => {
              onTitleChange = jest.fn();
              event = { target: { value: "value" } };
              wrapper.setProps({ onTitleChange });
            });

            afterEach(() => {
              onTitleChange.mockClear();
            });

            describe("when .title is changed", () => {
              beforeEach(() => {
                wrapper.find(".title").simulate("change", event);
              });

              it("should be triggered with event.target.value", () => {
                expect(onTitleChange).toHaveBeenCalledWith(event.target.value);
              });
            });
          });

          describe("props.onContentChange", () => {
            let onContentChange, event;
            beforeEach(() => {
              onContentChange = jest.fn();
              event = { target: { value: "value" } };
              wrapper.setProps({ onContentChange });
            });

            afterEach(() => {
              onContentChange.mockClear();
            });

            describe("when .content is changed", () => {
              beforeEach(() => {
                wrapper.find(".content").simulate("change", event);
              });

              it("should be triggered with event.target.value", () => {
                expect(onContentChange).toHaveBeenCalledWith(event.target.value);
              });
            });
          });

          describe("props.onCancelClick", () => {
            let onCancelClick;
            beforeEach(() => {
              onCancelClick = jest.fn();
              wrapper.setProps({ onCancelClick });
            });

            afterEach(() => {
              onCancelClick.mockClear();
            });

            describe("when the first Button is changed", () => {
              beforeEach(() => {
                wrapper.find(Button).at(0).simulate("click");
              });

              it("should be triggered with event.target.value", () => {
                expect(onCancelClick).toHaveBeenCalled();
              });
            });
          });

          describe("props.onSaveClick", () => {
            let onSaveClick;
            beforeEach(() => {
              onSaveClick = jest.fn();
              wrapper.setProps({ onSaveClick });
            });

            afterEach(() => {
              onSaveClick.mockClear();
            });

            describe("when the second Button is changed", () => {
              beforeEach(() => {
                wrapper.find(Button).at(1).simulate("click");
              });

              it("should be triggered with event.target.value", () => {
                expect(onSaveClick).toHaveBeenCalled();
              });
            });
          });

          describe("props.onDeleteClick", () => {
            let onDeleteClick;
            beforeEach(() => {
              onDeleteClick = jest.fn();
              wrapper.setProps({ onDeleteClick });
            });

            afterEach(() => {
              onDeleteClick.mockClear();
            });

            describe("when the third Button is changed", () => {
              beforeEach(() => {
                wrapper.find(Button).at(2).simulate("click");
              });

              it("should be triggered with event.target.value", () => {
                expect(onDeleteClick).toHaveBeenCalled();
              });
            });
          });
        });
      });
    });
  });
});
