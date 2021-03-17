import React from "react";
import BillingForm from "./BillingForm";

const setUp = (props) => shallow(<BillingForm {...props} />);

describe("Test HTML in BillingForm", () => {
    it("Should contain input fields and error", () => {
        const component = setUp({ error: "Error" });
        expect(component.find(".input").length).toBe(7);
        expect(component.find(".billing-error").length).toBe(1);
    });
});
