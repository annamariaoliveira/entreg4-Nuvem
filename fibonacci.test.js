const fibonacci = require("./fibonacci");

test("Sequencia Fibonacci",()=>{
    expect(fibonacci(4)).toStrictEqual([0,1,1,2]);
    expect(fibonacci(4)).not.toBe([])
})

test("Sequencia Fibonacci",()=>{
    expect(fibonacci(6)).toStrictEqual([0,1,1,2,3,5]);
    expect(fibonacci(6)).not.toBe([])
})
