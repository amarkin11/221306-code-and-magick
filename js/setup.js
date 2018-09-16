'use strict';

var WIZARDS_AMOUNT = 4;
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupBlock = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var setupCoatColor = document.querySelector('.setup-wizard .wizard-coat');
var setupEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireballColor = document.querySelector('.setup-fireball-wrap');
var fireballColorValue = document.querySelector('.setup-fireball-wrap input');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== userName) {
    closePopup();
  }
};

var openPopup = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupBlock.classList.add('hidden');
  }
});

var randomArrayIndex = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var randomValue = function (arr) {
  return arr[randomArrayIndex(arr)];
};

var generateRandomWizard = function () {
  var randonWizard = {};
  randonWizard.name = randomValue(FIRST_NAMES) + ' ' + randomValue(SECOND_NAMES);
  randonWizard.coatColor = randomValue(COAT_COLORS);
  randonWizard.eyesColor = randomValue(EYES_COLORS);

  return randonWizard;
};

var wizards = [];

for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  wizards.push(generateRandomWizard());
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var createWizrads = function () {
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

createWizrads();

setupBlock.querySelector('.setup-similar').classList.remove('hidden');

setupCoatColor.addEventListener('click', function () {
  setupCoatColor.style.fill = randomValue(COAT_COLORS);
});

setupEyesColor.addEventListener('click', function () {
  setupEyesColor.style.fill = randomValue(EYES_COLORS);
});

setupFireballColor.addEventListener('click', function () {
  setupFireballColor.style.background = randomValue(FIREBALL_COLORS);
  fireballColorValue.setAttribute('value', randomValue(FIREBALL_COLORS));
});
