import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { trendId } = useParams();
  // useEffect(() => {
  //     HTTP запрос
  // }, []);
  return (
    <>
      <h1>MovieDetails: {trendId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
