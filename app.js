const deleteButton = document.querySelector('#button-basket');
const deleteCancelButton = document.querySelector('#button-basket-cancel');
const deleteSubmitButton = document.querySelector('#button-basket-submit');
const deleteWindow = document.querySelector('#window-basket');

function onDeleteButtonClick(event) {
  event.preventDefault();
  deleteWindow.classList.add('delete-window-wrapper_open');
}

function onDeleteCancelButtonClick(event) {
  event.preventDefault();
  deleteWindow.classList.remove('delete-window-wrapper_open');
}

function onDeleteSubmitButtonClick(event) {
  event.preventDefault();
  deleteWindow.classList.remove('delete-window-wrapper_open');
}

if (deleteButton && deleteWindow) {
  deleteButton.addEventListener('click', onDeleteButtonClick);
}

if (deleteCancelButton && deleteWindow) {
  deleteCancelButton.addEventListener('click', onDeleteCancelButtonClick);
}

if (deleteSubmitButton && deleteWindow) {
  deleteSubmitButton.addEventListener('click', onDeleteSubmitButtonClick);
}
