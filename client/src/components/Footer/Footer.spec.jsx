import React from "react";
import Footer from "./Footer";

const setUp = () => shallow(<Footer />);

describe("Test HTML in Footer", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it("Should contain .title-footer", () => {
        const wrapper = component.find(".title-footer");
        expect(wrapper.length).toBe(1);
    });
});
