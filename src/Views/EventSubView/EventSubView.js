import { Link } from 'react-router-dom';
import useFetchEvent from '../../hooks/useFetchEvent';
// import { useLocation } from 'react-router-dom';

const EventSubView = () => {
  const event = useFetchEvent();
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      {!event && <h2>Загружаем...</h2>}
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt="" width="500" />
          <Link to="details">
          {/* <Link to="details" state={location.state}> */}
            More details
          </Link>
        </>
      )}
    </>
  );
};

export default EventSubView;