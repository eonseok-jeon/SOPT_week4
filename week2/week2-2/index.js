const INIT_BALANCE = 0
const HISTORY_LIST = [
  {
    category: '식비',
    location: '버거킹 고양스타필드점',
    price: 10_800,
    type: '지출',
  },
  {
    category: '취미',
    location: '더클라임 강남점',
    price: 23_000,
    type: '지출',
  },
  {
    category: '월급',
    location: 'CU 고양원당점',
    price: 300_000,
    type: '수입',
  },
  {
    category: '쇼핑',
    location: '쿠팡',
    price: 4_200,
    type: '수입',
  },
]

const TOTAL_HISTORY = document.querySelector('.detail__list');

HISTORY_LIST.forEach(({ category, location, price, type }) => {
  const EACH_HISTORY = document.createElement('li');
  EACH_HISTORY.classList.add('detail__list__item');
  TOTAL_HISTORY.appendChild(EACH_HISTORY);
  
  const HISTORY_CATEGORY = document.createElement('p');
  HISTORY_CATEGORY.classList.add('detail__list__item__category');
  HISTORY_CATEGORY.textContent = category;
  EACH_HISTORY.appendChild(HISTORY_CATEGORY);
  
  const HISTORY_DETAIL = document.createElement('div');
  HISTORY_DETAIL.classList.add('detail__list__item__history');
  EACH_HISTORY.appendChild(HISTORY_DETAIL);

  const HISTORY_LOCATION = document.createElement('p');
  HISTORY_LOCATION.classList.add('detail__list__item__history__content');
  HISTORY_LOCATION.textContent = location;
  HISTORY_DETAIL.appendChild(HISTORY_LOCATION);

  const HISTORY_PRICE = document.createElement('p');
  HISTORY_PRICE.classList.add('detail__list__item__history__price');
  type === '수입' ? HISTORY_PRICE.classList.add('income') : HISTORY_PRICE.classList.add('spending');
  HISTORY_PRICE.textContent = type === '수입' ? price : (price * -1);
  HISTORY_DETAIL.appendChild(HISTORY_PRICE);
})