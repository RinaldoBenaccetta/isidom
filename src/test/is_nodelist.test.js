import * as mod from "../tools/is_nodelist.js";

describe('is_nodelist', () => {
    describe("given a nodeList", () => {
        test("is nodelist", () => {
            let nodeList = document.querySelectorAll("div");
            expect(mod.$isNodeList(nodeList)).toBeTruthy();
        });
    });

    describe("given an htmlCollection", () => {
        test("is not a nodeList", () => {
            let htmlCollection = document.getElementsByTagName("div");
            expect(mod.$isNodeList(htmlCollection)).toBeFalsy();
        });
    });
});