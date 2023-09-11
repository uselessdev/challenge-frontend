import styled from 'styled-components'

export const SliderWrapper = styled.div`
  margin: 0px;

  .slick-slider {
    width: 100%;
    max-width: 100vw;
    overflow: hidden;

    display: block;
    position: relative;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    overflow: hidden;
    margin: 0;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
    margin-right: ${props => props.theme.sizes[4]};
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-disabled {
    display: none !important;
  }
`

const ArrowSlick = styled.div`
  background-color: #fff;
  color: transparent;
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  border: 1px solid #f1f7fc;
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  right: -18px;

  @media (max-width: 480px) {
    display: none !important;
  }

  @media (min-width: 992px) {
    .slick-disabled {
      display: none !important;
    }
  }

  &.slick-hidden {
    display: none;
  }
`

export const ArrowNext = styled(ArrowSlick)`
  right: 26px;
`

export const ArrowPrev = styled(ArrowSlick)`
  left: 26px;
`
