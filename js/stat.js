
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_Y = 240;
var TEXT_Y = 260;
var GAP = 50;

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#333';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var maxTime = getMaxElement(times);
  var color = 'rgba(255, 0, 0, 1)';

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#333';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, TEXT_Y);
    // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X + GAP+ (GAP + BAR_WIDTH) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};
