# RGB to Hex Converter

A simple converter for RGB code transfer to Hex code

## Features

- RGB to Hex
- Range input tool to change R/G/B, new value will be shown during the change (not after mouse-up)
- Used Regular Expression for checking integer

## Functions used
``` js
  function toHex(input) {
    let result = Number(input).toString(16)
    if (result.length === 1) result = "0" + result
    return result
  }
```
``` js
  function checkInt(input) {
    if (/^(\-|\+)?([0-9]+)$/.test(input)) {
      let num = Number(input)
      if (num >= 0 && num <= 255) {
        return true
      } else return false
    } else return false;
  }

   $(document).on('input', '#blueRange', function () {
    blue.value = event.target.value
    updateHex(red.value, green.value, blue.value)
  });

  redRange.addEventListener("change", event => {
     red.value = event.target.value
     updateHex(red.value, green.value, blue.value)
  })
  ```