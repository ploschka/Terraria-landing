const React = require("react")
const d3 = require("d3");

const FadeImage = React.forwardRef(({ src, duration }, ref) => {

    d3.select(ref.current)
        .transition()
        .duration(duration)
        .delay(0)
        .style("opacity", "1");
    return <img ref={ref} src={src} />
})

module.exports = FadeImage;
