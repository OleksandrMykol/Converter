// "use strict";strogiy regim
// API REST
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// ?ASYNCHRONOUS,jQuery|jQuery-AJAX,asynchronous-function,callback,promise,async|await,...
var vaR = 1.01;
let vaiable = "string";
let number = "num11.5";
const constanta = "constanta";
const apiUrl = fetch("https://api.exchangerate-api.com/v4/latest/USD");
fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then((response) => response.json())
constanta.match(/s/);
console.log(vaR instanceof test);
console.log(vaR instanceof Number);
// !console.log(vaR instanceof Template);
//?Number.constanta
//?parseInt(constanta);NAN
//?parseInt('101constanta');101

// jQueyAJAX must download file jquery.com
// $("button").click(function () {
//   $("#div1").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
//     if (statusTxt == "success") alert("External content loaded successfully!");
//     if (statusTxt == "error")
//       alert("Error: " + xhr.status + ": " + xhr.statusText);
//   });
// });
let AJAX = setTimeout(nameFnc, 5000);
function nameFnc() {
  console.log("Asynhronous code to request browser api data");
}
// let AJAX=setTimeout(()=>{console.log("Asynhronous code to request browser api data");},5000);
// let ajax = setInterval(() => {
//   console.log("setInterval");
// }, 6000);
// !var globalVar = 12.2;
// console.log(globalVar);
// prompt("converter");
// no working -const lasyBundle = await import("/js/sometestimportawait.js");
//??(if default declarated true) NULL/UNDEFINED || "" || 0  || false  || null
//!||+??+&&
// let varNull = null;//null/undefined
// let varNull = "declarated/initialized";
// alert(varNull ?? "null/undefined");
//?SWITCH
// let AlertPromrtCconfirmWindow = confirm("Are you sure?");
// let AlertPromrtCconfirmWindow = prompt("enter somebody TYPE or value",'textarea');
// switch (AlertPromrtCconfirmWindow) {
//   case true:
//   case "ok":
//   case "1":
//   case "string":
//     alert('value "ok"');
//     break;
//   default:
//     alert("default");
//     break;
//   case false:
//     alert("bool");
//     break;
// }
// ?CALLBACKS
clbHell(cat());
clbHell(nameCallBackA, nameCallBackB);
function nameCallBackA(massa, callbackAsFnc) {
  console.log(`"nameCallBackA"${massa}`);
  ///???callbackAsFnc();
  // return callbackAsFnc();
  // !callbackAsFnc();
  nameCallBackB(callbackAsFnc);
}
function nameCallBackB() {
  console.log("textCallBackFunction");
}
console.log(nameCallBackA("argumentClB", nameCallBackB));
// console.log(nameCallBackA(nameCallBackA, nameCallBackB));
// console.log(nameCallBackA(" argumentWTFcAllback", nameCallBackB));
//
function clbHell(task, calback) {
  console.log("clbHell");
  setTimeout(() => {
    console.log(`finished ${task}`);
    // calback(somebodyFUNC);
    calback();
  }, 2000);
}
////clbHell(task, calback);
// clbHell("task", nameCallBackB);
clbHell("texttask1", function () {
  clbHell("texttask2", function () {
    clbHell("texttask3", function () {
      console.log("text CallbakHell");
    });
  });
});
// setTimeout(() => alert("setTimeout"), 5000);
function clbHell(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`finished ${task}`);
      resolve();
    }, 500);
  });
}
clbHell("taskPromis1")
  .then(() => clbHell("taskPromis2"))
  .then(() => clbHell("taskPromis3"))
  .then(() => console.log("All task complited CallbakHell"));
//! .catch((error) => console.error("Error", error));
//?ASYNC|AWAIT===HELP WRITE-TO-PROMISE
async function asyFnc() {
  10 > 5 ? console.log("true") : console.log("false");
  // (await 10) > 5 ? console.log("true") : console.log("false"); //await' has no effect on the type of this expression
  console.log("asyFnc");
}
//?new Function GLOBAL ENVIRONMENT not outher environment
let nwf = new Function("argna", "argnn", "return argna+argnn");
// ?PROMISES - objects that links producing & consuming code
//?PRODUCING|CREATOR CODE
console.log("firstStepPromiseExecuted");
Promise.resolve("pRoMiSeVaLuE").then((result) => console.log(result));
console.log("secondStepPromiseExecuted");
Promise.resolve("promiseValue").then(console.log);
new Promise((resolve, _) => resolve("promiseValueRV")).then(console.log);
new Promise((_, reject) => reject("rejectValueRJ")).catch(console.log);
console.log("thirdStepPromiseExecuted");
//
let myPromise = new Promise(function (myResolve, myReject) {
  let vPc = 11.1;
  if (vPc > 111) {
    myResolve("YES PRODUCED SUCCESFUL PROMISE");
  } else {
    myReject("no produced promise(error?)");
  }
});
// myPromise.then(
//   function (value) {
//     console.log(value);
//     /* code if successful */
//   },
//   function (error) {
//     console.log(error);
//     /* code if error*/
//   }
// );
myPromise.finally(() => {
  console.log("finally");
});
myPromise.catch(() => {
  console.log("CATCHerror");
});
myPromise.then(() => {
  console.log("CHAInTHEN");
  console.trace(object);
});
myPromise.then(() => {
  console.log("CHAInTHEN");
});
myPromise.catch((error) => {
  console.log("CHAInTHEN");
  console.log(error);
});
let promise = new Promise(function (resolve, reject) {
  // ця функція виконається автоматично при виклику new Promise

  // через 1 секунду сигналізувати, що завдання виконано з результатом "done"
  setTimeout(() => resolve("argument to resolve"), 1000);
  setTimeout(() => reject("error"), 1000);
  // reject(10 > 5 ? console.log("true") : console.log("false"));
  // resolve(10 > 5 ? console.log("true") : console.log("false"));
});
let somaray = ["arrfirst", 7, "arrsecond", 8, "arrthird", 9];

