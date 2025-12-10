const products = [
    { name: "Mouse", price: 150000, stock: 10},
    { name: "Keyboard", price: 300000, stock: 3},
    { name: "Monitor", price: 2000000, stock: 0},
    { name: "Headset", price: 500000, stock: 5},
];

const result1 = products
.filter(item => item.stock > 0)
.map(item => ({
    name: item.name,
    total: item.price * item.stock

}));

console.log("Soal 1 Result:");
console.log(result1);