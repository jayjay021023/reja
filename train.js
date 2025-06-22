console.log("Jack Ma maslahatlari");
const list = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
 "uzingizga ishlashingizni boshlang", // 30-40 
 "siz kuchli bolgan narsalarni qiling", // 40-50
 "yoshlarga investitsiya qiling", // 50-60 
 "endi dam oling, foydasi yoq endi", // 60 
];


//callback function
function maslahatBering (a, callback) {
    if (typeof a!== "number") callback("insert a number", null);
    else if (a<= 20) callback(null, list[0]);
    else if(a< 20 && a<=30) callback(null,list[1]);
    else if(a< 30 && a<=40) callback(null,list[2]);
    else if(a< 40 && a<=50) callback(null,list[3]);
    else if(a< 50 && a<=60) callback(null,list[4]);
    else {
        setInterval(function () {
            callback(null,list[5]);
        },1000);
    }
}

console.log("passed here 0");
maslahatBering(70, (err,data) => {
    if(err) console.log("ERROR:", err);
    else{
        console.log(data);
    }
});
console.log("passed here 1");


//async function
//async function maslahatBering(a) {
//if(typeof a !== 'number') throw new Error ("insert a number",null);
//else if(a <= 20) return list[0];
//else if(a>20 && a <=30) return list[1];
//else if(a>30 && a <=40) return list[2];
//else if(a>40 && a <=50) return list[3];
//else if(a>50 && a <=60) return list[4];
//else {
  //  return new Promise((resolve, reject) => {
    //    setTimeout(() => {
      //   resolve(list[5]);
        //},5000);
         //});
      // setTimeout(function(){
        //return list[5];
       //}, 5000);
       
//}
//}

// call via then/catch
//console.log("passed here 0");
//maslahatBering(65)
  //.then(data) => {
    //console.log("javob:", data);
    //})
     //.catch((err) =>{
      //console.log("ERROR:", err);    
      //});
      //console.log("passed here 1");
      
      
      
    //asyn/await
      //async function run() {
       //let javob = await maslahatBering(65);
       //console.log(javob);
       //javob = await maslahatBering(31);
       //console.log(javob);
       //javob = await maslahatBering(41);
      // console.log(javob);
    //}
    //run();


    ///////////////////////////////////////////////////////////////////////////////////////

    //A-Task
    function countLetter(letter, text) {
  let count =0;
  for (let i = 0; i< text.length; i++) {
    if (text[i] === letter){
      count++;
    }
  }
  return count;
};

console.log(countLetter("z","razzmatazz"));
console.log(countLetter("a","azizazizaaziza"));

//b-task
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      count++;
    }
  }
  return count;
}

// TEST
console.log(countDigits("ad2a54y79wet0sfgb9")); 

//mitask C
class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non: non,
      lagmon: lagmon,
      cola: cola
    };
  }

  getTime() {
    const now = new Date();
    const soat = now.getHours().toString().padStart(2, '0');
    const minut = now.getMinutes().toString().padStart(2, '0');
    return  `${soat}:${minut}`;
  }

  qoldiq() {
    console.log(`${this.getTime()}da ${this.products.non}ta non, ${this.products.lagmon}ta lag'mon va ${this.products.cola}ta cola mavjud`);
  }

  sotish(nomi, miqdor) {
    if (this.products[nomi] === undefined) {
      console.log(`${nomi}, mahsuloti mavjud emas!`);
      return;
    }
    if (this.products[nomi] < miqdor) {
      console.log(`Kechirasiz, yetarli ${nomi} yo‘q.`);
      return;
    }
    this.products[nomi] -= miqdor;
    console.log(`${this.getTime()},da ${miqdor},ta ${nomi}, sotildi`);
  }

  qabul(nomi, miqdor) {
    if (this.products[nomi] === undefined) {
      this.products[nomi] = 0;
    }
    this.products[nomi] += miqdor;
    console.log(`${this.getTime()}da ${miqdor}ta ${nomi} qabul qilindi`);
  }
}


const shop = new Shop(4, 5, 2);

shop.qoldiq(); 
shop.sotish("non", 6); 
shop.qabul("cola", 4); 
shop.qoldiq(); 

console.log(shop.qoldiq);


//task d
function checkContent(str1, str2, str3, str4) {
  
  let sorted1 = 
  str1.split('').sort().join('');
  let sorted2 =
   str2.split('').sort().join('');
  
  
  return sorted1 === sorted2;
}

let str1= "santa";
let str2 = "perth";
console.log(checkContent(str1,str2));

let str3= "cola";
let str4 = "acol";
console.log(checkContent(str3,str4));

//task E
function getReverse(text) {
  return text.split('').reverse().join('');
}
let a ="hello world";
let natija = getReverse (a);

//
console.log(natija);


//task-f
function findDoublers(str) {
  let seen = new Set();

  for (let char of str) {
    if (seen.has(char)) {
      return true; 
    }
    seen.add(char);
  }

  return false; 
}


let b = "hello world";
let javob = findDoublers (b);

//
console.log(javob);

//task-g
function getHighestIndex(arr) {
  
  let max = arr[0];
  let maxIndex = 0;

  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

let i = [4, 21 ,34,8,5];
let answer = getHighestIndex (i);

console.log(answer);
