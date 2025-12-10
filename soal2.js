const transactions = [
    { user: "Andi", amount: 50000},
    { user: "Budi", amount: 30000},
    { user: "Andi", amount: 15000},
    { user: "Cici", amount: 20000},
    { user: "Budi", amount: 5000}

];

const result2 = transactions.reduce((acc, item) => {
    acc[item.user] = (acc[item.user] || 0) + item.amount;
    return acc;

}, {});

console.log("Soal 2 Result:");
console.log(result2);