const age = 17;
const price = 500;
if (age <= 12) {
  console.log('you can eat for free');
}
else if (age >= 60) {
  // 50% discount
  const discount = price * 5 / 100;
  const payAmpunt = price - discount;
  console.log(payAmpunt)

}
else {
  console.log(price)
}