(function(){
  let red = document.getElementById("red")
  let green = document.getElementById("green")
  let blue = document.getElementById("blue")
  let hex = document.getElementById("hex")
  let convert = document.getElementById("conBtn")
 
  convert.addEventListener("submit", event => {
    let result = checkInt(red.value) && checkInt(green.value) && checkInt(blue.value)
    if (result) {
      document.getElementById("redSample").style.backgroundColor = `rgb(${red.value}, 0, 0)`;
      document.getElementById("greenSample").style.backgroundColor = `rgb(0, ${green.value}, 0)`;
      document.getElementById("blueSample").style.backgroundColor = `rgb(0, 0, ${blue.value})`;
      hex.value = '#' + toHex(red.value) + toHex(green.value) + toHex(blue.value)
      document.getElementById("hexSample").style.backgroundColor = hex.value
    } else {
      alert('Please type in the integer between 0 to 255')
    }
  })

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

})()