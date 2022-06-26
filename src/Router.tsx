import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from './pages/Event';
import SubscribePage from './pages/Subscribe';


const Router: FunctionComponent = function () {
  return (
    <Routes>
      <Route path={'/'} element={<SubscribePage />} />
      <Route path={'/event'} element={<EventPage />} />
      <Route path={'/event/lessons/:slug'} element={<EventPage />} />
    </Routes>
  );
};

export default Router;