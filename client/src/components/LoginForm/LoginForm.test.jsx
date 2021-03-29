import React from "react";
import LoginForm from "./LoginForm";

const setUp = (props) => shallow(<LoginForm {...props} />);

describe("Test HTML in LoginForm", () => {
    it("Should contain seven input fields", () => {
        const component = setUp({ user: { success: false } });
        expect(component.find(".input").length).toBe(7);
    });
});
