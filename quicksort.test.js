const ordenar = require("./quicksort");

const ordena = [3,5,8,1];

test("Ordenando com Quicksort",()=>{
    expect(ordenar(ordena)).not.toBe([0])
})

test("Ordenando com Quicksort",()=>{
    expect(ordenar(ordena)).toStrictEqual([1,3,5,8]);
})
