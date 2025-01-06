
    document.getElementById('output').checked = false
    document.getElementById('brightnessSlider').value = 100
    document.getElementById('brightnessValue').innerHTML = document.getElementById('brightnessSlider').value
    document.getElementById('speedSlider').value = 100
    document.getElementById('speedValue').innerHTML = document.getElementById('speedSlider').value
    document.getElementById('color').style.display = 'none'
    document.getElementById('color1').style.display = 'none'
    document.getElementById('color2').style.display = 'none'




    function toggleCheckbox(element) {
      var xhr = new XMLHttpRequest();
      if (element.checked) {
        xhr.open('GET', 'update?state=1', true);
      } else {
        xhr.open('GET', 'update?state=0', true);
      }
      xhr.send();
    }

    setInterval(function () {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var inputChecked;
          if (this.response == 1) {
            inputChecked = true;
          } else {
            inputChecked = false;
          }
          document.getElementById('output').checked = inputChecked;
        }
      };
      xhttp.open('GET', 'state', true);
      xhttp.send();
    }, 1000);

    function updateSliderBrightness(element) {
      var sliderValue = document.getElementById('brightnessSlider').value;
      document.getElementById('brightnessValue').innerHTML = sliderValue;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/slider1?value=' + sliderValue, true);
      xhr.send();
    }

    function updateSliderSpeed(element) {
      var sliderValue = document.getElementById('speedSlider').value;
      document.getElementById('speedValue').innerHTML = sliderValue;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/slider2?value=' + sliderValue, true);
      xhr.send();
    }

    function updateSliderColor(element) {
      var sliderValue = document.getElementById('colorSlider').value;
      var sliderValueRGB = hex2rgb(sliderValue);
      document.getElementById('colorValue').innerHTML = sliderValue;
      var sliderValueCRGB = sliderValueRGB['r'] + ',' + sliderValueRGB['g'] + ',' + sliderValueRGB['b']
      console.log(sliderValueCRGB)
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/slider3?value=' + sliderValueCRGB, true);
      xhr.send();
    }

    const hex2rgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      return {
        r,
        g,
        b
      };
    }

    function updateSliderColor1(element) {
      var sliderValue = document.getElementById('color1Slider').value;
      var sliderValueRGB = hex2rgb(sliderValue);
      document.getElementById('color1Value').innerHTML = sliderValue;
      var sliderValueCRGB = sliderValueRGB['r'] + ',' + sliderValueRGB['g'] + ',' + sliderValueRGB['b']
      console.log(sliderValueCRGB)
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/slider4?value=' + sliderValueCRGB, true);
      xhr.send();
    }

    function updateSliderColor2(element) {
      var sliderValue = document.getElementById('color2Slider').value;
      var sliderValueRGB = hex2rgb(sliderValue);
      document.getElementById('color2Value').innerHTML = sliderValue;
      var sliderValueCRGB = sliderValueRGB['r'] + ',' + sliderValueRGB['g'] + ',' + sliderValueRGB['b']
      console.log(sliderValueCRGB)
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/slider5?value=' + sliderValueCRGB, true);
      xhr.send();
    }



    function updateSelect(element) {
      var selectValue = document.getElementById('mode').value;
      displayColor(selectValue)

      var xhr = new XMLHttpRequest();
      console.log(selectValue);
      xhr.open('GET', '/select?value=' + selectValue, true);
      xhr.send();
    }

    function displayColor(mode) {
      document.getElementById('color').style.display = 'none'
      document.getElementById('color1').style.display = 'none'
      document.getElementById('color2').style.display = 'none'

      if (mode == 2 || mode == 10 || mode == 11 || mode == 12) {
        document.getElementById('color').style.display = 'block'
      }
      if (mode == 3) {
        document.getElementById('color').style.display = 'block'
        document.getElementById('color1').style.display = 'block'
      }
      if (mode == 4) {
        document.getElementById('color').style.display = 'block'
        document.getElementById('color1').style.display = 'block'
        document.getElementById('color2').style.display = 'block'
      }
    }