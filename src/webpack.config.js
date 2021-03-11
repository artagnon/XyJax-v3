const PACKAGE = require("mathjax-full/components/webpack.common.js");


module.exports = PACKAGE(
	"xypic",								// the name of the package to build
	__dirname,								// our directory
	[										// packages to link to
		"components/src/core/lib",
		"components/src/input/tex-base/lib",
		"components/src/output/chtml/lib",
		"components/src/output/svg/lib",
	],
	"../build/"								// where to put the packaged component
);
