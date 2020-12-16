var valor;
var resultado;

function botao(num) {
    valor = document.calc.visor.value += num;

}

function reseta() {
    document.calc.visor.value = '';
}

function igual() {
    resultado = eval(valor);
    document.calc.visor.value = resultado;
}