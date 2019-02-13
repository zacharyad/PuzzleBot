import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../store';

export class Campus extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSingleCampus(this.props.campus.id);
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
  fetchSingleCampus: id => dispatch(fetchSingleCampus(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campus);
