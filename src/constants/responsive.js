// 슬라이드 사이즈 설정
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    partialVisibilityGutter: 20,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
    // partialVisibilityGutter: 10,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
    // slidesToSlide: 1, // optional, default to 1.
  },
};
