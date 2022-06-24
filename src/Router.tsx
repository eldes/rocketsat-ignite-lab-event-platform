import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import EventPage from './pages/Event';


const Router: FunctionComponent = function () {
  return (
    <Routes>
      <Route path={'/'} element={<h1>Home</h1>} />
      <Route path={'/event'} element={<EventPage />} />
      <Route path={'/event/lessons/:slug'} element={<EventPage />} />
    </Routes>
  );
};


export default Router;