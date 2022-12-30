function calculateTip(event){
    event.preventDefault();
    let Bill = document.getElementById('Bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;

    if(Bill == '' | serviceQuality == 0){
        alert('Por favor, preencha os valores corretamente');
        return;
    }
    
    if(numOfPeople <= 0){
        alert('Por favor, preencha o número de pessoas corretamente');
        return;
    }

    if(numOfPeople == 1){
        document.getElementById('each').style.display = 'none';
    }else{
        document.getElementById('each').style.display = 'block';
    }

    let total = (Bill * serviceQuality) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);