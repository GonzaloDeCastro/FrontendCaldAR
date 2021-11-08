import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Shared/Layout';
import Maintenances from './Maintenances/Maintenances';
import Boiler from './Boilers/Boiler';
import Tenchnicians from './Technicians';
import Clients from './Clients';
import Reports from './Reports';
import Counter from './Counter/Counter';

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Redirect exact push from='/' to='/maintenances' />
        <Route path='/maintenances' component={Maintenances} />
        <Route path='/boilers' component={Boiler} />
        <Route path='/technicians' component={Tenchnicians} />
        <Route path='/clients' component={Clients} />
        <Route path='/reports' component={Reports} />
        <Route path='/counter' component={Counter} />
      </Layout>
    </Switch>
  );
};

export default Routes;
