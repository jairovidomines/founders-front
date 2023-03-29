import FilterStyled from "./FilterStyled";

const Filter = (): JSX.Element => {
  return (
    <FilterStyled className="filter">
      <span className="filter__text">Filter by</span>
      <select
        className="filter__select"
        name="monthlyUsers"
        aria-label="filter by"
        onChange={() => {}}
      >
        <option hidden>Monthly users</option>
        <option value="newbies">0 - 25.000</option>
        <option value="beginners">25.000 - 50.000</option>
        <option value="intermediate">50.000 - 75.000</option>
        <option value="professional">75.000 - 100.000</option>
        <option value="experts">100.000 - 150.000</option>
        <option value="nextLevel">+ 200.000</option>
      </select>
    </FilterStyled>
  );
};

export default Filter;