promise
  // .then(function (result) {
  .finally(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // .then((response) => response.json())
  // .then((json) => console.log(json))
  // .catch((error) => console.log("error", error));
  .finally(() => console.log("finally"));
// .catch((error) => console.log("error", error));
// .finally(() => console.log("finally"));
// .catch((error) => console.log("error", error));
// .finally(() => console.log("finally"));
// .catch((error) => console.log("error", error));
// new Promise((resolve, reject) => {
//   someAsynchronousWork((result, error) => {
//     if (error) {
//       reject(error);
//       return;
//     }
//     resolve(result);
//   });
// });
// let icr = (pa) => {
let increment = (pa) => {
  // function increment(pa) {
  console.log(`incrementt: ${pa}`);
  // return pa + 1;
  // return pa;
  // return ++pa;
  // return pa++;
};
// Promise.resolve().then(() => console.log("Promise.resolve"));
Promise.resolve(3).then(increment).then(increment).then(increment);
Promise.resolve(2.2).then(increment).then(console.log);
Promise.reject(`value` + ` error`).catch(increment);
Promise.reject(13).catch(console.log);
// Promise.reject();
increment();
increment();
let pomilka;
// Відловлються помилки catch sapytiv na server otrimanya data sminenix i t.d.
try {
  // increment();
  // test()
  // prompt(`TRY$`);
  //nosintaxNodata;//? step one
  // JSON.parse(`{"error": "true"}`);
  pomilka = JSON.parse(`{"{}`);
  // console.log(JSON.parse(`{"{}`));
} catch (error) {
  pomilka = { poymalo: "catch" };
  // alert(console.log(error,));
  // alert(console.dir(error,));
  // alert(console.log(error,pomilka));
  // alert(error);
  // prompt("catch");
} finally {
  // let prmt = prompt("finally AFTER RETURN", 5);
  let nul = null;
  // /* String==Number*/ 4 < 5 ? alert(`true=${prmt}`) : alert(`alert${prmt}`);
  // ("test" + 3).length > 5 ? alert("true") : alert("false");
  // confirm(`wwid = ${prmt}`);
  // if (confirm("Pidte?")) {
    // nul = prompt(`enter ${somaray}`);
    // alert("Pidte");
  // } else {
    // alert("Nepidte");
  // }
}
//??|||||||||||||||||||||||||||
async function yopt() {
  let ass = await Promise.resolve(11);
  // let ass = Promise.resolve(11);
  console.log(ass);
  // let suka = 23;
  // return suka
}
// console.log(yopt());
// let zopa = yopt();
// console.log(zopa);
yopt().then();
//?
fncHoistingB(1.5);
fncHoisting(1, 2);
function fncHoisting(parFHA, parFHB) {
  let sumFHoisting = parFHA + parFHB; //sumFHoisting' is declared but its value is never read
  console.log("sumFHoisting");
  console.log(sumFHoisting);
  globalVar = 13.3; // !автоматично стає глобальною якщо "var" не написано,undeclared variable Не задекларована
  // return parFHA + parFHB;
  function closure() {
    let cli = "close ";
    console.log("closure");
    let sumClosure = cli + sumFHoisting + " " + globalVar;
    return sumClosure;
    // closure();maximum call stack size exceeded
  }
  return closure();
}

//?
function alertFnc(identificator) {
  return () => {
    console.log(identificator);
  };
}
const alertFncB = alertFnc("out argument identificator");
alertFncB();
const af = () => (2 > 1 ? "comparisonTrue" : "comparisonFalse");
af();
let cal = af();
//?
document.getElementById("result").onclick = clickToInnerEl(29);
function clickToInnerEl(parsize) {
  return function () {
    //! document.querySelectorAll("section").style.fontSize = `${parsize}px`;
    // document.body.style.fontSize = `${parsize}px`;
    // document.body.children[2].style.fontSize = `${parsize}px`;
    document.body.children[2].style.backgroundColor = "blue";
  };
}
//!DATA TYPES|TYPE CONVERSION

// //?primitive types,object this colection whit all primitive types & complex data types
// //?string
// //?number
// //?boolean
// //?null
// //?undefined
// //?symbol
//?bigint
//?TYPE CONVERSION
// alert(2 + 3 + "5"); //55
// alert(10 > 9); //true
// alert(10 > 9 + 100); //true
// alert(10 > 9.9); //true
//?string form? (?🥴data types🥴?)
let value = true;
// console.log(typeof value);//'boolean'
value = String; //ƒ String() { [native code] }
value = String(value); //'function String() { [native code] }'
//alert(typeof value)//string
let numberr = "123number";
let nan = Number(numberr); //NaN
parseInt(numberr); //123
Boolean("logicalType"); //true
Boolean(""); //false
Boolean("0"); //true
//!SYMBOL hat only unique value and is used for keys: string|symbol,SYMBOL===primitive unique value
// let sym = Symbol("myUniqueSymbol");
// ///!let sym = Symbol(myUniqueSymbol);
// let sym = Symbol.for("myUniqueSymbol");
// let sym = Symbol("1");
let sym = Symbol(1);
let sym1 = Symbol(1);
let sym2 = Symbol(1);
console.log(sym);
console.log(sym1 === sym2);
console.log(sym.toString("typeofabrrr"));
// alert(sym);Cannot convert a Symbol value to a string
let globalvalue = Symbol.for("globalvalue");
let globalvalue1 = Symbol.for("globalvalue");
let globalvalue2 = Symbol.for("global/key");
let globalvalue3 = Symbol("global/key");
console.log(globalvalue === globalvalue1);
console.log(globalvalue === globalvalue2);
console.log(Symbol.keyFor(globalvalue3)); //undefined
console.log(globalvalue3.description); //global/key
console.log(globalvalue3); //Symbol(global/key)
//?[Symbol.toPrimitive](hint){}HTIS PROPERTY WORKING AS FUNCTION & CONVERTS OBJECT TO PRIMITIVE VALUE,argument (hint)==='stringTYPE'prompt,second prompt:number&default
//? let sumobject = obj + objArr;//string
let primitiveValueLess = {};
//alert(+primitiveValueLess);//NaN
//alert(`${primitiveValueLess}`);//[object Object];
//alert(primitiveValueLess+"");
typeof primitiveValueLess.toString(); //'string'
typeof primitiveValueLess.valueOf(); //'object'
let syntaxStP = {
  keytoPrimitiveA: "valuofkeyA",
  keytoPrimitiveB: "valuofkeyB",
  keytoPrimitiveC: "valuofkeyC",
  // [Symbol.toPrimitive](hint) {};
  //!(if not)Symbol.toPrimitive!===(else convert to)toString()/valueOf()
  [Symbol.toPrimitive](hint) {
    if (hint === "numbertype") {
      return 13.14;
    }
    if (hint === "stringtype") {
      return "string-value";
    }
    if (hint === "defaulttype") {
      return this.keytoPrimitiveA;
    }
    return hint;
    // return true;
  },
  toString() {
    test();
    // return this.keytoPrimitiveA;
    // return "string-value";
    // return 3.14;
    // return "3.14";
    // console.log(`${syntaxStP}`);
  },
  valueOf() {
    test();
    return 3.14;
  },
};
// alert(syntaxStP+'');
// alert(`${syntaxStP}`)
// alert(syntaxStP+1);
// alert(+syntaxStP);
///?obj.valueOf();
//?let   = closure();
//?LOGICAL OPERATORS || && ! ?? ;
// let or = true || false;
let or = 1 || "";
if (0 !== 1 && 1 < 2) {
  // alert(NaN || null || undefined || this || false || 0 || Boolean || 1 || 0);
  // alert(NaN ?? null ?? undefined ?? this ?? false ?? 0 ?? Boolean ?? 1 ?? 0);
  // obj?.age
  // alert(false &&(0==1 || 1==1 || 2==2));false
  // alert(Boolean(0 == 1 || 1 == 1 || 2 == 2)); //true
}
// alert(1 && "falsyvalue" && 1 && 1);
//?Ternary Operator: condition:? true : false
//?:SWITCH STATEMENT
//?CONDITIONAL EXPRESSION

//?CLASS
class Template {
  static propertyField = "declaration";
  // _protectedProperty = "nochangevalue";
  _protectedProperty = 1;
  #privateProperty = "privatproperty";
  // /**
  //  * @param {any} tru
  //  */
  set protectedProperty(tru) {
    tru = 23;
    this._protectedProperty = true;
  }
  instance = "instance";
  instance2 = "instance2";
  instance3;
  nesminnaVlastivis = "instanse/variable";
  doInicialisacii = "clasu";
  constructor(TemplateForResultA, TemplateForResultB) {
    // this.TemplateForResultA = TemplateForResultA;
    this.somebodyObjectPropertyA = TemplateForResultA;
    // this.TemplateForResultB = TemplateForResultB;
    this.somebodyObjectPropertyB = TemplateForResultB;
  }
  _methodClasu() {
    alert("metodClasu");
    ///// console.log(this.svoistwo);
  }
  metodFunctija() {
    alert("metodFunctija");
  }
}
// alert(Template.prototype.methodClasu);
let clasprot = Template.prototype._methodClasu;
const exemplyar = new Template(null, {});
let template = new Template(0.3, 1.2);
let template1 = new Template(1.2, 4.4);
let template2 = new Template(0.4, 2.6);
console.log(template + template1 + template2);
console.log(template, template1, template2);
let lety = template.somebodyObjectPropertyA;
let protect = new Template();
// let pr = (protect._protectedProperty = '???');
let pr = (protect._protectedProperty = 2553);
typeof Template;
let KlassExpression = class NamedClass {
  constructor() {
    // super();
    alert("this is KlassExpression");
  }
};
// new KlassExpression();
////clasprot._methodClasu();

//?
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// const myCar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = myCar.show();
class Animal {
  // propertyField = "propertyField";
  constructor(name, species) {
    this.nameName = name;
    this.speciesSpecies = species;
  }

  sayName() {
    // Animal.prototype.sayName = function () {console.log(this.name);}
    console.log(this.name);
  }
  ["computed" + "method"]() {
    alert("ComputedMethod");
  }
  get propertyField() {
    // return this._propertyField;
    alert("Getter");
  }
  set propertyField(value) {
    this.propertyField = value.toUpperCase();
    alert("Setter");
  }
}
//? new Animal().computedmethod();
Animal.prototype.addedNewPpropertyOnlyToConstructor =
  "addedNewPpropertyOnlyToConstructor";
const Doggie = new Animal("Jeff", "Dog");
const constructorr = new Animal("bober", "kurva");
//?inheritance
class Dog extends Animal {
  constructor(name, species) {
    super(name, species);
  }
}
// Dog.prototype.sayName = function () {//?sho popalo
//   alert(Dog);
// };
// class Exetends extends alert("exetends evrybody something function") {}//?return mistytsja v funccii()
// new Exetends.length;
// const dogg = new Dog("Bob", "Dog");
// dogg.sayName();
class StaticClass {
  static staticMethod() {
    alert("staticMethod");
  }
}
class Krol {
  constructor(imya) {
    this.skorost = 0.5; //?this OBOWJASKOWO TRWEBA
    this.im = imya;
    // this.schos = "N";
    this.schos = "N";
  }
  bigi(skorost) {
    this.skorost = skorost;
    alert(` ${this.im} begi to move zi shwidkistyu ${this.skorost}`);
  }
  stojati() {
    this.skorost = 0;
    alert(` ${this.im} stoyat PARENT  ${this.schos}`);
  }
}
class Saya extends Krol {
  showawsya() {
    alert(` ${this.im} showawsya`);
  }
  nestojati() {
    super.stojati();
    this.showawsya();
  }
  // notArrow()=>super.stojati(){//?arorw function not hat super
  //   this.showawsya();
  // }
}
// new Krol("Berserk").bigi(35);
// new Krol("Gandalf").stojati('"Stojat"');
// let saya = new Saya("Saya");
// saya.showawsya();
// saya.stojati();
// saya.nestojati();
// let newkrol = new Krol("Mordor");
// vsyaki funcii
class OVRRIDDING extends Krol {
  constructor(imya, skorost, schos) {
    super(imya, skorost, schos);
    this.im = imya;
    this.schos = skorost;
  }
}
let ovrridding = new OVRRIDDING("Perevisnachennja", "Schos", null, 123);
//////
let cls = fncHoisting();

// alert(obj instanceof Rabbit);
////let globalVar = 12.2;
var globalVar = 12.2;
console.log(globalVar);

(function () {
  // alert("anonimius function");
  console.log("anonimius function");
  af();
})();
function callBack(anonimfunction) {
  anonimfunction();
  return 7 + 7; //? Куди повиннo повертати значення?
}
// callBack(function(){console.log("anonimius function");});
callBack(() => {
  console.log("anonimius function in callback as argument in async code");
});
function closures() {
  let varOuter = "varOuter";
  let varInner = 1.7;
  function innerFunction(varInner) {
    varInner++;
    console.log(varInner);
    return `${varInner} ${varOuter}${this}${vaR} `;
  }
  return innerFunction(varInner);
}
const resultC = closures();
console.log(resultC);
function innerCallingVariant() {
  console.log("innerCallingVariant");
}

let object = new Object();
object.valueObj = "nameOfObject";
let fncCal = innerCallingVariant.call(object);
// let fncCal = innerCallingVariant.call(this);
console.log(fncCal);
////object.valueObj = "nameOfObject";
// let arrow = (arargs) => {
//   q = 11;
//   return q * 8;
// };
let arrowB = (argarr) => 2 + 3;
arrowB();
let inpure = () => {
  c++;
  return c ** 2;
};
const pure = (cc) => cc ** 2;
const arrowFunc = (parA, parB, parC, ...rrest) => parA + parB + parC - rrest;
console.log(arrowFunc(1, 2, 3));
rrest = [1, 2, 3];

const setTimeOutFunc = () => console.log("setTimeOutFunc");
setTimeout(setTimeOutFunc, 10000);
function dog() {
  var self = this;
  this.breed = "wolf";
  (function () {
    console.log(this.breed);
    // console.log(this);
    // console.log(self);
    console.log(self.breed);
  })();
}
console.log(dog());
setTimeout(() => {
  ////setInterval
  let dddog = dog;
  console.log(dddog());
  console.log(dog());
  console.log(cat());
}, 11110);
function cat(poroda) {
  this.poroda = "chihuahua";
  // setTimeout(() => {
  //   alert(this.poroda);
  // }, 1000);
  // return poroda;
  // alert(poroda)
  // poroda = "coon";
}
let cat1 = cat;
new cat1("dinamical Class");
// ?HIGH ORDER FUNCTION
// ?CLOSURE - функція як аргумент викликана в іншому місті коду з доступом до  зовнішньої змінної
const glbVarClosure = 1.15;
const outher = () => {
  const outher2 = 3.16;
  console.log(glbVarClosure, outher2); //working
  //!console.log(glbVarClosure, outher2, inner2);// not working,UNDEFINED, Could not find name 'inner2'. Did you mean 'inner'?
  const inner = () => {
    console.log(glbVarClosure, outher2, inner2);
    const inner2 = 4.17;
    //! console.log("closures");//not working
    //! alert("closures");//not working
    //!console.log(inner2);//not working
    return glbVarClosure + outher2 + inner2;
    // return `${glbVarClosure} ${outher2} ${inner2}`;
  };
  return inner;
};
console.log(outher());
let init = outher;
console.log(init);
// for (let c = 0; c <3; c++) {
//   // alert(c);
//   setTimeout(() => {
//     // alert(--c);
//   }, 1000);
//   alert(c);
// }
for (let inervariable = 0; inervariable < 3; inervariable++) {
  // inervariable++;
  // inervariable += 1;
  inervariable = Boolean;
  // inervariable = !inervariable;
  // inervariable = inervariable ? "true" : "false";
  // inervariable = Boolean(inervariable);
  // alert(inervariable);
}
// (function () {
//   alert("samovizov func");
// }());
// function nestedFunction(parNestedA, ...parnestedB) {
//   let vars = "outer";
//   function inernestedfunc() {
//     (function count() {
//       let count = 1.3;
//       alert(count++);
//       alert(count++);
//       alert(count++);
//       // alert(vars);
//     })();
//     return parNestedA + "SO" + parnestedB + vars;
//   }
//   alert("functionCLOSUREcalling" + inernestedfunc());
//   // alert("secondargumentcalling" + inernestedfunc());
// }
// nestedFunction(" ZARABOTALO ", " KURWA", " 'MAT'");
// let kurwaclosure = nestedFunction();

// console.log(inervariable); inervariable is not defined
//?NFE name function expression
function ask(question, ...handlers) {
  // let isYes = confirm(question);
  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}
// for positive answer, both handlers are called
// for negative answer, only the second one
ask(
  "Question?"
  // () => alert("You said yes")
  // (result) => alert(result),
  // () => alert("THIS IS HANDLER YAKIY SPRACOWUE VIDPOVIDMNO DO DOWZYNY OBJECTU"),
  // () => alert("THIS IS HANDLER YAKIY SPRACOWUE VIDPOVIDMNO DO DOWZYNY OBJECTU"),
  // test,
  // error => alert("Error: " + error.message),
  ////isYes.addEventListener("click", test)
  ////() => alert("second handler")
  // (secondhandler) => alert(secondhandler)
);

// ?http/JS-info
//?
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Are you 18?",
//   () => alert("You are welcome"),
//   () => alert("You are not welcome")
// );//?codeium
// function ask(questions, ...handlers) {
//   let isYes = confirm(questions);
//   ask.counter++;
//   ask.name++;
//   for (let handler of handlers) {
//     // handler(isYes);
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//     // return isYes;
//     ask.counter = 0;
//   }
//   // alert(`${ask.counter}`); //?not variable a property
//   alert(`${ask.name}`);
// }
// ask(), ask(), ask();
// ask(
//   "POLIMORFISM",
//   () => alert("yes"),
//   (result) => alert(result)
// );
//?LEXICAL ENVIRONMENT
null;
let Undefined;
let global = "property";
global = "property2";
let globallexical = "global lexical environment";
globallexical = "change property of global lexical environment";
function decl(global) {
  let locall = "local";
  let som = "some";
  return `${global} ${locall} ${globallexical} ${som}`;
  // alert(local);
  // alert(global);
  return global;
}
// alert(decl("Olek")); //?decl("Olek");
////decl(som);
let referenceEnvironment = [
  decl("referenceEnvironment"),
  decl("referenceEnvironment"),
  decl("referenceEnvironment"),
];
referenceEnvironment = null;
// let Value = "Surprise!";
// function f() {
//   let Value = "the closest value";
//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }
//   return g;
// }
// let g = f();
// g();
//?
let globak = "globak";
function closs() {
  let lokal = 0;
  // let lokal = "lokal";
  function innercloss() {
    // alert(lokal);
    // alert(globak);
    lokal++;
    // return `${lokal} `;
    // return lokal;
    return innercloss;
  }
  return innercloss;
  ////let asclose = innercloss();
}
let calcloss = closs();
calcloss();
let calcloss2 = closs();
calcloss2();
calcloss2();
calcloss2();
let closure = "closure";
function closet() {
  alert(`${closure}+""+                "makeglobal"  + closure`);
}
closure = "closureglobal";
// closet();
let reassign = closet; //working;closet()-nowo working
// reassign();
function makeWorker() {
  let name = "Pete";
  return function (name) {
    alert(name);
  };
}
let name = "John";
// let work = makeWorker();
// work();
function useCat() {
  let namm = " baby kitten";
  return [() => `myaw${namm}`, (newNamm) => (namm = newNamm)];
}
const [hookA, hookB] = useCat();
console.log(hookA());
hookB("kit");
console.log(hookA());
console.log(hookB);

// HIGH-ORDER FUNCTIONS
// RECURSION(js,python,java,c#,php...)
// RECURSION FUNCTION fuction in function
let recursion = (n) => {
  if (n > 0) {
    //! Якщо Умови чи обриву(break) немає то функція виконується безкінечно !STACK OVERFLOW
    //! console.log(n);
    // return n * recursion(n - 1);
    return n;
    recursion(n - 1);
  }
};
recursion(5);
//?
let recursb = function (recarga, recarga2) {
  let varrecurs = 1.5;
  // if (recarga > 0) {
  if (recarga == 1) {
    alert("message recursion step one conditition");
    // return recarga * recursb(recarga - 1, recarga2);
  } else {
    // alert("message recursion step two conditition");
    // return recarga + recarga2 + varrecurs;
    return recarga * recursb(recarga, recarga2 - 1);
  }
  // return recarga + recarga2 + varrecurs;
  return recarga * recursb(recarga, recarga2 - 1);
};
// recursb(5, 7);
//?plunker
//?recursion variant
function pow(x, n) {
  if (n == 1) {
    // if (n == 0) {
    // if (n == 2) {
    // if (n == 3) {
    //Maximum call stack size exceeded else only pow();
    return x;
  } else {
    return x * pow(x, n - 1); //?factorial WTF?
    //? вираз return x * pow(x, n - 1);===
    // 2 * pow(2, 3 - 1);
    // 2 * pow(2, 2);
    // 2 * 4;
    // 8;
    //?
    // return x * pow(x - 1, x);
    //? return (n == 1) ? x : x * pow(x, n - 1); скорочений варіант
  }
}
// alert(pow(12, 3)); // 12*12*12=12^3==1728
// alert(pow(4, 4)); // 256
// alert(pow(9, 3)); // 729
// alert(pow(9, 9)); // 387420489
//?simple variant
function poww(c, b) {
  return b == 1 ? c : c * poww(c, b - 1);
}
// alert(poww(2, 3));
// ?iteration variant
// function pow(x, n) {
//   let resultR = 1;
//   // multiply result by x n times in the loop
//   for (let i = 0; i < n; i++) {
//     resultR *= x;
//   }
//   return resultR;
// }
// alert(pow(2, 3)); // 8
// alert(pow(3.4, 6)); // 8
//?somebody tasks
function goto(gg) {
  // let g = gg * (gg + 1) - 2;
  // return g;
  let s = 0;
  for (let i = 1; i <= gg; i++) {
    s += i;
  }
  return s;
}
// alert(goto(5));
function walk(steps) {
  let step = 1;
  for (let i = 0; i < steps; i++) {
    console.log(step);
    step++;
  }
  return steps;
}
walk(5);
//?
let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
// console.log(sumSalaries(company));
// //? SWITCH
// let age = prompt("Your age?", 18);

// switch (age) {
//   case 18:
//     alert("Won't work"); // the result of prompt is a string, not a number
// prompt("Your age?", 18);
//     break; //? if break true then next case will not work, (break==return);

//   case "18":
//     alert("This works!");
//     break;

//   default:
//     alert("Any value not equal to one above");
// }
// !GPT
// ?GPT

// document.addEventListener('DOMContentLoaded', () => {
//   const amountInput = document.getElementById('amount');
//   const fromCurrencySelect = document.getElementById('fromCurrency');
//   const toCurrencySelect = document.getElementById('toCurrency');
//   const convertBtn = document.getElementById('convertBtn');
//   const resultDiv = document.getElementById('result');
//   const historicalChartCanvas = document.getElementById('historicalChart');
//   let historicalChart;

//   const apiKey = 'YOUR_API_KEY'; // Replace with your API key
//   const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

//   const fetchCurrencies = async () => {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     const currencies = Object.keys(data.rates);
//     populateCurrencySelects(currencies);
//   };

//   const populateCurrencySelects = (currencies) => {
//     currencies.forEach(currency => {
//       const option1 = document.createElement('option');
//       option1.value = currency;
//       option1.textContent = currency;
//       fromCurrencySelect.appendChild(option1);

//       const option2 = document.createElement('option');
//       option2.value = currency;
//       option2.textContent = currency;
//       toCurrencySelect.appendChild(option2);
//     });
//   };

//   const fetchExchangeRate = async (fromCurrency, toCurrency) => {
//     const response = await fetch(`${apiUrl}?base=${fromCurrency}`);
//     const data = await response.json();
//     return data.rates[toCurrency];
//   };

//   const fetchHistoricalRates = async (baseCurrency, targetCurrency) => {
//     const endDate = new Date().toISOString().split('T')[0];
//     const startDate = new Date();
//     startDate.setFullYear(startDate.getFullYear() - 1);
//     const startDateString = startDate.toISOString().split('T')[0];

//     const response = await fetch(`https://api.exchangerate-api.com/v4/${baseCurrency}/${targetCurrency}/history?start=${startDateString}&end=${endDate}`);
//     const data = await response.json();
//     return data;
//   };

//   const convertCurrency = async () => {
//     const amount = amountInput.value;
//     const fromCurrency = fromCurrencySelect.value;
//     const toCurrency = toCurrencySelect.value;

//     if (!amount || !fromCurrency || !toCurrency) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const rate = await fetchExchangeRate(fromCurrency, toCurrency);
//     const convertedAmount = amount * rate;
//     resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

//     const historicalRates = await fetchHistoricalRates(fromCurrency, toCurrency);
//     displayHistoricalChart(historicalRates);
//   };

//   const displayHistoricalChart = (historicalRates) => {
//     const labels = Object.keys(historicalRates.rates);
//     const data = Object.values(historicalRates.rates);

//     if (historicalChart) {
//       historicalChart.destroy();
//     }

//     historicalChart = new Chart(historicalChartCanvas, {
//       type: 'line',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Exchange Rate',
//           data: data,
//           borderColor: 'rgba(75, 192, 192, 1)',
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Date'
//             }
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Exchange Rate'
//             }
//           }
//         }
//       }
//     });
//   };

//   convertBtn.addEventListener('click', convertCurrency);

//   fetchCurrencies();
// });
// ?DOCUMENT HTML.dom
document.getElementById("converter__subtitle").innerText = "getElementById";
let domGetId = document.getElementById("converter__subtitle");
domGetId.style.color = "#db9191";
document.querySelector(".converter__subtitle").innerText = "querySelector";
document.querySelector(".converter__subtitle").innerHTML = "querySelector";
let domQS = document.querySelector(".converter__subtitle");
domQS.style.color = "#9222e9";
//
let makeImg = document.querySelector(".btn");
makeImg.addEventListener("click", (event) => {
  document.querySelector("img").style.display = "block";
  document.querySelector("img").style.display = "none";
  // event.target.style.display = "none";
});
let resulT = document.querySelector("h3").addEventListener("click", (event) => {
  //!resulT.style.color = "#23da57";
  document.querySelector("img").style.display = "block";
});
let pseudoButton = document.querySelector(".pseudoButton");
// ?pseudoButton.before
//!pseudoButton.hover = "hover";
//!pseudoButton.cursor = "pointer";
pseudoButton.style.color = "#00ff4c";

//!document.querySelectorAll(".converter__subtitle").innerText = "querySelector";
//!document.getElementsByClassName(".converter__subtitle").innerTex = "ClassName";
let className = document.getElementsByClassName("converter__subtitle");
// document.querySelector("h2").innerText = "querySelector";
button = () => {
  // debugger;
  let arrowFN = (document.getElementById("result_text").innerHTML = "arrow");
  //?let varDom = document.getElementsByClassName("converter__title");
  //?varDom[0].style.backgroundColor = "#7700ff";
  //?varDom.length;
  //!let varDom = document.querySelector("converter__title");
  //!varDom.style.backgroundColor = "red"; видає null якщо звертатись querySelector
  //!console.log(varDom);

  let jjj = arrowFN + " rrrrr";
  console.log(jjj + " after return working clicked");
  // ?let iPt = document.querySelectorAll("input").valueOf("input");
  // ?console.log(iPt);
};
writeIPT = () => {
  let iPt2 = document.getElementById("input");
  console.log(iPt2.value);
  iPt2.addEventListener("result_text", writeIPT());
};
let iPt = document.getElementById("input");
iPt.addEventListener("input", button);
let prett = (document.body.style.backgroundColor = "#6f6f28");
let pree = document.getElementById("input");
// let ts = (document.body.style.backgroundColor = "red");
// function button() {
//   let iPt = document.getElementById("input");
//   console.log(iPt.value);
//   console.log("WORKING SIMPLE ONCLICK");
//   document.getElementById("result_text").innerHTML = "Working";
//   let switchh = document
//     .querySelectorAll("canvas")
//     .addEventListener("result", listener, options);
// }

// ? webcademy
let time = 20;
if (time) {
  console.log("goood utro");
} else if (time >= 12 && time < 18) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}
console.log("snippetAddJsonFile");

