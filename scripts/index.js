// Elements
const form_01 = document.querySelector('.form-question-01')
const form_02 = document.querySelector('.form-question-02')
const form_03 = document.querySelector('.form-question-03')
const form_04 = document.querySelector('.form-question-04')
const form_05 = document.querySelector('.form-question-05')
const form_06 = document.querySelector('.form-question-06')
const form_07 = document.querySelector('.form-question-07')
const form_08 = document.querySelector('.form-question-08')
const form_09 = document.querySelector('.form-question-09')
const form_10 = document.querySelector('.form-question-10')
const form_11 = document.querySelector('.form-question-11')
const form_12 = document.querySelector('.form-question-12')

// Functions
function isEvenOrOdd(value)  {
    value = parseInt(value)
    if(value % 2 === 0) {
        return `O número ${value} é par`;
    } else {
        return `O número ${value} é impar`;
    }
}

function witchIsBigger(num1, num2)  {
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    if (num1 === num2) {
        return 'Por favor, insira 2 números diferentes'
    }

    if(num1 > num2) {
        return `O número ${num1} é maior que ${num2}`;
    } else {
        return `O número ${num2} é maior que ${num1}`;
    }
}

function canVote(birthYear) {
    if(birthYear.length < 4) {
        return "Por favor, insira um ano de nascimento com no mínimo 4 dígitos"
    }

    birthYear = parseInt(birthYear)

    const currentYear = new Date().getFullYear()
    const yearsDifference = currentYear - birthYear

    if (yearsDifference >= 18) {
        return `O indivíduo tem ${yearsDifference} anos e pode votar!`
    } else {
        return `O indivíduo tem ${yearsDifference} anos e não pode votar!`
    }
}

function salaryAdjustment(currentRent, percentage) {
    currentRent = parseInt(currentRent)
    percentage = parseInt(percentage) / 100

    const salaryAdjust = (currentRent * percentage) + currentRent
    const formatSalary = salaryAdjust.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })

    return `O salário reajustado é ${formatSalary}`
}

function witchDayOfTheWeek(day) {
    day = parseInt(day)

    switch (day) {
        case 1:
            return `O dia da semana é domingo!`
        case 2:
            return `O dia da semana é segunda-feira!` 
        case 3:
            return `O dia da semana é terça-feira!` 
        case 4:
            return `O dia da semana é quarta-feira!` 
        case 5:
            return `O dia da semana é quinta-feira!` 
        case 6:
            return `O dia da semana é sexta-feira!` 
        case 7:
            return `O dia da semana é sábado!` 
        default:
            return `[ERRO] - Valor inválido, digite um número entre 1 e 7.`
    }
}

function showAllPositiveValues(value) {
    value = parseInt(value)
    let allValues = ''

    for(let i = 1; i <= value; i++) {
        if (i === value) {
            allValues += `${i}.`
        } else {
            allValues += `${i}, `
        }
    }

    return allValues
}

function sumSmallerValues(value) {
    value = parseInt(value)
    let allValues = 0

    for(let i = 0; i < value; i++) {
        allValues += i
    }

    return `A soma de todos os números menores que ${value} é ${allValues}`
}

function showOddValues(value) {
    value = parseInt(value)
    let allValues = ''

    for(let i = 0; i <= value; i++) {
        if (i % 2 !== 0) {
            allValues += `${i}, `
        }
    }

    const formattedValues = `${allValues.slice(0, -2) + allValues.slice(-1)}`
    return formattedValues
}

function sumSmallerNumbers(numbers) {
    const listOfStrings = numbers.split('-')
    const listOfNumbers = listOfStrings.map(number => parseInt(number))
    const listOfBiggerNumbers = listOfNumbers.filter(number => number < 30)
    const total = listOfBiggerNumbers.reduce((acc, number) => acc + number, 0)
    return `A soma dos números menores do que 30 é ${total}`
}

