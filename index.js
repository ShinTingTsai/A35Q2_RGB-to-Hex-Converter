(function(){
  let red = document.getElementById("red")
  let green = document.getElementById("green")
  let blue = document.getElementById("blue")
  let hex = document.getElementById("hex")
  let convert = document.getElementById("conBtn")
  let redRange = document.getElementById("redRange")
  let greenRange = document.getElementById("greenRange")
  let blueRange = document.getElementById("blueRange")
 
  convert.addEventListener("submit", event => {
    event.preventDefault();
    let result = checkInt(red.value) && checkInt(green.value) && checkInt(blue.value)
    if (result) {
      // document.getElementById("redSample").style.backgroundColor = `rgb(${red.value}, 0, 0)`;
      // document.getElementById("greenSample").style.backgroundColor = `rgb(0, ${green.value}, 0)`;
      // document.getElementById("blueSample").style.backgroundColor = `rgb(0, 0, ${blue.value})`;
      redRange.value = red.value
      greenRange.value = green.value
      blueRange.value = blue.value
      updateHex(red.value, green.value, blue.value)


    } else {
      alert('Please type in the integer between 0 to 255')
    }
  })

  $(document).on('input', '#redRange', function () {
    red.value = event.target.value
    updateHex(red.value, green.value, blue.value)
  });

  $(document).on('input', '#greenRange', function () {
    green.value = event.target.value
    updateHex(red.value, green.value, blue.value)
  });

  $(document).on('input', '#blueRange', function () {
    blue.value = event.target.value
    updateHex(red.value, green.value, blue.value)
  });

  function updateHex(r, g, b) {
    document.getElementById("redSample").style.backgroundColor = `rgb(${r}, 0, 0)`;
    document.getElementById("greenSample").style.backgroundColor = `rgb(0, ${g}, 0)`;
    document.getElementById("blueSample").style.backgroundColor = `rgb(0, 0, ${b})`;
    hex.value = '#' + toHex(r) + toHex(g) + toHex(b)
    document.getElementById("hexSample").style.backgroundColor = hex.value
  }

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

  function change(value) {
    red.value = value
    updateHex(red.value, green.value, blue.value)

  }
})()

// show value after mouse-up, not real time
  // redRange.addEventListener("change", event => {
  //   red.value = event.target.value
  //   updateHex(red.value, green.value, blue.value)
  // })
  // greenRange.addEventListener("change", event => {
  //   green.value = event.target.value
  //   updateHex(red.value, green.value, blue.value)
  // })
  // blueRange.addEventListener("change", event => {
  //   blue.value = event.target.value
  //   updateHex(red.value, green.value, blue.value)
  // })