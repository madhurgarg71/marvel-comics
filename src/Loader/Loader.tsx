import "./loader.css";

export default function Loader() {
  return (
    <div className="container">
      <div className="circle outer-lv3">
        <div className="circle outer-lv2">
          <div className="circle outer-lv1">
            <div className="center">
              <div className="arrow top"></div>
              <div className="arrow left"></div>
              <div className="arrow right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
