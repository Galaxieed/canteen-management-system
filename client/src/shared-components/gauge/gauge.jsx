import PropTypes from "prop-types";

import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
  } from '@mui/x-charts/Gauge';


  function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  
    if (valueAngle === null) {
      // No value to display
      return null;
    }
  
    const target = {
      x: cx + outerRadius * Math.sin(valueAngle),
      y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
      <g>
        <circle cx={cx} cy={cy} r={5} fill="yellow" />
        <path
          d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
          stroke="black"
          strokeWidth={3}
        />
      </g>
    );
  }

export default function MyGauge(props) {
    console.log(props);
    return (
        <GaugeContainer
            height={300}
            startAngle={-110}
            endAngle={110}
            value={30}
            cornerRadius={30}

            sx={{
              border: "1px solid black",
              borderRadius: "45px",
              width: "100%",
              padding: "10px",
              filter: "invert()",
            }}
        >
        <GaugeReferenceArc />
        <GaugeValueArc />
        <GaugePointer />
        </GaugeContainer> 
    )
}

MyGauge.propTypes = {
    data: PropTypes.any
}