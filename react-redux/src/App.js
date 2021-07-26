import './App.css';
import {connect} from "react-redux";
import Shop from "./components/Shop";
import {fetchUsers} from "./redux/actions";
import {useEffect} from "react";

const App = props => {
    useEffect(() => {
        props.fetchUsers();
        //eslint-disable-next-line
    }, []);

    return (
      <div className="App">
          {props.loading
              ?
              <h1>Loading...</h1>
              :
              props.error
                  ?
                  <h1>{props.error}</h1>
                  :
                  <h1>Number of users: {props.users}</h1>
          }

          <hr/>
          <Shop/>
          <Shop cake/>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        users: state.user.users,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
