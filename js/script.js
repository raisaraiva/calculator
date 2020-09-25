window.addEventListener('load', start);

var inputA = null;
var inputB = null;

var A = null;
var B = null;

var calculations = [
  {
    id: 1,
    label: 'O valor de A + B:',
    method: function method() {
      return A + B;
    }
  },
  {
    id: 2,
    label: 'O valor de A – B:',
    method: function method() {
      return A - B;
    }
  },
  {
    id: 3,
    label: 'O valor de B – A:',
    method: function method() {
      return B - A;
    }
  },
  {
    id: 4,
    label: 'O valor de A x B:',
    method: function method() {
      return A * B;
    }
  },
  {
    id: 5,
    label: 'O valor de A / B:',
    method: function method() {
      return div(A, B);
    }
  },
  {
    id: 6,
    label: 'O valor de B / A:',
    method: function method() {
      return div(B, A);
    }
  },
  {
    id: 7,
    label: 'O valor de A²:',
    method: function method() {
      return A * A;
    }
  },
  {
    id: 8,
    label: 'O valor de B²:',
    method: function method() {
      return B * B;
    }
  },
  {
    id: 9,
    label: 'Os divisores inteiros de A:',
    method: function method() {
      return divInt(A);
    }
  },
  {
    id: 10,
    label: 'Os divisores inteiros de B:',
    method: function method() {
      return divInt(B);
    }
  },
  {
    id: 11,
    label: 'O valor do fatorial de A:',
    method: function method() {
      return fac(A);
    }
  },
  {
    id: 12,
    label: 'O valor do fatorial de B:',
    method: function method() {
      return fac(B);
    }
  }
]

function start() {
  activateInput();
  preventFormSubmit();
  render();
}

function activateInput() {
  inputA = document.querySelector('#inputA');
  inputB = document.querySelector('#inputB');

  A = parseInt(inputA.value, 10);
  B = parseInt(inputB.value, 10);

  inputA.addEventListener('change', onChangeInputA);
  inputB.addEventListener('change', onChangeInputB);
}

function div(X, Y) {
  if (Y === 0) {
    return 'Divisão por 0';
  }

  return formatNumber((X / Y).toFixed(2));
}

function divInt(X) {
  var numbers = 2;
  var result = '1';

  for (var i = 2; i < X; i++) {
    if (X % i === 0) {
      numbers++;
      result += ', ' + i;
    }
  }

  result += ', ' + X + ' (' + numbers + ')';

  return result;
}

function fac(X) {
  if (X >= 21) {
    return 'Número muito grande';
  }

  var Y = 1;

  for (var i = 1; i < X; i++) {
    Y *= i;
  }

  return formatNumber((X * Y).toFixed(2));
}

function formatNumber(number) {
  return Intl.NumberFormat('pt-BR').format(number);
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');

  form.addEventListener('submit', handleFormSubmit);
}

function onChangeInputA(event) {
  A = parseInt(inputA.value, 10);

  render();
}

function onChangeInputB(event) {
  B = parseInt(inputB.value, 10);

  render();
}

function render() {
  var divResultados = document.querySelector('#divResultados');

  divResultados.innerHTML = '';
  divResultados.classList.add('row');

  for (var i = 0; i < calculations.length; i++) {
    var calculation = calculations[i];

    var div = document.createElement('div');
    var input = document.createElement('input');
    var label = document.createElement('label');

    label.textContent = calculation.label;
    input.value = calculation.method();

    div.classList.add('col');
    div.classList.add('s4');

    div.appendChild(label);
    div.appendChild(input);

    divResultados.appendChild(div);
  }
}