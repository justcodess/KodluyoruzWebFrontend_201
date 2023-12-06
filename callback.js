// // //veerilen saniye sonra devreye geçer
// // setTimeout(() => {
// //   console.log("helooo");
// // }, 4000);

// // //verilen süre aralıklarıyla ekrana yansır
// // setInterval(() => {
// //   console.log("eklkcmksd");
// // }, 5000);

// const deneme = (cb) => {
//   cb();
// };

// deneme(() => {
//   console.log("hii zey");
// });

// //ftech ve axios api çekmek için
// //axios avantajı .json ekini yazamamıza gerek yok

// const getComm = () => {
//   return new Promise((resolve, reject) => {
//     resolve("heloo babe");
//   });
// };

// getComm()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//Array Function
const users = [
  { name: "ayse", age: 23 },
  { name: "fatma", age: 43 },
  { name: "ali", age: 33 },
  { name: "ahmet", age: 25 },
  { name: "ali", age: 23 },
];

// //push
// users.push("ali");
// console.log(users);

// //map
// users.map((item) => {
//   console.log(item);
// });

// //find
// const result = users.find((item) => item.name === "ayse");
// console.log(result);

// //filter
// const filtered = users.filter((item) => item.name === "ali" || item.age === 23);
// console.log(filtered);

// //some :: bu durumları sağlayan herhangibir cevap varsa true döner , yoksa false
// const someResult = users.some((item) => item.name === "selin");
// console.log(someResult);

// //every :: tüm elemanların şarta uygunluğu kontrol edilir
// const everyResult = users.every((item) => item.age < 100);
// console.log(everyResult);

//includes :: array içinde var mı yok mu kontrolu sağlanır
const colors = ["pink", "blue", "black"];
const isIncluded = colors.includes("blue");
console.log(isIncluded);
