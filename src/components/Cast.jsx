import { useParams } from 'react-router-dom';

const Cast = () => {
  const { trendId } = useParams();
  // useEffect(() => {
  //     HTTP запрос
  // }, []);
  return <div>Cast: {trendId}</div>;
};

export default Cast;
