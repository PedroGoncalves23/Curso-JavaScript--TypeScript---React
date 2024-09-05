let num = Number(prompt("Digite um número"));

let numeroTitulo = document.getElementById('numero');

numeroTitulo.innerHTML = num;


document.body.innerHTML += `<strong>A raiz quadrada é: ${num ** (1/2)}<br></strong>`;

document.body.innerHTML += `<strong>${num} é inteiro: ${Number.isInteger(num)}<br></strong>`;

document.body.innerHTML += `<strong>É NaN: ${Number.isNaN(num)}<br></strong>`;

document.body.innerHTML += `<strong>Arredondado para baixo: ${Math.floor(num)}<br></strong>`;

document.body.innerHTML += `<strong>Arredondado para cima: ${Math.ceil(num)}<br></strong>`;

document.body.innerHTML += `<strong>Com duas casas decimais: ${num.toFixed(2)}</strong>`;