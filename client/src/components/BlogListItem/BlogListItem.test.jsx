import React from "react";
import BlogListItem from "./BlogListItem";

const setUp = (props) => shallow(<BlogListItem {...props} />);

describe("Test HTML in BlogListItem", () => {
    it("Should contain title, description", () => {
        const component = setUp({ title: "News", description: "Desc" });
        expect(component).toMatchSnapshot();
    });
});
