import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "../../../utils/utils";
import { searchProducts } from "../../../redux/pharm/operations";
import { CustomSelect, Form, Label, SubmitBtn } from "./Filter.styled";
import { FiSearch } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";

const customStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "60px",
    border: "1px solid rgba(29, 30, 33, 0.10)",
    height: "46px",
    background: "#fff",
    fontSize: "12px",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    paddingLeft: "18px",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "rgba(29, 30, 33, 0.40)",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textTransform: "capitalize",
    color: "rgba(29, 30, 33, 0.40)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
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
      <CustomSelect
        options={options}
        placeholder="Product category"
        styles={customStyles}
        onChange={handleCategoryChange}
        value={selectedCategory}
      />
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