function showBiggerNumbers(numbers) {
    const listOfStrings = numbers.split('/')
    const listOfNumbers = listOfStrings.map(number => parseInt(number))
    const listOfBiggerNumbers = listOfNumbers.filter(number => number > 50)
    return `${listOfBiggerNumbers.length} números são maiores do que 50`
}

function reverseString(str) {
    let reverseStr = ''

    for(let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }

    return `O inverso de ${str} é ${reverseStr}` 
}

function formatString(str) {
    str = str.toLowerCase()

    let formattedString = ''
    for(let i = 0; i < str.length; i++) {
        if (i === 0) {
            formattedString = str[i].toUpperCase()
        } else if (i === str.length - 1) {
            formattedString = formattedString + str[i].toUpperCase()
        } else {
            formattedString = formattedString + str[i]
        }
    }

    return `O valor é ${formattedString}`
}

// Events

form_01.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('.input-question-01')
    const answer = document.querySelector('.answer-01')


    const result = isEvenOrOdd(input.value)

    answer.innerText = result

    input.value = ''
})

form_02.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-02')
    const firstInput = document.querySelector('.first-input-question-02')
    const secondInput = document.querySelector('.second-input-question-02')

    

    const result = witchIsBigger(firstInput.value, secondInput.value)

    answer.innerText = result

    firstInput.value = ''
    secondInput.value = ''
})

form_03.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-03')
    const input = document.querySelector('.input-question-03')

    

    const result = canVote(input.value)

    answer.innerText = result

    answer.value = ''
})

form_04.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-04')
    const firstInput = document.querySelector('.first-input-question-04')
    const secondInput = document.querySelector('.second-input-question-04')

    

    const result = salaryAdjustment(firstInput.value, secondInput.value)

    answer.innerText = result

    firstInput.value = ''
    secondInput.value = ''
})

form_05.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-05')
    const input = document.querySelector('.input-question-05')

    

    const result = witchDayOfTheWeek(input.value)

    answer.innerText = result

    input.value = ''
})

form_06.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-06')
    const input = document.querySelector('.input-question-06')

    

    const result = showAllPositiveValues(input.value)

    answer.innerText = result

    input.value = ''
})

form_07.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-07')
    const input = document.querySelector('.input-question-07')

    

    const result = sumSmallerValues(input.value)

    answer.innerText = result

    input.value = ''
})

form_08.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-08')
    const input = document.querySelector('.input-question-08')

    

    const result = showOddValues(input.value)

    answer.innerText = `Números impares: ${result}.`

    input.value = ''
})

form_09.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-09')
    const input01 = document.querySelector('.input1-question-09')
    const input02 = document.querySelector('.input2-question-09')
    const input03 = document.querySelector('.input3-question-09')
    const input04 = document.querySelector('.input4-question-09')
    const input05 = document.querySelector('.input5-question-09')

    const inputValues = `${input01.value}-${input02.value}-${input03.value}-${input04.value}-${input05.value}`

    

    const result = sumSmallerNumbers(inputValues)

    answer.innerText = result

    input01.value = ''
    input02.value = ''
    input03.value = ''
    input04.value = ''
    input05.value = ''
})

form_10.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-10')
    const input01 = document.querySelector('.input1-question-10')
    const input02 = document.querySelector('.input2-question-10')
    const input03 = document.querySelector('.input3-question-10')
    const input04 = document.querySelector('.input4-question-10')
    const input05 = document.querySelector('.input5-question-10')

    const inputValues = `${input01.value}/${input02.value}/${input03.value}/${input04.value}/${input05.value}`

    

    const result = showBiggerNumbers(inputValues)

    answer.innerText = result

    input01.value = ''
    input02.value = ''
    input03.value = ''
    input04.value = ''
    input05.value = ''
})

form_11.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-11')
    const input = document.querySelector('.input-question-11')
    

    const result = reverseString(input.value)

    answer.innerText = result
    input.value = ''
})

form_12.addEventListener('submit', (e) => {
    e.preventDefault()
    const answer = document.querySelector('.answer-12')
    const input = document.querySelector('.input-question-12')
    

    const result = formatString(input.value)

    answer.innerText = result
    input.value = ''
})