const convertButton = document.querySelector('.convert-Button');
const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');


function convertValues() {
    const inputValue = document.querySelector('.inputValue').value
    const dollar = 5.25
    const euro = 6.20
    const result = document.querySelector('.result')
    const result2 = document.querySelector('.result2')

    if (select2.value == "dolar") {
        result2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dollar)
    }
    if (select2.value == "euro") {
        result2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro)
    }
    



    

    result.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

function changeCurrency() {
console.log("ok")
}

select2.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)