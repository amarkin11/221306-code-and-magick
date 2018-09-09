'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW_X = CLOUD_X + 10;
var CLOUD_SHADOW_Y = CLOUD_Y + 10;
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_COLOR = '#333';
var TEXT_FONT = '16px PT Mono';
var TEXT_WINNER = 'Ура вы победили!';
var TEXT_WINNER_X = 120;
var TEXT_WINNER_Y = 40;
var TEXT_RESULT = 'Список результатов:';
var TEXT_RESULT_X = 120;
var TEXT_RESULT_Y = 60;
var TEXT_TIME_Y = 90;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_Y = 250;
var TEXT_Y = 270;
var GAP = 50;
var GAP_X = CLOUD_X + GAP;
var BAR_COLOR_MY = 'rgba(255, 0, 0, 1)';

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  ctx.fillStyle = CLOUD_SHADOW_COLOR;
  ctx.fillRect(CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.fillText(TEXT_WINNER, TEXT_WINNER_X, TEXT_WINNER_Y);
  ctx.fillText(TEXT_RESULT, TEXT_RESULT_X, TEXT_RESULT_Y);

  var maxTime = getMaxElement(times);

  var getRandomColor = function (min, max) {
    return Math.random(min, max);
  };

  for (var i = 0; i < players.length; i++) {
    var barColorPlayers = 'rgba(0, 0, 255,' + getRandomColor(0.2, 1).toFixed(1) + ')';
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], GAP_X + (GAP + BAR_WIDTH) * i, TEXT_Y);
    ctx.fillStyle = players[i] === 'Вы' ? BAR_COLOR_MY : barColorPlayers;
    ctx.fillRect(GAP_X + (GAP + BAR_WIDTH) * i, BAR_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime));
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.round(times[i]), GAP_X + (GAP + BAR_WIDTH) * i, TEXT_TIME_Y);
  }
};
