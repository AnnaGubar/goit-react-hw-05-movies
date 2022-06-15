import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as eventsAPI from 'services/eventsApi';

 const useFetchEvent = () => {
  const params = useParams();
  const eventsId = params.eventsId;
  const [event, setEvent] = useState(null);
  useEffect(() => {
    eventsAPI.fetchEventById(eventsId).then(setEvent);
  }, [eventsId]);

  // console.log(event);
  return event;
};

export default useFetchEvent;