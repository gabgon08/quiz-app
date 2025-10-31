let contagem = {
    A: 0,
    B: 0,
    C: 0
};

function selecionar(opcao) {
    contagem[opcao] += 1;
}

function mostrarResultado(respostas) {

    let a = respostas['A'],
        b = respostas['B'],
        c = respostas['C']

    let maior = Math.max(a, b, c);
    console.log(`
        A: ${a}
        B: ${b}
        C: ${c}
        Maior: ${maior}
        `);

    if (maior === a) {
        console.log("Resultado: Final A");
    } else if (maior === b) {
        console.log("Resultado: Final B");
    } else if (maior === c) {
        console.log("Resultado: Final C");
    } else {
        console.log('Não deu')
    }
}

selecionar("C")
selecionar("C")
selecionar("B")
selecionar("C")
mostrarResultado(contagem)