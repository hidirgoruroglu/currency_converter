const api_key = "e5cPoBsKnJRuoGIphlw3vkRxZtOyWJULcqxyPRwV"; 
const url = "https://api.freecurrencyapi.com/v1/latest?apikey=" + api_key;

const currency_one_html = document.querySelector("#currency_one");
const currency_two_html = document.querySelector("#currency_two");
const list_one = document.querySelector("#list_one");
const list_two = document.querySelector("#list_two");
const amount_html = document.querySelector("#amount");
const calculate = document.querySelector("#calculate");
const result_html = document.querySelector("#result");



fetch ( url )
.then( res => res.json()) 
.then( data => {
    const obj = data.data;
    let options = "";
        for (let key in obj) {
            options += `<option value="${key}"></option>`
    }

    list_one.innerHTML = options;
    list_two.innerHTML = options;

} )

calculate.addEventListener("click", () => {
    const currency_one = currency_one_html.value;
    const currency_two = currency_two_html.value;
    const amount = amount_html.value;

    let calculate_url = `${url}&currencies=${currency_two}&base_currency=${currency_one}`;
    
    fetch ( calculate_url )
    .then(res => res.json() )
    .then(data => {
        const obj = data.data;
        for (let value in obj) {
            let calculated_result = (obj[value] * amount).toFixed(3);
            let result = `
            <div class="card border-primary">
                <div class="card-body text-center" style="font-size:30px;">
                    ${amount} ${currency_one} = ${calculated_result} ${currency_two}
                </div>
            </div>`;
            result_html.innerHTML = result;
        }})
})

// 