const esmImport = require("esm")(module);
const mod = esmImport("../tools/is_nodelist.js");

test("expect nodeList to be nodelist", () => {
    document.body.innerHTML = '<div id="test"><div class="panel-block"></div>Hello</div></div>....</div>'
    var nodeList = document.querySelectorAll("div");
    expect(mod.$isNodeList(nodeList)).toBe(true);
});

test("expect htmlCollection not to be nodelist", () => {
    document.body.innerHTML = '<div id="test"><div class="panel-block"></div>Hello</div></div>....</div>'
    var htmlCollection = document.getElementsByTagName("div")
    expect(mod.$isNodeList(htmlCollection)).toBe(false);
});