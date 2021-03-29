import React from "react";
import AccountSettings from "./AccountSettings";

const setUp = (props) => shallow(<AccountSettings {...props} />);

describe("Test AccountSettings with props", () => {
    it("Should contain .settings-box and .setting-box-options", () => {
        const component = setUp();
        expect(component.find(".settings-box").length).toBe(1);
        expect(component.find(".setting-box-options").length).toBe(1);
    });

    it("Should contain .email-support-text if verify true", () => {
        const component = setUp({ emailVerify: true });
        expect(component.find(".email-support-text").length).toBe(1);
    });

    it("Should contain .email-support-send if we send email", () => {
        const component = setUp({ emailVerify: false, sendEmail: true });
        expect(component.find(".email-support-send").length).toBe(1);
    });
});
