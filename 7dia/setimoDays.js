function Numero(elementId) {
    var valor = document.getElementById('area');
  
    if (valor.value == '0' || valor.value == 'Syntax error') {
      valor.value = elementId.textContent;
    } else {
  
      valor.value += elementId.textContent;
    }
  }
  
  function Limpar() {
    document.getElementById('area').value = '0';
    document.getElementById('dec').disabled = false;
  }
  
  function Operacao(elementId) {
    var operacoes = document.getElementById('area');
    if (operacoes.value == '0' || operacoes.value == 'erro digite novamente!') {
      operacoes.value = '0';
    } else {
      operacoes.value += elementId.textContent;
      document.getElementById('dec').disabled = false;
    }
  }
  
  function setDecimal(elementId, status) {
    var outputValueTo = document.getElementById('area');
    outputValueTo.value += elementId.textContent;
    document.getElementById('dec').disabled = status;
  }
  
  function calcule() {
  
    try {
  
      var field1txt = document.getElementById('area');
      if (field1txt.value != '') {
        var calculateResult = eval(field1txt.value);
        field1txt.value = calculateResult;
      }
    } catch (err) {
  
      field1txt.value = 'erro! digite novamente';
  
    }
  
  }
  