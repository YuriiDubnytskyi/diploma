import React from "react";
import ContactUsForm from "./ContactUsForm";

const setUp = (props) => shallow(<ContactUsForm {...props} />);

describe("Test HTML in Conact Form", () => {
    it("Should contain four input fields", () => {
        const component = setUp();
        const wrapper = component.find(".input");
        expect(wrapper.length).toBe(4);
    });

    it("Contact Form without error or success", () => {
        const component = setUp({ success: "", err: "" });
        expect(component).toMatchSnapshot();
    });

    it("Should contain .contact-info-success", () => {
        const component = setUp({ success: "Success" });
        const wrapper = component.find(".contact-info-success");
        expect(wrapper.length).toBe(1);
    });

    it("Should contain .contact-info-error", () => {
        const component = setUp({ err: "Error" });
        const wrapper = component.find(".contact-info-error");
        expect(wrapper.length).toBe(1);
    });
});
