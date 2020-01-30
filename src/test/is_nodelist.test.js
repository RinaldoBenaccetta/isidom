
import * as mod from "../tools/is_nodelist.js";

describe('nodelist', () => {
    test('is nodelist', () => {
        let nodeList = document.querySelectorAll('div');
        expect(mod.$isNodeList(nodeList)).toBe(true);
    });

    test("is not an htmlCollection", () => {
        let htmlCollection = document.getElementsByTagName("div");
        expect(mod.$isNodeList(htmlCollection)).toBe(false);
    });
});