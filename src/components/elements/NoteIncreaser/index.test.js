import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NoteIncreaser from "./index";
import Button from "../Button";

describe("NoteIncreaser", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NoteIncreaser />);
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
    });
  });

  describe("props.disabled", () => {
    let disabled;
    describe("is true", () => {
      beforeEach(() => {
        disabled = true;
        wrapper.setProps({ disabled });
      });

      it("should render without crashing", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
    });

    describe("is false", () => {
      beforeEach(() => {
        disabled = false;
        wrapper.setProps({ disabled });
      });

      it("should render without crashing", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
    });
  });

  describe("props.onClick", () => {
    let onClick;
    describe("is set", () => {
      beforeEach(() => {
        onClick = jest.fn();
        wrapper.setProps({ onClick });
      });

      it("should be passed to the Button", () => {
        wrapper.find(Button).props().onClick();
        expect(onClick).toHaveBeenCalled();
      });
    });
  });
});
