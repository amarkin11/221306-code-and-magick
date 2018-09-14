'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomValue = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: FIRST_NAMES[getRandomValue(FIRST_NAMES)] + ' ' + SECOND_NAMES[getRandomValue(SECOND_NAMES)],
    coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
  })
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var createWizards = function () {
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

createWizards();

setupBlock.querySelector('.setup-similar').classList.remove('hidden');
