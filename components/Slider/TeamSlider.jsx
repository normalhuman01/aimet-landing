import { Icon } from "@iconify/react";
import Slider from "react-slick";
import { useStore } from "@/store";
import Div from "../Div";
import Team from "../Team";

export default function TeamSlider() {
  const teamData = useStore((store) => store.teamAimet);

  /** Team Member Data **/
  /* const teamData = [
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_2.jpeg',
      memberName: 'Olinaz Fushi',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_3.jpeg',
      memberName: 'David Elone',
      memberDesignation: 'React Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_4.jpeg',
      memberName: 'Melina Opole',
      memberDesignation: 'WP Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/member_1.jpeg',
      memberName: 'Melon Bulgery',
      memberDesignation: 'Product Designer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
  ]; */
  /** Slider Settings **/

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
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
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
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
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData?.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.attributes.imagen.data.attributes.url}
            memberName={item.attributes.nombre}
            memberDesignation={item.attributes.especialidad}
            memberSocial={{
              linkedin: item.attributes.linkedin,
              twitter: item.attributes.twitter,
              github: item.attributes.github,
              facebook: item.attributes.facebook,
            }}
          />
        </Div>
      ))}
      {teamData?.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.attributes.imagen.data.attributes.url}
            memberName={item.attributes.nombre}
            memberDesignation={item.attributes.especialidad}
            memberSocial={{
              linkedin: item.attributes.linkedin,
              twitter: item.attributes.twitter,
              github: item.attributes.github,
              facebook: item.attributes.facebook,
            }}
          />
        </Div>
      ))}
    </Slider>
  );
}
