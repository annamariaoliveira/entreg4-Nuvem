const primo = require("./numprimo");

test("primo",()=>{
    expect(primo(7)).toBe(true); 
})

test("primo",()=>{
    expect(primo(15)).not.toBe(true);
})
