import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./caraousel.css";
import Slider, { Settings } from "react-slick";

export default function Caraousel(props: Settings) {
  return <Slider {...props}>{props.children}</Slider>;
}
