const calculatorbtn = document.querySelector('.calculatorBTN')

const tipCalculator = ()=>{
    const billAmount = document.querySelector('#billAmount').value; 
    const ServiceQualit = document.querySelector('#ServiceQualit').value; 
    if(billAmount === ""){
  alert("Coloque o Valor da conta!!")
    }
       const tipAmount = parseFloat(billAmount) * ServiceQualit;
       const totalAmount = parseFloat(billAmount)  + parseFloat(tipAmount) ;
       
       const inputtipAmount = document.querySelector('#tipAmount');
       const inputTotalAmount = document.querySelector('#TotalAmount');

       inputtipAmount.value = tipAmount.toLocaleString('pt-BR',{
        style: "currency",
        currency:"BRL"
       }); // transforma o valor na nossa moeda
       inputTotalAmount.value = totalAmount.toLocaleString('pt-BR',{
        style: "currency",
        currency:"BRL"
       });

}

calculatorbtn.addEventListener('click',tipCalculator);