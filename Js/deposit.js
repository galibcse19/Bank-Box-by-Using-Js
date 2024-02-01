document.getElementById('btn-Deposit').addEventListener('click',function(){
    const DepositData=document.getElementById('deposit-field');
    const DepositValue=DepositData.value;
    const DepositValueFloat=parseFloat(DepositValue)
    
    const depositTotal =document.getElementById('deposit-total');
    const depositTotalValue=depositTotal.innerText;
    const depositTotalValueFloat =parseFloat(depositTotalValue)

    const Balance =document.getElementById('balance');
    const BalancePresent =Balance.innerText;
    const BalancePresentFloat = parseFloat(BalancePresent);

    if(DepositValueFloat<0){
        DepositData.value='';
        alert('Do not Deposit Negative Amount');
        return;
    }
    if(isNaN(DepositValueFloat)){
        alert('Please Enter your Deposit Amount');
        return;
    }

    const sumDeposit= DepositValueFloat + depositTotalValueFloat;
    const sumBalance= DepositValueFloat + BalancePresentFloat;
    
    depositTotal.innerText=sumDeposit;
    Balance.innerText=sumBalance;

    DepositData.value='';
})

document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue=withdrawField.value;
    const withdrawFieldValueFloat=parseFloat(withdrawFieldValue);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue=withdrawTotal.innerText;
    const withdrawTotalValueFloat=parseFloat(withdrawTotalValue);

    const Balance =document.getElementById('balance');
    const BalancePresent =Balance.innerText;
    const BalancePresentFloat = parseFloat(BalancePresent);

    if(withdrawFieldValueFloat>BalancePresentFloat){
        alert('Not Available Taka in your Account');
        withdrawField.value='';
        return;
    }
    if(isNaN(withdrawFieldValueFloat)){
        withdrawField.value='';
        return;
    }

    const TotalWithdraw= withdrawFieldValueFloat + withdrawTotalValueFloat;
    withdrawTotal.innerText=TotalWithdraw;

    const TotalBalance = BalancePresentFloat- withdrawFieldValueFloat;
    Balance.innerText=TotalBalance;

    withdrawField.value='';
})