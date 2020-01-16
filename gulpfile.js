const { series, parallel, dest, src, gulp, watch } = require("gulp");

const rollup = require("gulp-better-rollup");

function buildJs() {
    let source = "src/index.js";
    let destination = "dist/";

    return src(source)
        .pipe(rollup({}, { format: "cjs" }))
        .pipe(dest(destination));
    
}

exports.build = buildJs;