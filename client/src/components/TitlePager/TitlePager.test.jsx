import React from "react";
import TitlePager from "./TitlePager";

const setUp = (props) => shallow(<TitlePager {...props} />);

describe("Test TitlePager with prop", () => {
    it("Should contain title text prop", () => {
        const component = setUp({ title: "Hello" });
        const wrapper = component.find(".title-text").text();
        expect(wrapper).toEqual("Hello");
    });
});
