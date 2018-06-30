import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import eventsActions from '../../actions/eventsActions';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.actions.getEvents();
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    // const { events } = this.props;
    const { count } = this.state;
    return (
      <div>
        <div className="test">ほげえええええええええええ</div>
        <button onClick={this.handleClick}>ぼたん</button>
        <div>{count}</div>
        {/* <div>{events.map(p => <div>{p.name}</div>)}</div> */}
      </div>
    );
  }
}

EventList.propTypes = {
  // events: PropTypes.instanceOf(Object).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(eventsActions, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