///TODO
///!self-invokinf function
(function (a, b, c) {
  console.log("sif");
})(1, 2, 3);

//?!FUNCTION DEFINITION IN JAVASCRIPT+OPERATOR-FUNCTION (BEETWEN NAMES)

//!doubleInit(55,33)//is not defined,not is Function Hoisting
let fUnC;
fUnC = null;
const fNc = null;
function decLaration(parA, parB) {
  fUnC = 3.14;
  // const fUnCB = 6.26 + fUnC; // + " text";
  let fUnCB = 6.26 + fUnC; // + " text";
  console.log(fUnCB);
  // return parA != parB;
  return parA + parB;
}
const fncExpressionA = function (parExA, parExB) {
  // alert("calllfncexpression");
  return parExA * parExB;
  // return parExA + parExB;
};
let sumFncExA = fncExpressionA(1.7, 3.4);
// let sumFncExA = fncExpressionA(11, 30);
console.log(sumFncExA); // ?чому це значення підіймається вище в консолі на рівень 178string
let varFncCalling = sumFncExA; //!sumFncExA(2, 3);
sumFncExA;
let doubleInit = fncExpressionA;
// ?let doubleInit = fncExpressionA(1, 5);
// ?console.log(doubleInit(3.3, 4.5));===doubleInit(3.3, 4.5);
// doubleInit(3.3, 4.5);
// console.log(doubleInit(3.3, 4.5));// fncExpressionA(15, 20);
// decLaration(10, 20); //nan
decLaration("call   ", "      me");
decLaration("call   ", "me");
decLaration("call", "me");
decLaration("call", "me");
console.log(decLaration("call", "me"));
// console.log(decLaration(10, 20)); //30

