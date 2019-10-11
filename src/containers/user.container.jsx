import { connect } from 'react-redux';
import UserComponent from '../components/user.component';

// map state to a prop of the component
function mapStateToProps(state) {
  return {
    name: `${state.user.fname} ${state.user.lname}`
  };
}

// map actions you want a component to dispatch to a prop of the component
function mapDispatchToProps(dispatch) {
  return {
    // remove: id => dispatch(removeRequest(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
