import React from "react";
import CategoriTitleItem from "./CategoriTitleItem";

const setUp = (props) => shallow(<CategoriTitleItem {...props} />);

describe("Test CategoriTitleItem with prop", () => {
    it("Should contain title link text prop", () => {
        const component = setUp({ productTitle: "Смартфони" });
        const wrapper = component.find(".categories-item-link").text();
        expect(wrapper).toEqual("Смартфони");
    });
});
