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
    //Vetores
    const vet = [7,3,4,9,11];
    const valorPos3 = vet[2];
    console.log(valorPos3);
    const letras = ["A","B","C", "D"];
    for (let i=0;i<letras.length;i++){
        const letra=letras[i];
        //console.log(letra);
    }
    for(index in letras){
        console.log(index);
    }
    for(letra of letras){
        console.log(letra);
    }
}



let btnExecutar = document.getElementById("btnExecutar")
btnExecutar.onclick = executarCodigo