let fncExpression = function (x, y) {
  // return 1 + 2;
  console.log("watafack");
  return x + y;
};
console.log(fncExpression(1.3, 2.5));
//!console.log(fncExpssion('qwerty', 'qwerty'));
function makeBreakfast(main, side, drink) {
  // console.log("");
  // return `Breakfast: ${main}, ${side}, ${drink}`;
  return 99, 88, 77 + " wtfFFF " + 99;
}
makeBreakfast("egg", "butter", "milk");
console.log(makeBreakfast("egg", "butter", "milk"));
const breakfast = makeBreakfast("egg", "butter", "milk");
console.log(breakfast);
let ab = breakfast + " qwerty";

// NAMED PARAMS IN FUNCTION
// argument as obj(SNIPPETS)
//  omodule obj
// const obj: {
//     key: string;
//     name: string;
//     age: number;
//     city: string;
//     district: string;
//     street: string;
//     "street number": number;
//     phone: number;
//     somebodykey: string;
// }
// TODO
// ?parameters function as object{}
let fndestruct = {
  title: "My Menu",
  items: ["Burger", "Fries", "Shake"],
};
// console terminal command tsc-v (typeScript version)
function callfndestruct(
  //? { title, items } = fndestruct
  { title = "", width: w = 200, height: h = 100, items }
) {
  // alert(`${title} ${items}`);
  // alert(title + items[2] + w + h);
}
// callfndestruct(fndestruct.title, fndestruct.items[2]);
callfndestruct(fndestruct);
//?template tutorial javascript info
//? we pass object to function
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };
// ...and it immediately expands it to variables
// ?function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
// title, items – taken from options,
// width, height – defaults used
//   alert( `${title} ${width} ${height}` ); // My Menu 200 100
//   alert( items ); // Item1, Item2
// }
// showMenu(options);
//?new Date()
// let date = new Date(24**5+ 24**4+ 24**3+ 24**2+ 24**1+ 24**0);
// let date = new Date(24*3600*10*1000*365*2);
// let date = new Date(24*600*1000);
let date = new Date(-24 * 60 * 60 * 1000);
let UNIX = new Date(0);
let datea = new Date(1);
let dateb = new Date(3500);
let datec = new Date(2580, 11, 31);
let dated = new Date("2022-12-31");
let datey = new Date(0, 1, 1, 1, 1, 7, 11111111111);
let datem = new Date(9991111 * 11 * 15 * 1000);
let today = new Date();
today.getFullYear(); //?.getDate();,getHours(),getMinutes(),getSeconds(),getMilliseconds()....
today.getUTCHours();
today.getTimezoneOffset();
//?dateMethods
let setdate = new Date(date.setDate(9898));
//?time
// let ttime = "1580-01-01T12:00:00+00:00";-12307204800000
let ttime = "5580-01-01T12:00:00+00:00"; //113920603200000
let parseTime = Date.parse(ttime); //118920603200000
// let ttime = "2022-12-31T23:59:59.999Z";

// let datem = new Date(milliseconds);//?reference error
function fncAsObject(namedParams) {
  let { litObjA, litObjB, litObjC } = namedParams;
  return ` при чорнори reTurn${litObjA},${litObjB},${litObjC}`;
}
console.log(fncAsObject("slovo", "string"));
console.log(fncAsObject({ litObjA: "🍿", litObjB: "🥛", litObjC: "🍵" }));
function fncAsObject(...namedParamsB) {
  return `${namedParamsB.join(" ")}`;
}
// fncAsObject("🍿", "🥛", "🍵");
// console.log(fncAsObject("🍿", "🥛", "🍵"));
// fncAsObject({litObjA:"🍿",litObjB:"🥛",litObjC:"🍵"})
// console.log(fncAsObject(fncAsObject(...namedParams: any[]): string));
// FIXME
let arrFnc = (arrParam) => 1 + 3.3;
//!?arrays masives Масиви
const collection = ["ford", "bmw", "mersedes"];
console.log(collection[2]);
console.log(collection.length);
console.log(collection.push);
collection.push("audi");
collection.join(" ");
let spred = ["addAllValueKeyProperty", ...collection, ...somaray];
let spreadd = [...vaiable];
// let spred = [2, ...collection];
// let spred = [2, ...rrest];
// ?local/global variable in function
function local(parLocA, parLocB) {
  let localVar = parLocA + parLocB;
  console.log(localVar);
  // alert("time value");
  return localVar;
}

(function () {
  // alert('SELF INVOKING FUNCTION "TIME"');
})();
// }(abo));

local(1.2, 7.7);
let domHtml = document.querySelector("h1");
// !domHtml.innerHTML = localVar;
// ?domHtml.innerHTML = local;
// domHtml.innerHTML = local(1.2, 7.7);
// domHtml.innerHTML = local(-1.2, 7.7);
// domHtml.innerHTML = local("yakiys`' text ");
// domHtml.style.color = "#4800ff";

//?! methods masives Масиви
collection.push("audi", "honda", "kia", "hyundai");
console.log(collection);
collection.pop();
console.log(collection);
collection.shift();
console.log(collection);
collection.unshift("opel");
console.log(collection);

//!linkArray
// const linkArrayScpecs = [collection, collection];
const linkArrayScpecs = collection;
console.log(linkArrayScpecs == collection);
const linkNewArrayScpecs = ["ford", "bmw", "mersedes"];
console.log(linkNewArrayScpecs == collection);

//?looops Цикли ITERATION`s
// for (let i = 0; i <= 5; i++) {
for (let i = 0; i <= collection.length; i++) {
  // todo console.log(i);
  console.log(collection[i]);
}

//?for of
const forOf = ["saab", "volvo", "bentley"];
for (let someBodiVariable of forOf) {
  console.log(someBodiVariable);
  // ? forOf instanceof Array;
}
// array.forEach(element => {});
forOf.forEach(function (currentValue, index, arr) {
  console.log();
});
// aray.forEach(alert);
labels: for (let i = 0; i < 2; i++) {
  let j = -1;
  for (let j = 0; j < 2; j++) {
    // if (i == 2) break labels;
    // console.log(`i: ${i}, j: ${j}`);
    // alert(`i: ${i}, j: ${j}`);
    //!//// return j;
    if (i == 2) break;
  }
}

