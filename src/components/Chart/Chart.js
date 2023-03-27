import CharBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPonitsValue = props.dataPonits.map(dataPonit => dataPonit.value);
  const totalMaximum = Math.max(...dataPonitsValue);

  return (
    <div className="chart">
      {props.dataPonits.map((dataPonits) => (
        <CharBar
          key={dataPonits.label} // every chartbar has it's own unique lable so we can use label as id
          value={dataPonits.value}
          label={dataPonits.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
export default Chart;
