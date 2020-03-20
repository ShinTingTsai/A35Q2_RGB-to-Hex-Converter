# Movie List

A simple converter for RGB code transfer to Hex code

## Features

- RGB to Hex
- Used Regular Expression for checking integer

## Function used

  function toHex(input) {
    let result = Number(input).toString(16)
    if (result.length === 1) result = "0" + result
    return result
  }

  function checkInt(input) {
    if (/^(\-|\+)?([0-9]+)$/.test(input)) {
      let num = Number(input)
      if (num >= 0 && num <= 255) {
        return true
      } else return false
    } else return false;
  }