function calcular() {
    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('num2')
    var s = Number(n1.value) + Number(n2.value)
    if (n1.value.length == 0 || n2.value.length == 0) {
        window.alert('[ERRO] Adicione os numeros')
    } else {
        if (n1 + n2) {
            res.innerHTML = `${s} \u{1F913}`
        }
    }
}