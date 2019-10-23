import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// eslint-disable-next-line
import Home from './Home';


// export default function withAuth(ComponentToProtect) {
//the .. withAuth({Home}).. may be wrong. oct.23 by Tori
export default function withAuth({Home}) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    // componentDidMount
    UNSAFE_componentWillMount() {
      fetch('/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }


    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          {/* <ComponentToProtect {...this.props} /> */}
          <Home {...this.props} />
        </React.Fragment>
      );
    }
  }
}

//this below may need to be placed in a specific js file
// import withAuth from './withAuth';
// ...
// <Route path="/secret" component={withAuth(Secret)} />