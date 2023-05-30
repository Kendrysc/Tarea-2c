var historyList = [];

function appendToDisplay(value) {
  var display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  var display = document.getElementById('display');
  display.value = '';
}

function calculate() {
  var display = document.getElementById('display');
  var result;
  try {
    result = eval(display.value);
    display.value = result;
    historyList.push(display.value);
    addToHistoryList(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function addToHistoryList(value) {
  var historyListElement = document.getElementById('history-list');
  var listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(value));
  historyListElement.appendChild(listItem);
}

function clearHistory() {
  var historyListElement = document.getElementById('history-list');
  historyListElement.innerHTML = '';
  historyList = [];
}
