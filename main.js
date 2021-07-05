//event listener on submit button
document.querySelector('form').addEventListener('submit', clan)

function clan(e){
  e.preventDefault()
  //grab values from all the checked radios and assign them to variables
  let pickedColor = document.querySelectorAll('.color:checked')[0].value;
  let pickedTransit = document.querySelectorAll('.transport:checked')[0].value;
  let pickedValues = document.querySelectorAll('.valuables:checked')[0].value;
  let pickedRole = document.querySelectorAll('.role:checked')[0].value;
  let pickedTrait = document.querySelectorAll('.trait:checked')[0].value;

  //create a class for name options template
  class WuTang {
    constructor(color, transit, values, role, trait){
      this.color = parseInt(color),
      this.transit = parseInt(transit),
      this.values = parseInt(values),
      this.role = parseInt(role),
      this.trait = parseInt(trait)
    }
  }
  //create objects that pass the variables containing the values from checked radioes
  let userTang = new WuTang(pickedColor, pickedTransit, pickedValues, pickedRole, pickedTrait);

  //make sum equal to zero, to then add object property values
  let sum = 0;
  //make object values into a string and add each value to sum
  Object.values(userTang).forEach(num => {
    sum = sum+num;
  })
  //return name of checkResult comparison to the DOM
  document.querySelector('h2').textContent = checkResult(sum);
}

//make a function to compare values and return a wutang name to the DOM
  function checkResult(sum){
    if (5 === sum){
      return 'RZA-recta'
    }else if(6 === sum){
      return 'StinkyLeg'
    }else if(7 === sum){
      return 'Wavy Baller'
    }else if(8 === sum){
      return 'Ghost Killah'
    }else if(9 === sum){
      return 'Blazer-Z'
    }else if(10 === sum){
      return 'Reak-w-me'
    }else{
      return 'no name for this'
    }
  }
