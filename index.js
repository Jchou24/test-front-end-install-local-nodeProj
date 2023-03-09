import { Add } from "child/index.js";
import { ChildFunction, MathRound } from "child/childLib.js";
import { RootFunction } from "./rootLib.js";

console.log(Add(1, 2));
console.log(ChildFunction());
console.log(MathRound(3.14152));

console.log("----------------");
console.log(RootFunction());
