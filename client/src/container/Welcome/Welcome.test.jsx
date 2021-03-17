import React from "react";
import Welcome from "./Welcome";
import { BrowserRouter } from "react-router-dom";

describe("Test HTML in Welcome", () => {
    it("Should contain four main section", () => {
        let component = shallow(<Welcome />);
        const wrapper1 = component.find(".welcome__about");
        const wrapper2 = component.find(".welcome__shop");
        const wrapper3 = component.find(".welcome__options");
        const wrapper4 = component.find(".welcome__partners");
        expect(wrapper1.length).toBe(1);
        expect(wrapper2.length).toBe(1);
        expect(wrapper3.length).toBe(1);
        expect(wrapper4.length).toBe(1);
    });

    it("Should contain four logos img partners", () => {
        let component = shallow(<Welcome />);
        const wrapper1 = component.find(".welcome__partners-img");
        expect(wrapper1.length).toBe(4);
    });
});
