import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Messages from '../pages/Approvals';
import RegisterApproval from '../pages/RegisterApproval';
import RegisterSuccess from '../pages/RegisterSuccess';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/app/messages" exact component={Messages} />
      <Route path="/app/register-approval" exact component={RegisterApproval} />
      <Route path="/app/register-approval/success" exact component={RegisterSuccess} />
    </Switch>
  );
}

export default Routes;
