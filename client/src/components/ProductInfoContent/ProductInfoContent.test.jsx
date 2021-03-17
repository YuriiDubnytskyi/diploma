import React from "react";
import ProductInfoContent from "./ProductInfoContent";

const setUp = (props) => shallow(<ProductInfoContent {...props} />);

describe("Test HTML in ProductInfoContent with props", () => {
    it("Should contain info", () => {
        const component = setUp({
            data: {
                images: [],
                name: "Nokia",
                price: "122",
                shortInfo: "Nokia phone",
                producer: "Ukraine",
                info: "Опис",
                properties: [{ property: "Память", value: "125" }],
            },
        });
        expect(component).toMatchSnapshot();
    });
});
