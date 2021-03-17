import React from "react";
import AccountInfo from "./AccountInfo";

const setUp = (props) => shallow(<AccountInfo {...props} />);

describe("Test AccountInfo with props", () => {
    it("Should contain paragraph with props values", () => {
        const component = setUp({
            email: "yur.d@gmail.com",
            name: "Yur",
            surname: "Dub",
            gender: "",
            age: "22",
            phone: "087516145",
        });
        expect(component.find(".info-item").at(0).text()).toEqual("Імя : Yur");
        expect(component.find(".info-item").at(2).text()).toEqual("Пошта : yur.d@gmail.com");
        expect(component.find(".info-item").at(3).text()).toEqual("Вік : 22");
        expect(component.find(".info-item").at(4).text()).toEqual("Телефон : 087516145");
    });
});