// const funcAsArgument = document.querySelector('button');
const funcAsArgument = document.querySelector("img");
funcAsArgument.addEventListener("click", function () {
  // alert("listener Working");
  // console.log("funcAsArgument");
  console.log("eventLinter+anonimFnc");
});
const createNewElement = (document.createElement("p").innerHTML = "newelement");
createNewElement.textContent = "newelement";
function formHandler() {
  // alert("bbbb");
  console.log("formHandler");
}
let pat = 13;
let fncAsObj = function (q, w) {
  // return 1 + 2;
  // return "watafack";
  // console.log(null);
  q = q || 0.7;
  w = -1;
  console.log(q + w);
  let bread = "bread";
  // return bread;
  //!let sum = q + w;
  // !Ніколи не використовувати цей Бред:fncIn = function () {
  //  ! alert("doubleFunction");
  // !};
};
const argParam = fncAsObj(2, 2);
//!fncAsObj(2, 2);
//!fncAsObj(sum(2, 2));
const addClass = document.querySelector("p");
addClass.classList.add("change2Class");
// addClass.classList.toggle("change2Class");
// addClass.textContent = "newelement";
// addClass.outerHTML = "kkkk";
// addClass.style.color = "red";
const hidden = document.querySelector("p");
hidden.style.display = "quote";

const crtt = document.querySelector("button");
// crtt.style.display = "none";
// crtt.style = "color: #e3adad; background-color: #6636af;";
// crtt.innerHTML = "button";
function crtb(style, text) {
  return `<p style = "${text}">${style}</p>`;
  // return '!important';
  // console.log("string😃😃😃😃".typeof);
  // return (crtt.innerHTML = "returnnn🙉🙈🙊");
}
crtt.innerHTML = crtb(
  "JSmake😉😉",
  "color: #f10f0f; background-color: #e7e0f1; width: 100px;"
);
console.log("🐱🐭🐹");
// const CRT = (document.createElement("button").innerHTML = "DOMBUTTON");
// document.body.appendChild;
let aray = [
  "addpush",
  "extract-pop",
  1.1,
  2.2,
  3.3,
  "extract-shift",
  "add-unshift",
];
for (let loo of aray) {
  // console.log(loo);
  // console.log(typeof loo);
  // alert(loo);
  // alert(typeof loo);
  // alert(loo[3].length);
}
// aray.splice(1, 1, "splice");
// aray(2, 4, "isertsomeBodyvalue");
// aray(2, 0, "isertsomeBodyvalue0");
// aray.slice(2, 5);
let concat = aray.concat("concat", [2, 53], 9, 9, "concat2", "concat3");
// aray.forEach((element) => {
//   document.body.appendChild(element);
// });
// ["Bilbo", "Gandalf", "Nazar"].forEach((element) => {
//   // !alert("forEach");
//   // !alert(this);
//   alert(element);
// });
// ["Bilbo", "Gandalf", "Nazar"].forEach(alert);
["Bilbo", "Gandalf", "Nazar", "Hobbit", "Dwarf"].forEach(
  (item, index, arraylist) => {
    // alert(`+${+item} ${index} ${arraylist}`);
  }
);
aray.map((el) => el.length);
aray.map((el) => el / 2);
aray.map(parseInt);
aray.sort();
aray.sort((a, b) => a - b);
aray.reverse();
// aray.split(1, 2);
aray.join();
aray.reduce((acc, el) => acc + el);
// (Array.isArray({}));
Array.isArray(value); //true
// arr.find(func, thisArg);
// let MAP = "🐱🐭🐹";
// // const findmap = document.querySelector(".converter__subtitle");
// findmap.innerHTML = MAP;
// function MAPS() {
//   return `
//   <div>${aray.map((el) => el)}</div>
//   <div>${MAP}</div>
//   <div>${MAP}</div>
//   <div>${MAP}</div>
//   `;
// }
// aray.map((el) => {
//   console.log(el);
// });
// MAPS();
// findmap.innerHTML = MAPS();
// let sOm = document.querySelector("h3");
// sOm.innerHTML = MAPS();

//?Block Scope
let blk = "global Scope";
if (5 < 10) {
  // var blk = "var block Scope";
  // let blk = "let block Scope";
  blk = "uread value";
  // console.log(blk);
}
// let blk = "global Scope";
console.log(blk);
// OBJECT +Object Constructor Functions
//?Object Constructor Functions & factory Functions
function SomebodyFncConstructor(paa, pab, pac, pad, pae) {
  this.fncConstructorproperty = paa;
  this.fncConstructorproperty2 = pab;
  this.fncConstructorproperty3 = pac;
  this.fncConstructorproperty4 = pad;
  this.fncConstructorproperty5 = pae;
  this.fncConstructorproperty6 = Date.now(53974);
  let sum = this.fncConstructorproperty3 + this.fncConstructorproperty5;
  // alert(sum)/
}

const objConstructor = new SomebodyFncConstructor(1, 2, 3, 4, 5);
SomebodyFncConstructor.prototype.fncConstructorproperty6 = Date.now(7491365);
SomebodyFncConstructor.prototype.fncConstructorproperty7 =
  "somebodyObjectChange";
// factory function
function carr(make, model, year) {
  return {
    getFullname() {
      // return `${this.make} ${this.model} ${this.year}`;//keyworld:this- for object prtotype
      return `${make} ${model} ${year}`;
    },
  };
}
let carr2 = carr("Mersedes", "amg", 2020);
console.log(carr2.getFullname());
console.log(carr2.year); //undefined
console.log(carr2);
////typeObj["nameValu"] = "somebodyChange"; BEFORE INITIALIZE
let typeObj = new Object();
typeObj = {
  key: "value",
  keyy: "valuee",

  born: Date.now(),
  nameValu: "changeValue",
  walk: function () {
    // console.log("called WALKfunction");
    // 10<1 ? console.log("true") : console.log("false");
    // return 10 < 1 ? true : false;
    typeObj["nameValu"] = "somebodyChange"; //not error
  },
};
typeObj["nameValu"] = "somebodyObjectChange";
// console.log(typeObj.nameValu);
console.log(typeObj["nameValu"]);
typeObj.walk();
//!/// let connect = { ...typeObj, ...obj };
//!spread = JSON.stringify(obj);// Cannot access 'obj' before initialization
let condition = true;
if (condition) {
  // test();
  this.yopt();
}
let numE = 5e9;
let numlessE = 5000000000;
let pi = Math.PI;
pi.toString(36); //'3.53i5ab8p5f'
isNaN(vaR); //false
let poW = Math.pow(333, 44);
let poWW = 333 ** 44;
let intege = Math.random;
let gratulire = "👍👍👍👍👍";
// let bigint = BigInt(5);
let bigint = 223524654 * 325454 * 3234546;
let toSTR = bigint.toString();
let replace = toSTR.replace(".", "").replace(/0+$/, "");
let objTemlate = {
  key: "value",
  keya: "valuea",
  456: 456,
  keyb: "valueb",
  arr: ["ara", "arb", "arc", "arb", "ard"],
  // keyc: "valuec",
  123: "123",
  p: "Math.PI",
  i: intege,
  pi: pi,
  pii: 3141592653589793,
  bi: bigint,
  noname() {
    let logika = confirm("noname");
    // this.arr.forEach(test(alert("foreachStart.this")));
    this.arr.forEach(alert(this.arr));
    // if (this.noname.length) {
    if (logika == true) {
      alert(`"Gratulation you firt loggikal vorking code" 
          ${gratulire}`);
    } else {
      // alert(this[123].length);
      // alert(objTemlate[123].length);
      alert(objTemlate.pi.toLocaleString());
      //alert(objTemlate.bigint.length);//?not it value lenght number????
    }
  },
  _age: 0,
  // _obgortka: 0,
  // get obgortka() {
  get age() {
    // alert(this._age)
    // prompt ();
    // 11 < 2 ?  alert(true) : alert(false);
    return this._age;
    // return this._obgortka;
  },
  set age(value) {
    // set obgortka(valu) {
    if (value < 0) {
      // alert("x3x3x3");
    } else {
      this._age = value;
      // this._obgortka = valu;
    }
  },
};
objTemlate.age = -5;
objTemlate.age = 25;
// objTemlate.obgortka = -5;
// objTemlate.obgortka = 25;
// alert(objTemlate.age);
objTemlate.stara = "littlecase";
objTemlate.nova = "littlecase";
Object.defineProperty(objTemlate, "nova", {
  get: function () {
    return `${key},${test}`;
    // alert("getttt");
    // return `${this.pamyatayHOISTING}`;
  },
  set: function (any) {
    this.key = any.toUpperCase();
    this.noname = any.toUpperCase();
    // objTemlate.key = any.toUpperCase();
    // alert("Setter Hoisting");
  },
});
objTemlate.nova = "smallcase";
//?OBJECTS PROPERTY COFIGURATIONS
//?Property flags and descriptors
// let objDescriptor = Object.getOwnPropertyDescriptors(objTemlate, "noname");
let objDescriptor = Object.getOwnPropertyDescriptor(objTemlate, "keyb");
// alert(JSON.stringify(objDescriptor, null, 3));
//?changePropertyObject
Object.defineProperty(objTemlate, "keyb", {
  // configurable: false,
  // enumerable: true,
  // value: "change value",
  writable: false,
  keya: "new",
  key: "newdescriptor2",
  value: "new3",
});
// let chflag = Object.getOwnPropertyDescriptor(objTemlate, "keya");
// let chflag = Object.getOwnPropertyDescriptors(objTemlate, "keyb");
let changeDescriptorflag = Object.getOwnPropertyDescriptor(objTemlate, "keyb");
//?
//?Property getters and setters/Здобувачі та установщики властивостей
let getSet = {
  getPropA: "getvalueA",
  getPropB: "getvalueB",
  getPropC: "getvalueC",
  // getFunc(){
  get getFuncAsProperty() {
    alert(`GETTER-DEFAULT-IS ${this.getPropA},${this.getPropB}`); //?Uncaught TypeError: getSet.getFunc is not a function
    // let ret = `GETTER-DEFAULT-IS ${this.getPropA},${this.getPropB}`;
  },
  set getFuncAsProperty(valueq) {
    // [this.getPropA, this.getPropB, this.getPropC] = valueq.split(" "); //?("1","space ")
    [this.getPropA, this.getPropB, this.getPropC] = name.toUpperCase();
    // alert("setter");
    ////let sett = "setter smetter twetter";
  },
};
// getSet.getFuncAsProperty = "setter smetter twetter";
getSet.getFuncAsProperty = "ø√µq";
// alert(getSet.getPropC);
// alert(getSet.getPropB);
// alert(getSet.getPropA);
////alert(getSet.getFuncAsPropertySet())
// alert(getSet.getFuncAsProperty);
// for (let accesorDescriptor in getSet) alert(accesorDescriptor);
// alert(getSet.getFuncAsProperty());//?is not a function
// alert(getSet.getFuncAsProperty); //?only read getter working selfbyself-POD-KAPOTOM
//?
let { key, ...rest } = objTemlate;
// alert(rest[123]);
// alert(rest[456]);
// alert(rest.keya);
let {
  keya,
  key: varr,
  somms = 111,
  soms: vAar = 222,
  456: var456,
} = objTemlate; //call to variable varr,var456:out value of keyobject
//// obj.name = "HOISTING-Vasya";
////let obj = new Object();
//// const obj = new Object();
let dinnamic = "dinamoc";
const obj = {
  [dinnamic]: "dinnamicvalue",
  key: "value",
  name: "Oleksandr",
  age: 30,
  city: "Kyiv",
  2: "2",
  "idetifier n": "identifier",
  innerobj: { prop: "vala", prop: "valy" },
  // test:test(),
  // [Symbol.isConcatSpreadable]: true, //aray.concat(obj) array method to oblect,out element oblect,array method to oblect,out value oblect
  test: test,
  city: "Kyiv2",
  district: "Sosnovy Bor",
  street: "Naukova",
  "street number": 1,
  phone: 234567890,
  somebodykey: "somebodyvalue",
  key: "scope",
  multiwords: "[multiwordsvalue property]",
  method: function () {
    //?Object.assign(obj, existingOblect);
    console.log("method");
    alert("propertyExistence" in obj);
    for (let ordered in obj) alert(ordered);
  },
  get newPropertyDostupu() {
    // return `newpropertyDOSTUPU, ${this.somebodykey}`;
    // return `${this[2]},${this.city},${this.multiwords},${this.test}`;
  },
  ////set propertySet(vset) {
  // set (vset) {
  // return (vset = "55");
  // set: function (vset) {
  set newPropertyDostupu(vset) {
    this.city = vset.length;
    this.multiwords = vset.toUpperCase();
    this.age = vset.toUpperCase();
    this.innerobj = vset.toUpperCase();
    this.district = vset.toUpperCase();
  },
};
obj.newPropertyDostupu = "yoptwouyu";

