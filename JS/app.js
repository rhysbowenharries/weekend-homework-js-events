document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  // const select = document.querySelector('#select');
  //   select.addEventListener('change', handleSelectChange);

  const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);






});

const handleNewItemFormSubmit = function(event){
  event.preventDefault()

  const monsterNameInput = document.createElement('li')
  monsterNameInput.textContent = event.target.monsterNameInput.value;
  const monsterName = document.querySelector('#monstersMade')
  monsterName.appendChild(monsterNameInput);

  const listItem = document.createElement('li')
  listItem.textContent = event.target.fightingStyleSelect.value
  const list = document.querySelector('#monstersMade')
  list.appendChild(listItem)


  const speedBarItem = document.createElement('li')
  speedBarItem.textContent = `Speed: ${event.target.speedBar.value}`
  const speedInput = document.querySelector('#monstersMade')
  speedInput.appendChild(speedInput)

    event.target.reset();
}


const handleButtonClick = function () {
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'You clicked it!... I like your style.';
};

const handleDeleteAllClick = function (event) {
  const monstersList = document.querySelector('#monstersMade');
  monstersList.textContent = '';
}
