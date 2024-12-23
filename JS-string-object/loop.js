const mobile = {
  brand: 'samsung',
  color: 'black',
  camera: '12mp',
  price: 25000,
  isNew: true,

}

// for of: array
// for in: object
for(const prop in mobile){
//   console.log(prop)
//   console.log(mobile[prop])
// }

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
  console.log(key, ':' mobile[key]);
}