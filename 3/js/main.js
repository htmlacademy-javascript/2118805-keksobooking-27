const OFFERS_COUNT = 10;

const TITLES = [
  'Лучший номер в Токио',
  'Номер с лучшим видом на Токийский залив',
  'Лучшее соотношение цены и качества в Большом Токио',
  'Чистый и уютный номер',
  'Лучшая шумоизоляция, даже члены якудза могут работать своими тати, не мешая соседям',
  'Номер с джакузи, снимай кимоно и наслаждайся пузырьками',
  'Номер для семейной пары',
  'Отдельный домик с видом на цветущую вишню, приведи сюда свою тян',
  'Гостиница с парком в шаговой доступности, можно поиграть в шашки Го',
  'Бронирование без предоплаты',
  'Номер с баром, бутылка саке в подарок',
  'Номер с караоке, есть почти все Гачимучи ремиксы'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Кондиционер в номере',
  'Туча розеток и электроплита',
  'Сейф с кодовым замком',
  'Шкаф с бельем',
  'Панорамные окна',
  'Теплые полы'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Возвращает случайное целое число
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) return NaN;
  if (b < a) [b, a] = [a, b];
  const lower = Math.ceil(a);
  const upper = Math.floor(b);
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Возвращает случайное целое число с плавающей точкой
function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) return NaN;
  if (b < a) [b, a] = [a, b];
  const result = Math.random() * (b - a) + a;
  return + result.toFixed(digits);
}

// Возвращает случайный элемент из массива
const getRandomElement = (element) => {
  const random = Math.floor(Math.random() * (element.length - 1));
  return element[random];
};


// Возвращает строку с неповторяющимся значением
let number = 0;
const getAvatarNumber = () => {
  for (let i = 1; i <= OFFERS_COUNT; i++) {
    number += 1;
    return number < 10 ? `img/avatars/user0${number}.png` : `img/avatars/user${number}.png`;
  }
};

//Возвращает массив случайной длины из случайных неповторяющихся значений
const getRandomArray = (array) => {
  const randomArray = new Array (getRandomPositiveInteger(1, array.length-1)).fill(' ').map(() => (getRandomElement(array)));
  const uniqueElementsArray = [...new Set(randomArray)];
  return uniqueElementsArray;
};

//Создает случайные координаты
const x = getRandomPositiveFloat(35.65000, 35.70000, 5);
const y = getRandomPositiveFloat(139.7000, 139.80000, 5);

// Создает одно объявление
const create = () => {
  return {
    author: {
      avatar: getAvatarNumber(),
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${x}, ${y}`,
      price: getRandomPositiveInteger(1000,60000),
      type: getRandomElement(TYPES),
      rooms:getRandomPositiveInteger(1,3),
      guests: getRandomPositiveInteger(1,5),
      checkin: getRandomElement(TIMES),
      checkout: getRandomElement(TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS)
    },
    location: {
      lat: x,
      lng: y,
    },
  };
};

// Генерирует 10 объявлений
const generation = new Array(OFFERS_COUNT).fill('').map(() => create());
generation
