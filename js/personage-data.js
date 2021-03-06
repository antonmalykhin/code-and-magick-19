'use strict';

(function () {
  /**
   * Дефолтные настройки персонажа
   * @constant
   * @type {object}
   */
  var DefaultPersonage = {
    COAT_COLOR: 'rgb(101, 137, 164)',
    EYES_COLOR: 'black',
    FIREBALL_COLOR: '#ee4830'
  };

  /**
   * Список имен персонажа
   * @constant
   * @type {array}
   */
  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  /**
   * Список фамилий персонажа
   * @constant
   * @type {array}
   */
  var LAST_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  /**
   * Список цветов одежды персонажа
   * @constant
   * @type {array}
   */
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  /**
   * Список цветов глаз персонажа
   * @constant
   * @type {array}
   */
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  /**
   * Список цветов фаербола персонажа
   * @constant
   * @type {array}
   */
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  window.personageData = {
    FIRST_NAMES: FIRST_NAMES,
    LAST_NAMES: LAST_NAMES,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    DefaultPersonage: DefaultPersonage
  };
})();
