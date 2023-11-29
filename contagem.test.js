const contar = require("./contagem");

const notas = [1,10, 2];

test("numeros de alunos aprovados",()=>{
   expect(contar(notas)).not.toBeLessThan(0);
})

test("numeros de alunos aprovados",()=>{
   expect(contar(notas)).toBe(1);
})

