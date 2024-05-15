import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import PropTypes from "prop-types";

export default function MyLineChart(props) {
    console.log(props)
    return (
        <Box>
            <LineChart 
                xAxis={[{ 
                    data: [1, 2, 3, 5, 8, 10],
                    
                 }]}
                series={[
                    {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                sx={{
                    border: '1px solid black',
                    borderRadius: "45px",
                    padding: "10px",
                    width: "100%",
                    color: "black",
                    filter: "invert()"
                }}
                
                height={300}
            />
        </Box>
    )
}

MyLineChart.propTypes = {
    data: PropTypes.any,
}