obj.key = "nu suka";
let getterSetter = {
  realProperty_virtualProperty: 3.5,

  get virtualProperty() {
    return this.realProperty_virtualProperty * 2;
  },
  set virtualProperty(v) {
    return (this.realProperty_virtualProperty = v / 2);
  },
};
getterSetter.virtualProperty = 2.5; //?KOLY PRACUJE GETTER READ
// alert(getterSetter.realProperty_virtualProperty)//?KOLY PRACUJE SETTER SETTING
// var objj = {
//   real_a: 1,
//   get a() {
//     return this.real_a * 2;
//   },
//   set a(v) {
//     return (this.real_a = v / 2);
//   },
// };
obj.name = "Vasya";
obj["des tut bula"] = "Podolyanochka des`tut bula";
// let objGetOwnPropDescriptors = Object.getOwnPropertyDescriptors(obj);
let objDefineProperty = Object.defineProperty(obj, "name", {
  writable: false,
  value: "HOISTING-Vasya",
});
let objGetOwnPropDescriptor = Object.getOwnPropertyDescriptor(obj, "name");
let objDefinePropertys = Object.defineProperties(obj, {
  name: {
    writable: false,
    value: "Petya-Shmetya",
    configurable: false,
  },
  age: {
    value: 3000,
    writable: false,
    enumerable: false,
  },
});
let objGetOwnPropDescriptorsHoisting = Object.getOwnPropertyDescriptors(obj);
let rectangle = {
  width: 33,
  height: 55,
  prosto: "chytannya",
  getter: "getterOnlyAloune",
  get area() {
    alert(`${this.prosto},${this.getter}`);
    return this.width * this.height;
  },
};
let wraper = {
  get obgortka() {
    return this._obgortka;
  },
  set obgortka(param) {
    // if (param.length < 10) alert("ne obgortka");
    this._obgortka = param;
    return;
  },
};
wraper.obgortka = "simmm";
//?
const existingOblect = {
  dna: Math.random(),
};
function Getter(lep, birtday) {
  this.aa = lep;
  this.bb = birtday;
  // return date;
  Object.defineProperty(Getter, "newageproperty", {
    get() {
      let inget = new Date().getFullYear();
      return inget - this.birtday.getFullYear();
    },
  });
}
let konecgetteram = new Getter("vasya/petya", new Date(1288, 8, 23, 0, 22, 33));
//?PROTOTYPE||PROTOTYPE INHERITANCE mona kopy/paste properties s odnogo Objekta do inshogo
//? [[prototype]]==null||inheritance sibling object properties
let proto = {
  parent: "property",
  nextparent: "innerproperty",
  secondparent: "innervalue",
  ////this: thiss,
  sleem() {
    // this.nextparent = null;
    this.nextparent = 34 - 2;
    // this.nextparent.toString;
    // this.nextparent.toUpperCase;
    return this;
  },
};
let siblingobjproto = {
  nul: null,
  bool: true,
  bool: false,
  som: "",
  undef: undefined,
  zero: 0,
  _proto_: obj,
  // protoo: objTemlate,//?only one element proto must be!!!!!
  ////this: make,
};

//? alert((siblingobjproto._proto_ = proto));
//? proto.nul//null
// ?objTemlate.__proto__ = obj;
// ?objTemlate.method()//out method in obj
//?this/for...in/hasOwnProperty||lock-onlock inheritaes propwrty in object __proto__
// for (let cicl in siblingobjproto) alert(cicl);
// for (let cicl in siblingobjproto) {
//   let isOwn = siblingobjproto.hasOwnProperty(cicl);
//   // if (isOwn.length = true) {
//   // if (isOwn.length = null) {
//   if (11 < 9) {
//     alert(`if ${cicl}`);
//   } else {
//     // alert(`else ${proto.nextparent} `);
//     alert(`else ${proto.sleem()} `);
//   }
// }
// for (let cicl of aray) alert(cicl);for...of ne dlya Objects.
function Horse(joke, smoke) {
  this.jo = joke;
  // Horse.jo = joke;//?Horse NOT THIS
  // this.smo = this.smo;
  this.smo = siblingobjproto;
  this.smok = smoke;
  // Horse.smo = siblingobjproto; //?Horse NOT THIS
  // alert(joke)
  // alert("function-construktor "+ " saweMethod&makeOfChidPrototype")
  // return "powedenie eksemplara";
} //Horse.prototype.F.constructor
let pony = new Horse("wite horse");
pony.constructor("huywam", "nawsyu mordu");
// Horse.prototype = { constructor: Horse };
Horse.prototype = { constructor: Horse };
let nativeObject = {}; //nativeObject.__proto__ === Object.prototype
let inbuilldingPrototype = {};
// alert(inbuilldingPrototype.toString === Object._proto_.toString);
// alert(inbuilldingPrototype.toString === Object.prototype.toString);
// Array.prototype.toString
if (!String.prototype.changeNative) {
  String.prototype.changeNative = function (n) {
    // alert(this);
    return new Array(n + 1).join(this);
  };
}
// "changeNative".changeNative(3);
// alert("la".changeNative(3));
nativeObject.join = Array.prototype.join("");
Object.getPrototypeOf(Horse) === pony; //?false
let des = Object.create(Horse);
// //Horse.prototype.constructor = function (newconstructorParametr) {
//   ///this.constructor = newconstructorParametr;
// ///};
// Horse.prototype.constructor = () =>
//   "diya chy method yakiy bude peredavaty po posilanyu";
//? PROTOTYPE'S METHODS,OBJECT'S WHITOUT ___PROTO___
// Object.create(create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any...
// let cr = Object.create(null[this.Array]);//?
//// let create=Object.create(maneObject:propValue,Object.getOwnPropertyDescriptor)
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptor(obj)
);
function Rabbit(imya) {
  this.im = imya;
}
Object.prototype.sayHI = function () {
  // alert(this.imya);
  alert(this.im);
};
let krol = new Rabbit("Bunny");
Object.prototype.templat = "More more prototype";
let protoclone = Object.create(Object.getPrototypeOf(objDescriptor));
let objcrtprop = Object.create(object, {
  obbb: {
    prp: "tru",
  },
});
Object.prototype.templa = "osmmsmsm";
// krol.sayHI()
// Rabbit.prototype.sayHI()
// VERY PLAIN OBJECT+associative arrays == obj[key]/object literal
// plain = {};
// let assaray = prompt("asssociatiwed array", "__proto__", "{}");
// plain[assaray] = "array  associative ";
// alert(plain[assaray]);
// let mapobj = new Map();
// mapobj.set(assaray, "Map object");
// alert(mapobj.get(assaray));
//? let nullobj=Object.create(null);
let nullobj = { __proto__: null };
// let assaray2 = prompt("asssociatiwed array", {});
// let assaray2 = prompt("asssociatiwed array", null);
// let assaray2 = prompt("asssociatiwed array", "__proto__");
// nullobj[assaray2] = "null object";
// alert(nullobj[assaray2]);
// let mapobj2 = new Map();
// mapobj2.set(assaray2, "Map object");
// alert(mapobj2.get(assaray2));
// let sintx = Object.create({ __proto__: null });
let sintx = Object.create(null);
// alert(sintx);//?Cannot convert object to primitive value
//?
//?UI.com
// let animalUi = {
//   kot: "nyaw",
//   pes: "gaw",
// };
// ?Функціональний екземпляр
// function twarinka(name,energi) {
//   let animalUi = {};
//   animalUi.name = name;
//   animalUi.energi = energi;
//   animalUi.eat = function (amount) {
//     alert(`${this.name} poiw`);
//     this.energi += amount;
//     return this.kot;
//   };
//   animalUi.sleep = function (lenght) {
//     alert(`${this.name} pospaw`);
//     this.energi += length;
//     return end;
//   };
//   animalUi.graye = function (lenght) {
//     alert(`${this.name} pograw`);
//     this.energi -= length;
//     // return 5;
//   };
//   return animalUi;
//   ////return twarinka;
// }
// let Lyow = twarinka("Lyow", 3);
// let kot = twarinka("Kot", 15);
//?Функціональний екземпляр зі спільними методами
const anyMethods = {
  eat(kilkist) {
    alert(`${this.naswa}  isty`);
    this.energi += kilkist;
  },
  sleep(trywalist) {
    alert(`${this.naswa}  pospaw`);
    this.energi += trywalist;
  },
  graya(trywalist) {
    alert(`${this.naswa}  pograw`);
    this.energi -= trywalist;
  },
};
function twarinka(naswa, energi) {
  let ssawec = {};
  ssawec.naswa = "naswa";
  ssawec.energi = "energi";
  anyMethods.eat = "eat";
  anyMethods.sleep = "sleep";
  anyMethods.graya = "graya";
  return ssawec;
}
let Lyow = twarinka("slon", 22);
// METHODS=SMALLER FUNCTION IN OBJECT/CLASSES/CONSTRUCTORS
// & methods strings/numbers/booleans/objects. date/arrays methods
let stringMethod = "string".toUpperCase();
let conW = stringMethod.toLowerCase();
let numberMethod = (3.14).toExponential();
let booleanMethod = true;
let objectMethod = { key: "value" };
let dateMethod = new Date();
let arrayMethod = [1, 2, 3, 4, 5];

