import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../store';

export class SingleCampus extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSingleCampus(this.props.match.params.campusId);
  }
  render() {
    return (
      <div>
        {this.props.campusState[0] ? (
          <div>
            <h3>{this.props.campusState[0].name}</h3>
            <h5>{this.props.campusState[0].description}</h5>
            <img src={this.props.campusState[0].imageUrl} />
          </div>
        ) : (
          <div>Sorry this campus does not exist</div>
        )}
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
)(SingleCampus);
