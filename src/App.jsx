import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomeView from './Views/HomeView/HomeView';
import EventsView from './Views/EventsView/EventsView';
import EventSubView from './Views/EventSubView/EventSubView';
// import EventDetailsSubView from './Views/EventDetailsSubView/EventDetailsSubView';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsView />}>
          <Route path=":eventId" element={<EventSubView />}/>
        </Route>
        {/* <Route path="events/:eventId/details" element={<EventDetailsSubView />}/> */}
        {/* <Route path="*" element={<NotFoundView />}/> */}
      </Route>
    </Routes>
  );
}

