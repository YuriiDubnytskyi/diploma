import React from "react";
import CallbackPageForm from "./CallbackPageForm";

const setUp = (props) => shallow(<CallbackPageForm {...props} />);

describe("Test HTML in CallbackPageForm with props", () => {
    it("Should contain input fields and error", () => {
        const component = setUp({ err: true });
        expect(component.find(".input").length).toBe(3);
        expect(component.find(".login-error").length).toBe(1);
    });
});