//Object methods
// Object.assign(obj, objArr);
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Object.freeze(obj);
Object.seal(obj);
//? PROPERTY OF OBJECT AS VARIABLE
let spider = "tarantul";
let legs = 8;
const shorthandSyntax = {
  spider: "scorpio",
  legs: 6,
  // spider, //shorthand syntax out:tarantul
  // legs, //shorthand syntax out: 8
};
console.log(shorthandSyntax);
//? MAP== this is Object with colection keyeded elements of more complex(type data) OBJECTS
//?syntax new Map()//not method.
const map = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  //! map.set("four", 444),
  ["four", 4],
  ["five", 5],
  [true, "1"],
]);

map.set("one", 11);
map.set("one", "abbbbrrrr");
map.size;
//?SET===new Set;//(collection without key)
let synset = new Set();
synset.add("set");
synset.add(map);
// ?iterations over data structures/ітерації над структурами даних
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
//?DESTRUCTURING for Array's & Object for used in function
//old method assigned to variable ES5
let destructuringvehicle = [
  "car",
  "bus",
  "truk",
  "motorcycle",
  "tank",
  "train",
  "helicopter",
  "ship",
];
// let [car, bus, truk, motorcycle] = destructuringvehicle;//ES6
let mersedes = destructuringvehicle[0];
let laz = destructuringvehicle[1];
let ram = destructuringvehicle[2];
let ducati = destructuringvehicle[3];
// let [saab, LAZ, UAZ, voshod, titanics,] = destructuringvehicle;
let [titanics, ...spead] = new Set(destructuringvehicle);
// alert(`${saab}, ${UAZ},${voshod},${titanic}`);
// alert(`${saab + "," + LAZ}`);
// let [firstname, lastname, age] = assigmentElementToVariable; //?It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables.
// let [firstname] = assigmentElementToVariable[0];
// let [lastname] = assigmentElementToVariable[1];
// let [age] = assigmentElementToVariable[2];
// alert(lastname); //?undefined,not work
//?destructuring objects
//!/// let { key } = obj;
// const destructure = {};

// const { destr, tructure } = destructure;//set||assign key ,value,data,e.t.c variable
//? for (var i in window) if (window.hasOwnProperty(i)) console.log(i);
const nestedObj = {
  gold: "yellow",
  shell: "oil",
  employe: {
    negr: "bingo",
    zulus: "bongo",
    nested: {
      inside: "inside",
      more: "NESTEDDDDD",
    },
  },
};
let desFnc = function ({ negr, zulus }) {
  //!
  // return `hhh ${spider}`;
  console.log(negr + zulus);
  // console.log(z+x);
};
console.log(desFnc(nestedObj));
// let {} = nestedObj;
// let { employe:{negr,zulus}} = nestedObj;
let {
  employe: { negr, zulus },
} = nestedObj;
console.log(nestedObj.employe);
console.log(nestedObj.employe.negr);
console.log(negr, zulus);
//
let randomIneger = () => Math.random().toString(36).slice(-6);
let variableObj = {
  key: "value",
  keyA: "valueA",
  [Symbol.isConcatSpreadable]: true,
  keyFnc: "🥤🥤",
  keyB: "valueB",
  keyC: "valueC",
  [randomIneger()]: true,
  makeFunctionAsvalue: function () {
    // return this;
    return this.keyC;
  },
};
const arrObj = {
  makeFnc: () => {
    this.keyFnc = "double XOLERA";
    this.globalVar;
    // return this;
    // return this.keyFnc;
    // return globalVar;
    return keyFnc;
  },
};
arrObj.makeFnc();
console.log(arrObj.globalVar);
// ?chain methods(function in objecs)
const objChain = {
  chain: "",
  chaina: "",
  chainb: "",
  chainFnc() {
    // this.chain += " 🍪🍪chain ";
    this.chain += " 2 ";
    ////  this.chain **= " 2 ";
    ////this.chain **= " 🍪🍪chain ";
    ///// this.chain -= "2 🍪🍪chain ";
    return this;
  },
};
objChain.chainFnc().chainFnc().chainFnc().chainFnc().chainFnc().chainFnc();
console.log(objChain.chain);
// REFERENCES ON OBJECTS IN HEAP-DATA
//!primirives data
// let heap = "🎃";
// let set = heap;
// console.log(heap, set);
// heap = "👻";
// console.log(heap, set);// 👻🎃

//!object data
let heap = { boo: "👀" };
let set = heap;
console.log(heap, set);
heap.boo = "👻";
// let copyObj = Object.assign({}, set);
// console.log([heap, set, copyObj], Object.getOwnPropertyNames(copyObj));

//?SPREAD OBJECT
obj.age = 44;
obj.age = 54;
obj.age = 64;
obj.age = 74;
obj.age = 84;
obj.age = 94;
obj.age = 104;
let copyObj = { ...set, ...heap };
let spread = { ...copyObj, ...obj };
// let spread = { ...typeObj, ...obj };
spread = JSON.stringify(obj);
//!//obj.age = 45;
typeObj.keyy = "jsonValue";
//???????????????????????????????????????spread = JSON.parse(spread);
console.log(spread);
// ?lodash | _.cloneDeep();
/////obj.cloneDeep();
// let cloneUnDeep = { ...obj };
let lodash = _.cloneDeep(obj);
//!///obj.age = 44;
//!? PROTOTYPE (added)Inheritance to OBJECT(inherit of prototype)  PROPERTY && METHODS
function User(nAme) {
  this.kedar = nAme;
  this.naame = nAme;
  // return 2;
  // console.log(this.nAme);
  console.log(User);
}

User.prototype.printName = function () {
  // console.log(this.nAme);
  // alert(this.nAme);
  alert(this.kedar);
};

let kedar = new User("kedar".length);
Animal.prototype.addedNewPpropertyOnlyToConstructor =
  "addedNewPpropertyOnlyToConstructor";
Animal.prototype.addedNewPpropertyOnlyToConstructorFunction =
  "constructorFunction";
//?LOOP`s
let varArr = [
  "beaver",
  "badger",
  "cat",
  "dog",
  "fox",
  // ![{someboobject: "value"}],
  "baboon",
  "goat",
  "kangaroo",
  "rhinoceros",
  "lamb",
];
varArr[3] = "lion";
console.log(varArr.length);
varArr.push;
varArr.pop;
varArr.shift;
varArr.unshift;
varArr.at;
varArr.join;
// varArr.delete(0);
//
// function doog(lamb) {
//   ////!if (lamb.length > 5) {
//   if (lamb > 5) {
//     alert("true");
//     alert(lamb.length);
//   } else {
//     alert("false return lamb argument ");
//   }
//   return lamb;
// }

// doog(varArr);
// ?doog(будь-який Аргумент Можемо вставляти в функцію);
let looop = 4.4;
////for (looop = 0; looop < looop; looop++);
//// for (0; 1 < looop;);
for (; 1 < looop; looop--);
// for (let i = 2; i < varArr.length; i++) {
// for (let i = 0; i < varArr.length; i++) {
// for (let i = 0; i < length; i++) {
// for (let i = 0; i < 20; i++) {
// for (let i = 1; i <= 5; i++) {
// for (let i = 0; i <= 5; i++) {
for (let i = 5; i <= 5; i++) {
  let code = 'console.log("i`m in loop")';
  console.log(code);
  // let i = 1;
  console.log(i);
  // ////!return code;
  console.log(varArr[3]);
  console.log(varArr[i]);
  // ////!return i;
  // ////!return true;
  // ////!return varArr[i];
}
//
while (globalVar < 13) {
  globalVar++;
  // globalVar++;
  // globalVar++;
  // globalVar++;
  // globalVar++;
  //  !globalVar**2;
  console.log(globalVar ** 2);
  // console.log(globalVar);
}
while (10 < varArr.length) {
  console.log(varArr[1]);
  // varArr++;
}
//
do {
  console.log("do while");
  globalVar++;
} while (globalVar == 10);
for (let offf of varArr) {
  // console.log(offf[1]);
  // console.log(offf.length);
  console.log(offf.slice(1, 4));
}
let objArr = [
  1,
  "string",
  2.2,
  "somes",
  4.2,
  { objinarr: "vlastivistA", objinarr: "vlastivistB", objinarr: "vlastivistC" },
  77,
  56,
  21,
  "morestring`s",
];
// !/for (const element of looop//noiterable-primitive value) {
// for (let element of objArr) {
//   console.log(element);
// }
// for (let element of objArr) {
for (let element of breakfast) {
  console.log(element);
}
for (let el in variableObj) {
  console.log(el);
  console.log(variableObj[el]);
}
for (let l = 0; 8 <= objArr; l++) {
  console.log(l);
}
// varArr[Symbol.iterator] = function* () {
//   let i = 0;
//   let varArr = this;
// };
//
console.log(variableObj["key"]);
console.log(variableObj.key);
console.log(variableObj);
console.log(variableObj.makeFunctionAsvalue());
// const { key: destr, keyC: tructure,} = variableObj;
// console.log(destr, tructure);
const { city: Piskivka, district: OTG } = obj;
console.log(Piskivka);
///// console.log(city, district);
//?obj.city = "teteriv";

