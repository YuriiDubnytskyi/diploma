import React from "react";
import SubTitleItem from "./SubTitleItem";

const setUp = (props) => shallow(<SubTitleItem {...props} />);

describe("Test SubTitleItem with prop", () => {
    it("Should contain sub title link text prop", () => {
        const component = setUp({ productSubTitle: "Телефони" });
        const wrapper = component.find(".sub-item-link").text();
        expect(wrapper).toEqual("Телефони");
    });
});
