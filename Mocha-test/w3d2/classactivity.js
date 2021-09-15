 "use strict"
 /*const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
 // 1. destructure the team object onto variables with the same names as the properties
 console.log("expect Big Sleep", center);
 console.log("expect Jim", power);
 */

 // const team = {
 //     point: "Bob",
 //     shooting: "Fred",
 //     power: "Jim",
 //     small: "Al",
 //     center: "Big Sleep"
 // }


 // let { point, shooting, power, small, center } = team;
 // //{"Bob" ,"Fred" ,"Jim"  "Al" "Big Sleep" };
 // console.log("expect Big Sleep", center);
 // console.log("expect Jim", power);


 /*
 //create and log to the console a json string from john. Then create a new instance of john, johnClone, using 
 JSON.parse. Is john === johnClone? */

 // let john = {
 //     name: "John",
 //     surname: “Smith”,
 //     isAdmin: false
 //     birthday: {“ year”: 2000, “month”: “February”, “day”: 3 },
 //     friends: [0, 1, 2, 3]
 // };

 // let JSON = JSON.stringify(john);
 // console.log(JSON)

 let student = {
     name: 'John',
     age: 30,
     isAdmin: false,
     courses: ['html', 'css', 'js'],
     wife: null
 };
 let json = JSON.stringify(student);
 console.log(json);