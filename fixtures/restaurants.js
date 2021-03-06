export const regions = [
  { id: 1, name: '서울' },
  { id: 2, name: '대전' },
  { id: 3, name: '대구' },
  { id: 4, name: '부산' },
  { id: 5, name: '광주' },
  { id: 6, name: '강원도' },
  { id: 7, name: '인천' },
];

export const initialState = {
  regions: [],
  categories: [],
  region: '',
  category: '',
  restaurants: [],
};

export const categories = [
  { id: 1, name: '한식' },
  { id: 2, name: '중식' },
  { id: 3, name: '일식' },
  { id: 4, name: '양식' },
  { id: 5, name: '분식' },
];

// 서울과 한식을 선택한 restaurants
export const restaurants = [
  {
    id: 1,
    categoryId: 1,
    name: '양천주가',
    address: '서울 강남구',
    information: '양천주가 in 서울 강남구',
  },
  {
    id: 6,
    categoryId: 1,
    name: '한국식 초밥',
    address: '서울 강남구',
    information: '한국식 초밥 in 서울 강남구',
  },
];
