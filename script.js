function calculateSalary(x){
    if(x<= 1200){
        x= 3*x/100+x
    } else if(x>1200){
        let bonusSalary= x-1200
        let percentage= bonusSalary*5/100
        x= +percentage+ x
    }
    return "R$ "+ x
}



function calculateStock(a, b, c){
    let qtdAtualEstoque= a
    let qtdMaxEstoque= b
    let qtdMinEstoque=c 
    
    let qtdMediaProdutos= qtdMaxEstoque+qtdMinEstoque/2
    if(qtdAtualEstoque >= qtdMediaProdutos){
        return 'Não efetuar compra'
    } else{
        return 'Efetuar compra'
    }
}

function calculateAge(a, b){
    let anoAtual= b
    let anoNascimento=a
    let idadeAtual= anoAtual-anoNascimento
    let idadeEm=
    {
        anos:"",
        meses:"",
        semanas:"",
        dias:"",
    }
    idadeEm.anos= idadeAtual;
    idadeEm.meses= idadeAtual*12;
    idadeEm.semanas= idadeAtual*52;
    idadeEm.dias= idadeAtual*365
    
    return idadeEm
    
}

function getDiagonal(n){
    let arrMatrizN=[];
    
    for(let i=0;i<=n;i++){
        arrMatrizN[i]= [];
        for(let j=0;j<=n;j++){
            arrMatrizN[i][j]= i*j
        }
    }
    
    let guardarMatrizN= arrMatrizN
    
    let diagonalMatrizN=[]
    
    for(let i=1;i<guardarMatrizN.length ;i++){
       diagonalMatrizN.push(guardarMatrizN[i][i])
    }

    return diagonalMatrizN
    
}




//function cashMachine