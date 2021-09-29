import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

import Lazy from '@/pages/Lazy';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Lazy />}>{renderRoutes(routes)}</Suspense>
    </Router>
  );
};

export default App;
