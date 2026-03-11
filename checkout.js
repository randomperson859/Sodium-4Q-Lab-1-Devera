const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData(){
    let name = PARAMS.get("name");
    let meat = PARAMS.get("meat");
    let chicken = PARAMS.get("chicken");
    let payment = PARAMS.get("payment");

    let meatPrice = 100;
    let chickenPrice = 125;

    document.getElementById("greetings").innerText = `Hello, ${name}!`;
    document.getElementById("meat").innerText = `The kilos of Meat you ordered is: ${meat}.`;
    document.getElementById("chicken").innerText = `The kilos of Chicken you ordered is: ${chicken}.`;

    let totalCost = (meat * meatPrice) + (chicken * chickenPrice);
    let change = payment - totalCost;
    if(payment < totalCost){
        document.getElementById("totalCost").innerText = `Your total cost is ${totalCost}.`;
        document.getElementById("change").innerText = `Your payment is shorter than the total cost, please try again!`;
    }else{
        document.getElementById("totalCost").innerText = `Your total cost is ${totalCost}.`;
        document.getElementById("change").innerText = `Your change is ${change}.`;
    }
}