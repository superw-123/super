import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history,app }) {
  const DataTree = dynamic({
    app,
    models: () => [
        import('./models/dataTree'),
        import('./models/tableSchema')
    ],
    component: () => import('./routes/DataTree')
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={DataTree} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
