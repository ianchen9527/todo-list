import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Button from "./index";

describe("Button", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  describe("default props", () => {
    it("should render without crashing", () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
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

  describe("props.icon", () => {
    let icon;
    describe("is set", () => {
      beforeEach(() => {
        icon = "icon";
        wrapper.setProps({ icon });
      });

      it("should render without crashing", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
    });
  });

  describe("props.text", () => {
    let text;
    describe("is set", () => {
      beforeEach(() => {
        text = "text";
        wrapper.setProps({ text });
      });

      it("should render without crashing", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
      });
    });
  });

  describe("props.onClick", () => {
    let onClick;
    beforeEach(() => {
      onClick = jest.fn();
      wrapper.setProps({ onClick });
    });

    afterEach(() => {
      onClick.mockClear();
    });

    describe("when .wrapper is clicked", () => {
      beforeEach(() => {
        wrapper.find(".wrapper").simulate("click");
      });

      it("should be triggered", () => {
        expect(onClick).toHaveBeenCalled();
      });
    });
  });
});
