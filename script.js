//função recursiva é uma função que chama ela mesmo 

//criando uma função recursiva

//serve como um while ou um for 

function recursiva(max){
    console.log(max)
    if (max >=10) return;
    max++;
    recursiva(max)
}

recursiva(0)