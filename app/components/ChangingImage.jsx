const React = require("react")
const d3 = require("d3");
const FadeImage = require("Components/FadeImage.jsx");

function ChangingImage({ imglist, delay, duration }) {
    const [currImg, setCurrImg] = React.useState(0);
    const listLen = React.useRef(imglist.length - 1);
    const intervalRef = React.useRef(null);
    const imgRef = React.useRef(null);
    React.useEffect(() => {
        intervalRef.current = setInterval(() => {
            d3.select(imgRef.current)
                .transition()
                .duration(duration)
                .style("opacity", "0");
            setTimeout(() => {
                if (currImg < listLen.current) {
                    setCurrImg((p => p + 1))
                }
                else {
                    setCurrImg(0);
                }
            }, duration);

        }, delay);
        return () => { clearInterval(intervalRef.current) };
    });
    return <FadeImage ref={imgRef} src={imglist[currImg]} duration={duration} />
}

module.exports = ChangingImage;
