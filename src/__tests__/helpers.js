/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const helper = require('../helpers');

test ('Jika qty adalah 2, ketika dikurangi 1 jadi = 1',() =>{
    expect(helper.decrementQty(2)).toBe(1);
});

test ('Jika qty adalah 7, ketika ditambah 1 jadi = 8',() =>{
    expect(helper.incrementQty(7)).toBe(8);
});

test('Jika qtynya adalah 1, decrement button disabled = true',()=>{
    expect(helper.disableDecrement(1)).toBeTruthy();
});

test('Subtotal dari 50.000 dengan qty 3 adalah 150.000',() =>{
    expect(helper.subTotal(50000, 3)).toBe(150000);
})