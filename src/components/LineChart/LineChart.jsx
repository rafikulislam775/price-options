import { LineChart as LC, Line } from "recharts";
const LineChart = () => {
  const studentMarksData = [
    { name: "Student A", math: 90, science: 85, history: 78, english: 92 },
    { name: "Student B", math: 78, science: 89, history: 92, english: 85 },
    { name: "Student C", math: 92, science: 76, history: 88, english: 91 },
    { name: "Student D", math: 85, science: 90, history: 82, english: 87 },
    { name: "Student E", math: 88, science: 82, history: 79, english: 94 },
  ];

  return (
    <div>
      <LC width={500} height={200} data={studentMarksData}>
        <Line dataKey={"math"} stroke="#8884d8"></Line>
        <Line dataKey={"science"} stroke="red"></Line>
        <Line dataKey={"history"} stroke="white"></Line>
        <Line dataKey={"english"} stroke="green"></Line>
      </LC>
    </div>
  );
};

export default LineChart;
