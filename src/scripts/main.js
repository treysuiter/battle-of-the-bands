console.log("What up")

let bandNumber = 1

const takeNumber = function (bandName) {
    let numberString = bandNumber.toString()
    nameAndNumber = numberString + ". " + bandName
    bandNumber += 1
    return nameAndNumber
}

console.log(takeNumber('RIFFT'))
console.log(takeNumber('Tape Deck Mountain'))
console.log(takeNumber('Battle Path'))
console.log(takeNumber('Financier'))
console.log(takeNumber('MAVS'))