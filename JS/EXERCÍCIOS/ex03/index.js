let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let varNova = varA

// SOLUÇÃO 1
varA = varB
varB = varC
varC = varNova

console.log(varA, varB, varC);

// SOLUÇÃO 2
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)