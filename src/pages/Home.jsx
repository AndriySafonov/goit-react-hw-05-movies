import { Link } from 'react-router-dom';
const Home = () => {
  // useEffect(() => {
  //     HTTP запрос
  // }, []);
  return (
    <>
      <h1>Trending today</h1>
      <div>
        {['trend-1', 'trend-2', 'trend-3', 'trend-4', 'trend-5'].map(trend => {
          return <Link key={trend} to={`/trends/${trend}`}>{trend}</Link>;
        })}
      </div>
    </>
  );
};
export default Home;
