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
      <Layout>
        <Redirect exact push from='/' to='/maintenances' />
        <Route path='/maintenances' component={Maintenances} />

        <Route path='/boilers' component={Boilers} />

        <Route path='/technicians' component={Tenchnicians} />

        <Route path='/clients' component={Clients} />

        <Route path='/reports' component={Reports} />
      </Layout>
    </Switch>
  );
};

export default Routes;
