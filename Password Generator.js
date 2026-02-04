const resultEl = document.getElementById('result')
const lengthEL = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseE1 = document.getElementById('lowercase')
const numbersE1 = document.getElementById('number')
const symbolsE1 = document.getElementById('symbol')
const generateE1 = document.getElementById('generate')
const clipboardE1 = document.getElementById('clipboard')

const randomFunc ={
    lower : getRandomLowercase,
    upper : getRandomUppercase,
    number: getRandomNumbers,
    symbol: getRandomSymbols
}

generateE1.addEventListener('click' , ()=>{
    const length = +lengthEL.value
    const hasLower = lowercaseE1.checked
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersE1.checked;
    const hasSymbol = symbolsE1.checked;

    resultEl.innerText = generatePassword(hasLower , hasUpper , hasNumber, hasSymbol, length)
})

function generatePassword(lower , upper , number , symbol , length){
    let generatedPassword = ''
    let typeCount = lower + upper + number + symbol

    const typesArr = [{lower} , {upper} , {number} , {symbol}].filter(item =>
        Object.values(item)[0]
    );

    if(typeCount === 0){
        return '';
    }

    for(let i = 0; i < length; i += typeCount){
        typesArr.forEach((type)=>{
            const keyFromRandomFun = Object.keys(type)[0]
            generatedPassword += randomFunc[keyFromRandomFun]()
        })
    }

    return generatedPassword.slice(0, length)
}

function getRandomLowercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUppercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbols(){
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random()*symbols.length)]
}
