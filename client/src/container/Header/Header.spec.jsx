import React from "react";
import Header from "./Header";
import * as reactRedux from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Test Header with auth", () => {
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });

    it("Should contain render with auth false ", () => {
        useSelectorMock.mockReturnValue(false);
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch);

        let component = mount(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(component).toMatchSnapshot();
        expect(component.find("a.auth-login").length).toBe(1);
        expect(component.find("a.auth-sign").length).toBe(1);
        expect(component.find("div.auth__links").length).toBe(1);
    });

    it("Should contain render with auth true ", () => {
        useSelectorMock.mockReturnValue(true);
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch);

        let component = mount(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(component).toMatchSnapshot();
        expect(component.find("a.auth-account").length).toBe(1);
        expect(component.find("a.side-auth-logout").length).toBe(1);
        expect(component.find("a.side-auth-account").length).toBe(1);
    });

    it("Should contain render with backdrop ", () => {
        useSelectorMock.mockReturnValue(false);
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch);

        let component = mount(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        component.find("div.content-top__menu").simulate("click");
        expect(component).toMatchSnapshot();
        expect(component.find("div.backdrop").length).toBe(1);
    });

    it("Should contain render with input change in ButtonHeader", () => {
        useSelectorMock.mockReturnValue(false);
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch);

        let component = mount(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        component.find(".btns-container__input").simulate("change", { target: { value: "Hello" } });
        expect(component.find(".btns-container__input").props().value).toEqual("Hello");
    });

    it("Should contain render with input change in SideDrawer", () => {
        useSelectorMock.mockReturnValue(false);
        const dummyDispatch = jest.fn();
        useDispatchMock.mockReturnValue(dummyDispatch);

        let component = mount(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        component.find(".side-drawer__input").simulate("change", { target: { value: "Nokia" } });
        expect(component.find(".btns-container__input").props().value).toEqual("Nokia");
    });
});
