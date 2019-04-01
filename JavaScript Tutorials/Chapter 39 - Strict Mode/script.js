function strictMode()
{
	"use strict";
	a = 5; // This will cause an error (a is not defined).
	document.getElementById("strictMode").innerHTML = a;
}
function strictMode1()
{
	"use strict";
	b = 5; // This will cause an error (b is not defined).
	document.getElementById("strictMode1").innerHTML = b;
}
// Strict Mode Inside A Function
	c = 5; // This will cause an error (d is not defined).
function strictModeInsideFunction()
{
	"use strict";
	d = 8; // This will cause an error (d is not defined).
	document.getElementById("strictModeInsideFunction").innerHTML = "c Is " + c + " " + "d Is " + d;
}
function variableIsNotAllowedInStrictMode()
{
	"use strict";
	e = 5; // This will cause an error (e is not defined) 
	document.getElementById("variableIsNotAllowedInStrictMode").innerHTML = e;
}
function objectsAreNotAllowedInStrictMode()
{
	"use strict";
	f = {firstName:"Syed", lastName:"Bilal"};  // This will cause an error (f is not defined) 
	document.getElementById("objectsAreNotAllowedInStrictMode").innerHTML = f;
}
function objectsAndVariablesAreNotAllowedInStrictMode()
{
	"use strict";
	var g = 5;
	delete g;  // This will cause an error 
	document.getElementById("objectsAndVariablesAreNotAllowedInStrictMode").innerHTML = g;
}
function deletingAFunctionIsNotAllowedInStrictMode()
{
	"use strict";
	function h(a,b){};
	delete h;
	document.getElementById("deletingAFunctionIsNotAllowedInStrictMode").innerHTML = h;
}
function duplicatingAParameterNameIsNotAllowedInStrictMode()
{
	"use strict";
	function i(a,b){};
	document.getElementById("duplicatingAParameterNameIsNotAllowedInStrictMode").innerHTML = i;
}
function octalNumericLiteralsAreNotAllowedInStrictMode()
{
	"use strict";
	var j = 010;
	document.getElementById("octalNumericLiteralsAreNotAllowedInStrictMode").innerHTML = j;
}
function escapeCharactersAreNotAllowedInStrictMode()
{
	"use strict";
	var k = /010;
	document.getElementById("escapeCharactersAreNotAllowedInStrictMode").innerHTML = k;
}
function writingReadOnlyPropertyIsNotAllowedInStrictMode()
{
	"use strict";
	var obj = {};
	Object.defineProperty(obj, "l", {value:0, writable:false});
	obj.l = 3.14;
	document.getElementById("writingReadOnlyPropertyIsNotAllowedInStrictMode").innerHTML = l;
}
function writingGetOnlyPropertyIsNotAllowedInStrictMode()
{
	"use strict";
	var obj = {get m() {return 0}};
	obj.m = 3.14
	document.getElementById("writingGetOnlyPropertyIsNotAllowedInStrictMode").innerHTML = m;
}
function deletingAnUndeletablePropertyIsNotAllowedInStrictMode()
{
	"use strict";
	delete Object.prototype;
}
function stringEvalCannotBeUsedAsAVariable()
{
	"use strict";
	var eval = 3.14
	document.getElementById("stringEvalCannotBeUsedAsAVariable").innerHTML = eval;
}
function stringArgumentsCannotBeUsedAsAVariable()
{
	"use strict";
	var arguments = 3.14;
	document.getElementById("stringArgumentsCannotBeUsedAsAVariable").innerHTML = arguments;
}
function withStatementIsNotAllowed()
{
	"use strict";
	with (Math){n = cos(2)};
	document.getElementById("withStatementIsNotAllowed").innerHTML = n;
}
function evalIsNotAllowedToCreateVariables()
{
	"use strict";
	eval ("var x = 2");
	document.getElementById("evalIsNotAllowedToCreateVariables").innerHTML = alert(x);
}
function usePublicCausesErros()
{
	"use strict";
	var public = 2;
	document.getElementById("usePublicCausesErros").innerHTML = public;
}
