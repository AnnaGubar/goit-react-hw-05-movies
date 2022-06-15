import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import * as eventsApi from '../../services/eventsApi';

const EventsView = () => {
  const location = useLocation();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsApi.fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <div>Events</div>
      {/* {isLoading && <div>Loading...</div>} */}
      {events.length > 0 && (
        <ul>
          {events.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location.pathname }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet/>
    </>
  );
};

export default EventsView;
