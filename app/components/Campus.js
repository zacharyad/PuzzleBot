import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../store';

export class Campus extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSingleCampus();
  }
  render() {
    const campus = this.props.campus;
    return (
      <div>
        <h3>{campus.name}</h3>
        <h4>{campus.description}</h4>
        <img src={campus.imageUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campusState: state.singleCampus,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCampus: () => dispatch(fetchSingleCampus()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campus);
