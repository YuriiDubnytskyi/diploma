import React from "react";
import AccountSwitchBox from "./AccountSwitchBox";

const setUp = (props) => shallow(<AccountSwitchBox {...props} />);

describe("Test HTML in AccountSwitchBox", () => {
    it("Should contain paragraph with props values", () => {
        const component = setUp();
        expect(component.find(".content-btn").length).toBe(3);
    });
});
