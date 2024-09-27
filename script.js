function somar (a,b){
    return a + b;
}




function executarCodigo(){
    //alert("Apenas um teste")
    //console.log("Apenas um teste...")

    var numero = 10;
    //let numero = 10;
    //console.log("Valor:" + numero)
    var numero2 = 99;
    const a = 30;
    const b = 40;


    //var r = a +b:
    //let r = a +b:
    //const r = a + b;
    const r = somar(a,b);
    console.log("Resultado:"+ r)
    const nota1 = 7;
    const nota2 = 8;
    const notaFinal = (nota1 +nota2)/2;
    if (notaFinal >= 6){
        console.log("Aprovado!");
    }
      else {
        console.log("Reprovado!");
    }
}



let btnExecutar = document.getElementById("btnExecutar")
btnExecutar.onclick = executarCodigo