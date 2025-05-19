import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../../../utils/utils";
import { searchProducts } from "../../../redux/pharm/operations";
import { CustomSelectWrapper, Form, Label, SubmitBtn } from "./Filter.styled";
import { FiSearch } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";
import Select from "react-select";

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "60px",
    border: "none",
    height: "46px",
    outline: "none",
    background: "#fff",
    boxShadow: state.isFocused ? "0 0 5px #3f945f" : "none",
    fontSize: "12px",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "20px",
    overflow: "hidden",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#3f945f"
      : state.isFocused
      ? "rgba(63, 148, 95, 0.1)"
      : null,
    color: state.isSelected ? "#fff" : "#1d1e21",
    cursor: "pointer",
  }),
  valueContainer: (base) => ({
    ...base,
    paddingLeft: "18px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "rgba(29, 30, 33, 0.40)",
  }),
  singleValue: (base) => ({
    ...base,
    textTransform: "capitalize",
    color: "rgba(29, 30, 33, 0.40)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    paddingRight: "8px",
  }),
};

const options = [
  { value: "", label: "All" },
  { value: "Dental Care", label: "Dental Care" },
  { value: "Hand", label: "Hand" },
  { value: "Head", label: "Head" },
  { value: "Heart", label: "Heart" },
  { value: "Leg", label: "Leg" },
  { value: "Medicine", label: "Medicine" },
  { value: "Skin Care", label: "Skin Care" },
];

const Filter = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pharm.currentPage);
  const [selectedCategory, setSelectedCategory] = useState(options[0]);
  const [searchedName, setSearchedName] = useState("");
  const windowWidth = useWindowSize();
  const limit = windowWidth >= 1440 ? 12 : 9;

  const category = selectedCategory?.value || "";

  useEffect(() => {
    dispatch(
      searchProducts({
        category,
        name: searchedName,
        page: currentPage,
        limit,
      })
    );
  }, [dispatch, category, searchedName, currentPage, totalPages, limit]);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    dispatch(
      searchProducts({
        category: selectedOption?.value || "",
        name: searchedName,
        page: 1,
        limit,
      })
    );
  };

  const handleSearchInputChange = (e) => {
    setSearchedName(e.target.value);
    dispatch(
      searchProducts({
        category,
        name: e.target.value,
        page: 1,
        limit,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      searchProducts({
        category,
        name: searchedName,
        page: 1,
        limit,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CustomSelectWrapper>
        <Select
          options={options}
          placeholder="Product category"
          styles={customStyles}
          onChange={handleCategoryChange}
          value={selectedCategory}
          onMenuOpen={() => {}}
          onMenuClose={() => {}}
          onInputChange={() => {}}
        />
      </CustomSelectWrapper>
      <Label htmlFor="name">
        <input
          type="text"
          id="name"
          placeholder="Search medicine"
          onChange={handleSearchInputChange}
        />
        <FiSearch />
      </Label>
      <SubmitBtn type="submit">
        <LuFilter />
        Filter
      </SubmitBtn>
    </Form>
  );
};

export default Filter;