const exist = Object.create(existingOblect);
console.log(exist); //{prototype: {...}, dna: 0.12345}
console.log(existingOblect.dna); //0.578234508087637
console.log(Object.getPrototypeOf(existingOblect)); //{...........}
// const exist = Object.assign(obj, existingOblect);
// console.log(exist);
// Object.defineProperty(obj, "street number", {
//   objectdescriptor: "descriptor",
//   get: function () {
//     return this.street + " " + this["street number"];
//   },
//   get: () => {
//     return 233333;
//   },
//   // writable: false,
//   // configurable: false,
//   // enumerable: false,
//   // value: 2,
// });
// let prompT = prompt("enter key", "key");
// alert(obj[prompT]);
//// console.log(obj[prompT]);
console.log(obj.city);
console.log(obj.street + " " + obj["street number"]);
console.log(obj.street["street number"]);
console.log(obj["street number"]);
// ///console.log(obj.street."street number");
obj.name = "innername";
console.log(obj.name);
function fncHoistingB(walk) {
  let walkk = walk + 1;
  console.log(10 < 1);
  console.log(walkk);
  return false; //?Це призведе до негайного виходу з функції
}
//!let walkk = walk+1;//walk' is declared but its value is never read

hois = 5;
function hoisFnc(hois, nois) {
  return hois + nois;
}
var hois;
hoisFnc(5, 5);
console.log(hoisFnc(5, 5));
//!let hois;//Cannot access 'hois' before initialization
//!const hois;//declarations must be initialized

// hoisFnc(5, 5);

//?Misha Larchenko nui GEMINI NANO
// ?asinchronous function
// async function submitRequest() {
//   const query = document.querySelector("input").value;
//   if (query?.trim()) {
//     const aiObj = ai.createTextSesion();
//     const promptObj = await aiObj;
//     const response = await promptObj.prompt(query);
//     console.log({ response });
//   }
//   return false;
// }
// alert("test Alert converter ");
// ????????PASCAL LANGUAGE       best of practics programming language

// const s = "hello wtfCode";
// let ress = 0;
// for (let i = 0; i <= s.length; i++) {
//   let n = 0;
//   for (j = 0; j <= s.length; j++) {
//     if (s[i] === s[j]) n++;
//   }
//   ress = ress + n;
// }
let summa = 1.3;
console.log(summa.toString());
console.log(typeof summa);
let converttostring = summa.toString();
console.log(converttostring);
console.log(typeof converttostring);
// let kk = function tostring(argconvert) {
function tostring(argconvert) {
  return argconvert.toString();
  // return tostring();
}
// console.assert(11 < 1);
// codewars
function greet() {
  return "hellow World";
}
greet();
//
triangle = (aa, bb, cc) => (aa = bb + cc);
triangle(180, 90, 90); //must return tree angle.
//
// const game = (rock, paper, scissors) => {
//   let gamerA = if(rock>scissors){
//     return "win";
//   };
//   let gamerB = if(paper>rock){
//     return "win";
//   };
//   let gamerC = if(scissors>paper){
//     return "win";
//   };
// }
function rps(p1, p2) {
  if (p1 === p2) return "Draw!";

  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "paper" && p2 === "rock") return "Player 1 won!";

  // return "Player 2 won!";
  return alert("interface");
}
let knb = document.querySelector(".box1").addEventListener("click", rps, true);
document.querySelector(".box2").addEventListener("click", test, true);
document.querySelector(".box3").addEventListener("click", test, true);
document.querySelector(".box2").addEventListener("click", rps);
document.querySelector(".box2").addEventListener("click", test);

function test() {
  alert("test");
}
const eventbtn = document.querySelectorAll(".circle"); // його банний масив треба цикл для корі селектор застосовувати NodeList(3) [div#stycky.circle.first, div#stycky.circle.second, div#stycky.circle.third]
for (let i = 0; i < eventbtn.length; i++) {
  eventbtn[i].addEventListener("click", test);
}
const rock = document.querySelector(".first");
rock.addEventListener("click", () => {
  alert("ROCK-KURWA");
});
const paper = document.querySelector(".second");
paper.addEventListener("click", () => {
  alert("PAPER-KURWA");
});
const scissors = document.querySelector(".third");
scissors.addEventListener("click", () => {
  alert("SCISSORS-KURWA");
});
function gra(yaka) {
  if (yaka === "rock") {
    alert("ROCK-KURWA");
  } else if (yaka === "paper") {
    alert("PAPER-KURWA");
  } else if (yaka === "scissors") {
    alert("SCISSORS-KURWA");
  }
}
let score = document.querySelector(".score");
score.addEventListener("click", () => {
  // Math.random().toString(36).slice(-6);
  // Math.floor(Math.random() * 3);
  alert(Math.floor(Math.random() * 3));
  // gra(randomIneger());
});
const selectionIcon = document.querySelectorAll("[data-section]");
selectionIcon.forEach((element) => {
  element.addEventListener("click", () => {
    alert(element.dataset.section);
  });
});
//?load
// window.addEventListener("load", () => {
//   alert("window loaded");
// })
// const selectall = document.querySelectorAll(".selectall"),
let selectall = document.querySelectorAll(".selectall"),
  countUser = document.querySelectorAll(".countUser"),
  countComp = document.querySelectorAll(".countComp"),
  userField = document.querySelector(".userField"),
  compField = document.querySelector(".compField"),
  resultField = document.querySelector(".resultField"),
  reset = document.querySelector(".reset"),
  start = document.querySelector(".start"),
  end = document.querySelector(".end"),
  userStep,
  compStep,
  countU = 0,
  countC = 0,
  blocked = false;

// for (let i = 0; i < selectall.length; i++) {
//   selectall[i].addEventListener("click", () => {
//     alert(selectall[i].innerHTML);
//   });
// }
//?
selectall.forEach((newNameFunction) => {
  newNameFunction.addEventListener("click", (e) => {
    //(e)===(event)= Event Object, jquery ?
    const selectionName = newNameFunction.dataset.selection; //DATASET WTF??????
    makeSelection(selectionName);
    alert(e);
    ////alert(e.target.dataset.selection);
    // //alert(e.target.innerHTML);
  });
});
function makeSelection(selection) {
  // alert(selection);
  return selection;
}
//?working
// selectall.forEach((newNameFunction) => {
//   newNameFunction.addEventListener("click", () => {//?working
//     alert(newNameFunction.innerHTML);
//     console.log(newNameFunction.innerHTML);
//   });
// });

//?
// function choiseUser(e) {
//   // let targ = e.currentTarget;
//   // let targ = e.target;//?working
//   let targ = e.secondtarget;
//   // alert(targ.value++);
//   // alert(targ.innerHTML);
// }
// document.addEventListener("click", choiseUser, true);
let secondtargeta = document.querySelector(".secondtarget");
// secondtargeta.addEventListener("click", choiseUser);
// document.addEventListener("click", choiseUser); //?working
// gra("scissors");
// gra("paper");
// gra("rock");
// let sand = (document.getElementById("hider").innerHTML = "hide");
// sand.onclick = (hidden) => {
//   document.getElementById("hider").hidden = true;
// };

//! button.addEventListener("click", test);
//! input.addEventListener("click", () => alert("input"));
// const lastButton =
//   document.querySelectorAll("button")[
//     document.querySelectorAll("button").length - 1//?working
//   ];
// let lastButton = Array.from(document.querySelectorAll("button")).pop;
let lastButton = Array.from(
  document.querySelectorAll("button")
)[2].addEventListener("click", test);
let inputp = document
  .querySelectorAll("input")[4]
  .addEventListener("click", () => {
    alert("input");
  });
let looparr = Array.from(document.querySelectorAll("input"));
// let looparr = document.querySelectorAll("input");
for (let loopvar of looparr) {
  // loopvar.addEventListener("click", () => alert(loopvar.value));
  // alert(loopvar.value);
}
// lastButton.addEventListener("click", test);
let pseudoClass = document.querySelector("button:last-of-type");
// let pseudoClass = document.querySelector("button:nth-child(2)");
// let pseudoClass = document.querySelector("[data-role='button']");

// const eventbtn = document.getElementById("stycky");
// for (let i = 0; i < eventbtn.length; i++) {
//   eventbtn[i].addEventListener("click", test);
// }

// function rps(p1, p2) {
//   const outcomes = {
//     rock: { rock: "Draw!", paper: "Player 2 won!", scissors: "Player 1 won!" },
//     paper: { rock: "Player 1 won!", paper: "Draw!", scissors: "Player 2 won!" },
//     scissors: {
//       rock: "Player 2 won!",
//       paper: "Player 1 won!",
//       scissors: "Draw!",
//     },
//   };

//   return outcomes[p1][p2];
// }

//my server HTTP
// const http = require("http"); // Необходимый модуль

// // Создание сервера
// const server = http.createServer((req, res) => {
//   // Указание заголовков (тип данных и кодировка)
//   res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
//   // Текст, который будет отображен на странице
//   res.end("Просто обычный текст без HTML");
// });

//?Bro Code.youtube
// const choises = ["rock", "paper", "scissors"];
// const playerDisplay = document.querySelector(".playerDisplay");
// const computerDisplay = document.querySelector(".computerDisplay");
// const resultDisplay = document.querySelector(".resultDisplay");
// const playerScoreDisplay = document.querySelector(".playerScore");
// const computerScoreDisplay = document.querySelector(".computerScore");

// let playerScore = 0;
// let computerScore = 0;

// function computerPlay(playerChoise) {
//   const randomIndex = Math.floor(Math.random() * choises.length);
//   let = resuult = "";
//   if (playerChoise === computerPlay) {
//     resuult = "Draw a tie";
//   } else {
//     switch (playerChoise) {
//       case "rock":
//         resuult = playerChoise === "rock" ? "Draw a tie" : "You won";
//         break;
//       case "paper":
//         resuult = playerChoise === "paper" ? "Draw a tie" : "You won";
//         break;
//       case "scissors":
//         resuult = playerChoise === "scissors" ? "Draw a tie" : "You won";
//         break;
//     }
//   }
// }
// playerDisplay.textContent = `PLAYER:${playerChoise}`;
// computerDisplay.textContent = `COMPUTER:${computerPlay}`;
// resultDisplay.textContent = resuult;

// resultDisplay.classList.remove("win", "lose");
// switch (resuult) {
//   case "Draw a tie":
//     break;
//   case "You won":
//     resultDisplay.classList.add('win');
//     playerScore++;
//     playerScoreDisplay.textContent = playerScore;
//     break;
//   case "You lost":
//     resultDisplay.classList.add('lose');
//     computerScore++;
//     computerScoreDisplay.textContent = computerScore;
//     break;
// }
//?MEMORY  STACK/SCOPE/HEAP
