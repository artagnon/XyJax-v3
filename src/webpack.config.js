const PACKAGE = require("mathjax-full/components/webpack.common.js");


module.exports = PACKAGE(
	"xypic",									// the name of the package to build
	__dirname,								// our directory
	[													// packages to link to
		"mathjax-full/js/components/core",
		"mathjax-full/js/components/input/tex",
		"mathjax-full/js/components/output/chtml",
		"mathjax-full/js/components/output/svg",
	],
	__dirname,								// directory of the component being built
	"../build"								// where to place the build artifact
);
