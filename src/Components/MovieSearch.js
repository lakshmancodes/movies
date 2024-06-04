import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import Nav from './navbar'


const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 70%;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: #ff3333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MovieTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #e50914;
`;

const MovieProperty = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: #666666;
`;

const MoviePlot = styled.p`
  font-size: 18px;
  font-style: italic;
  margin-bottom: 20px;
  color: #333333;
`;

const MoviePoster = styled.img`
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const RatingsTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333333;
  font-weight: bold;
`;

const RatingItem = styled.li`
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #666666;
`;

const AdditionalInfoTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333333;
  font-weight: bold;
`;

const AdditionalInfoProperty = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: #666666;
`;

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=d7df9d1c&t=${searchTerm}`
      );
      const data = await response.json();
      if (data.Response === 'True') {
        setMovieData(data);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError('An error occurred while fetching movie data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Nav/>
    <Container>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Enter movie title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch} disabled={isLoading}>
          {isLoading ? <FaSearch style={{ fontSize: '18px', marginRight: '5px' }} /> : 'Search'}
        </SearchButton>
      </SearchContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {movieData && (
        <MovieInfo>
          <MovieDetails>
            <MovieTitle>{movieData.Title}</MovieTitle>
            <MovieProperty>Year: {movieData.Year}</MovieProperty>
            <MovieProperty>Rated: {movieData.Rated}</MovieProperty>
            <MovieProperty>Released: {movieData.Released}</MovieProperty>
            <MovieProperty>Runtime: {movieData.Runtime}</MovieProperty>
            <MovieProperty>Genre: {movieData.Genre}</MovieProperty>
            <MovieProperty>Director: {movieData.Director}</MovieProperty>
            <MovieProperty>Writer: {movieData.Writer}</MovieProperty>
            <MovieProperty>Actors: {movieData.Actors}</MovieProperty>
            <MoviePlot>Plot: {movieData.Plot}</MoviePlot>
            <MovieProperty>Language: {movieData.Language}</MovieProperty>
            <MovieProperty>Country: {movieData.Country}</MovieProperty>
            <MovieProperty>Awards: {movieData.Awards}</MovieProperty>
          </MovieDetails>
          <div>
            <MoviePoster src={movieData.Poster} alt={movieData.Title} />
            <RatingsTitle>Ratings:</RatingsTitle>
            <ul>
              {movieData.Ratings.map((rating, index) => (
                <RatingItem key={index}>
                  {rating.Source}: {rating.Value}
                </RatingItem>
              ))}
            </ul>
            <AdditionalInfoTitle>Additional Info:</AdditionalInfoTitle>
            <AdditionalInfoProperty>Metascore: {movieData.Metascore}</AdditionalInfoProperty>
            <AdditionalInfoProperty>IMDb Rating: {movieData.imdbRating}</AdditionalInfoProperty>
            <AdditionalInfoProperty>IMDb Votes: {movieData.imdbVotes}</AdditionalInfoProperty>
            <AdditionalInfoProperty>IMDb ID: {movieData.imdbID}</AdditionalInfoProperty>
            <AdditionalInfoTitle>Box Office:</AdditionalInfoTitle>
            <AdditionalInfoProperty>{movieData.BoxOffice}</AdditionalInfoProperty>
            <AdditionalInfoTitle>DVD:</AdditionalInfoTitle>
            <AdditionalInfoProperty>{movieData.DVD}</AdditionalInfoProperty>
            <AdditionalInfoTitle>Type:</AdditionalInfoTitle>
            <AdditionalInfoProperty>{movieData.Type}</AdditionalInfoProperty>
          </div>
        </MovieInfo>
      )}
    </Container>
    </>
  );
};

export default MovieSearch;