import { ChartBar } from "../ChartBar";
import "./index.css";

export const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
        />
      ))}
    </div>
  );
};
