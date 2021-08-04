import React, { useEffect, useState } from "react";
import { Input, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchForm.css";
import { useDispatch } from "react-redux";
import { fetchSearchedData, fetchMoviesFromApi } from "../../store/movie-slice";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searched..!!");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // Perfrom Api call for search
    if (inputText !== "") {
      const delayedDebounceFn = setTimeout(() => {
        dispatch(fetchSearchedData(inputText));
      }, 1000);
      return () => clearTimeout(delayedDebounceFn);
    } else {
      dispatch(fetchMoviesFromApi());
    }
  }, [inputText, dispatch]);

  return (
    <Row>
      <Col span={14} offset={5}>
        <form onSubmit={handleSubmit}>
          <Input
            className="input"
            placeholder="Search a film..."
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>
            <SearchOutlined />
            Search
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default SearchForm;
