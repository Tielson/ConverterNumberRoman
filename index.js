const numberMap = {

  0: [
    ''
    , 'I'
    , 'II'
    , 'III'
    , 'IV'
    , 'V'
    , 'VI'
    , 'VII'
    , 'VIII'
    , 'IX'
  ]
  , 1: [
    ''
    , 'X'
    , 'XX'
    , 'XXX'
    , 'XL'
    , 'L'
    , 'LX'
    , 'LXX'
    , 'LXXX'
    , 'XC'
  ]
  , 2: [
    ''
    , 'C'
    , 'CC'
    , 'CCC'
    , 'CD'
    , 'D'
    , 'DC'
    , 'DCC'
    , 'DCCC'
    , 'CM'
  ]
  , 3: [
    ''
    , 'M'
    , 'MM'
    , 'MMM'
  ]

};


function romanJs(input) {

  input = input.replace(/[^0-9]/, "");
  if (input == '') return '';

  let number = parseInt(input);

  if (number > 3999) {
    return "número maximo '3999'";
  }

  let orderNumber = Number(input).toString();
  let orderLength = orderNumber.length;
  let unityTenHundred = orderLength - 1;


  let newOrder = '';
  for (let i = unityTenHundred; i >= 0; i--) {
    newOrder = newOrder + orderNumber.charAt(i);
  }

  let finalCast = '';
  for (let i = unityTenHundred; i >= 0; i--) {
    let auxlet = parseInt(newOrder.charAt(i));
    finalCast = finalCast + numberMap[i][auxlet];
  }

  return finalCast;
}


document.getElementById("decimal").addEventListener('keyup', function () {
  let romanNumber = romanJs(this.value);

  document.getElementById("roman").value = romanNumber;

  let numberCheck = this.value.replace(/[^0-9]/, "");
  if (numberCheck == '') return false;

  let proleteal = 'http://numeracaoromana.babuo.com/' + numberCheck + '-em-numeros-romanos';
  document.getElementById("prova-real-box").style = "display: block";
  document.getElementById("prova-real").href = proleteal;
  document.getElementById("prova-real").innerHTML = 'Checar:' + numberCheck;
});