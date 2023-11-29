const somatorio = require("./somatorio");
const numeros = [3,2,7];
test("somatorio",()=>{
    expect(somatorio (numeros)).toBe(12);
})

test("somatorio",()=>{
    expect(somatorio (numeros)).not.toBe(11);
})
