import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { fetchMovieById } from 'services/api';
import MovieCard from '../MovieCard/MovieCard';
import { Button, Container, StyledLink } from './MovieDetails.styled';
import { LoadingIndicator } from '../SharedLayout/LoadingDots';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <StyledLink to={location?.state?.from ?? '/'}>
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Go back
          </Button>
        </StyledLink>

        <MovieCard movie={selectedMovie} />

        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;