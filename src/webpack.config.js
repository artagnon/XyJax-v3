const PACKAGE = require("mathjax-full/components/webpack.common.js");


module.exports = PACKAGE(
	"xypic",																			// the name of the package to build
	__dirname,																		// path to compiled .js files
	[																							// modules to link
		"mathjax-full/js/core",
		"mathjax-full/js/input/tex",
		"mathjax-full/js/output/chtml",
		"mathjax-full/js/output/svg",
	],
	__dirname,																		// location of our component
	"../build"																		// where to put build artifact
);
