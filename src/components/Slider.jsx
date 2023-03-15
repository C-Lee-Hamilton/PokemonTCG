import ReactSlider from "react-slider";
const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderTrack={(props, state) => <div {...props} />}
    >
      Slide
    </ReactSlider>
  );
};
export default Slider;
