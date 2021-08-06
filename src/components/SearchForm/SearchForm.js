import React, { useEffect, useState } from "react";
import { Input, Col, Row } from "antd";
import "./SearchForm.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchedData, fetchMoviesFromApi } from "../../store/movie-slice";
import Movies from "../Movie/Movies";
import GenreScroll from "../Movie/GenreScroll";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");
  const [ifInput, setIfInput] = useState(false);

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
        setIfInput(true);
      }, 1000);
      return () => clearTimeout(delayedDebounceFn);
    } else {
      dispatch(fetchMoviesFromApi());
      setIfInput(false);
    }
  }, [inputText, dispatch]);

  const moviesList = useSelector((state) => state.movie.data);
  const SearchBox = (
    <Row>
      <Col span={14} offset={5}>
        <form onSubmit={handleSubmit}>
          <Input
            className="input"
            placeholder="Search a film..."
            onChange={handleChange}
          />
        </form>
      </Col>
    </Row>
  );

  return (
    <>
      {SearchBox}
      {ifInput && <Movies />}
      {!ifInput && <GenreScroll list={moviesList} />}
    </>
  );
};

export default SearchForm;
