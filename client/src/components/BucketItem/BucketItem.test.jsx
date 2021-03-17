import React from "react";
import BucketItem from "./BucketItem";

const setUp = (props) => shallow(<BucketItem {...props} />);

describe("Test HTML in BucketItem", () => {
    it("Should contain BucketItem with props", () => {
        const component = setUp({ name: "Nokia", price: "777", count: "3" });
        expect(component.find(".item-bucket__title").text()).toEqual("Назва товару - Nokia");
        expect(component.find(".item-bucket__price").text()).toEqual("Ціна - 777");
        expect(component.find(".btn-bucket").at(1).text()).toEqual("3");
        expect(component).toMatchSnapshot();
    });
});
