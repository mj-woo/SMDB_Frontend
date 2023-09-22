export const ALL_GENRE = [
  {
    name: "전체",
    value: "all",
  },
  {
    name: "드라마",
    value: "drama",
  },
  {
    name: "액션",
    value: "action",
  },
  {
    name: "코미디",
    value: "comedy",
  },
  {
    name: "스릴러",
    value: "thriller",
  },
  {
    name: "SF/판타지",
    value: "sf",
  },
  {
    name: "로맨스",
    value: "romance",
  },
  {
    name: "어드벤처",
    value: "adventure",
  },
  {
    name: "공포",
    value: "horror",
  },
  {
    name: "애니메이션",
    value: "animation",
  },
  {
    name: "범죄",
    value: "crime",
  },
];

export const VIEW_JSON = [
  {
    name: "상영 예정",
    value: "before",
  },
  {
    name: "상영 중",
    value: "now",
  },
  {
    name: "상영 종료",
    value: "after",
  },
];

export const SCREENING_TABS = [
  {
    name: "전체",
    value: "all",
  },
  ...VIEW_JSON,
];
