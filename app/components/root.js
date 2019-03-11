import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Header from './Header';
import AddTweet from './AddTweet';
import ThankYou from './thankyou';
import GetAnswer from './GetAnswer';
import Home from './Home';
//import { DeleteForm } from './DeleteTweet';

const Root = () => {
  return (
    <div className="center">
      <Header />
      <Switch>
        <Route exact path="/make_tweet" component={AddTweet} />
        <Route exact path="/get_answer" component={GetAnswer} />
        <Route exact path="/thank_you" component={ThankYou} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/delete_tweet" component={DeleteForm} /> */}
      </Switch>
    </div>
  );
};
export default withRouter(Root);
