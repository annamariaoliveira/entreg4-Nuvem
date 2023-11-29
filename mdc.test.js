const MDC = require("./mdc");

test("MDC",()=>{
    expect(MDC(2,1)).toBe(1);
    expect(MDC(2,1)).not.toBeLessThan(0);
})

test("MDC",()=>{
    expect(MDC(20,10)).toBe(10);
    expect(MDC(20,10)).not.toBeLessThan(10);
})
