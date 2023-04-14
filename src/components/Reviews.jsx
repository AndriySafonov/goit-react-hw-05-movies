import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { trendId } = useParams();
  // useEffect(() => {
  //     HTTP запрос
  // }, []);
  return <div>Reviews: {trendId}</div>;
};

export default Reviews;