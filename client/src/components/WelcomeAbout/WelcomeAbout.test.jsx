import React from "react";
import WelcomeAbout from "./WelcomeAbout";

describe("Test HTML WelcomeAbout", () => {
    it("Should contain .shop-about__img", () => {
        const component = shallow(<WelcomeAbout />);
        expect(component.find(".shop-about__img").length).toBe(1);
    });
});
