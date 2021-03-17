import React from "react";
import WelcomeOptions from "./WelcomeOptions";

describe("Test HTML WelcomeOptions", () => {
    it("Should contain four options", () => {
        const component = shallow(<WelcomeOptions />);
        expect(component.find(".option-item").length).toBe(4);
    });
});
