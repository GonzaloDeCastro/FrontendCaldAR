import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Shared/Layout';
import Maintenances from './Maintenances';
import Boilers from './Boilers';
import Tenchnicians from './Technicians';
import Clients from './Clients';
import Reports from './Reports';

const Routes = () => {
  return (
    <Switch>
      <Route path='/maintenances'>
        <Layout>
          <Maintenances />
        </Layout>
      </Route>
      <Route path='/boilers'>
        <Layout>
          <Boilers />
        </Layout>
      </Route>
      <Route path='/technicians'>
        <Layout>
          <Tenchnicians />
        </Layout>
      </Route>
      <Route path='/clients'>
        <Layout>
          <Clients />
        </Layout>
      </Route>
      <Route path='/reports'>
        <Layout>
          <Reports />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
