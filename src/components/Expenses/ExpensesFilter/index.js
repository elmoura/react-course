import "./index.css";

export const ExpensesFilter = ({ selectedYear, onSelectYear }) => {
  const selectYearHandler = (event) => {
    const year = event.target.value;

    onSelectYear(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectYearHandler} value={selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};
