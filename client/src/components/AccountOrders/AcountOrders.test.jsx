import React from "react";
import AccountOrders from "./AccountOrders";

const setUp = (props) => shallow(<AccountOrders {...props} />);

describe("Test AccountOrders with props", () => {
    it("Should contain empty order list", () => {
        const component = setUp({
            data: false,
        });
        expect(component.find(".order-empty").length).toBe(1);
    });
});
