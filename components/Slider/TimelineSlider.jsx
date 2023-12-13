import { Icon } from '@iconify/react';
import { useTranslation } from 'next-i18next';

import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const { t } = useTranslation("index")

  const timelineData = [
    
    [
      {
        year: '2019',
        name: 'Google Awards',
        position: t("awards.position"),
        type: t("awards.type"),
      },
      {
        year: '2021',
        name: 'CSS Awards Design',
        position: t("awards.position2"),
        type: t("awards.type2"),
      },
    ],
    [
      {
        year: '2020',
        name: t("awards.name3"),
        position: t("awards.position3"),
        type: t("awards.type3"),
      },
      {
        year: '2022',
        name: t("awards.name4"),
        position: t("awards.position4"),
        type: t("awards.type4"),
      },
    ],
    [
      {
        year: '2019',
        name: 'Google Awards',
        position: t("awards.position5"),
        type: t("awards.type5"),
      },
      {
        year: '2021',
        name: 'CSS Awards Design',
        position: t("awards.position6"),
        type: t("awards.type6"),
      },
    ],
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
