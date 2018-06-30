import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const { count } = this.state;
    return (
      <div>
        <div className="header">
          <div className="header--description">
            イベントで話したい仲間を探そう
          </div>
          <div className="header--title">Connect</div>
        </div>
        <div className="eventList">
          <div className="eventList--title">
            <div>参加イベント一覧</div>
          </div>
          <div className="eventList--content">
            <Link to="/events/1/page">
              <div className="eventList--content--item">
                <div className="eventList--content--item--title">
                  <img src="/eventHeader.jpg" />
                </div>
                <div className="eventList--content--item--description">
                  <div>はじめての勉強会 #30 @shibuya</div>
                  <div className="eventList--content--item--description--participant">
                    <img src="/peopleicon.png" />
                    <div>20</div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="eventList--content--item">
              <div className="eventList--content--item--title">
                <img src="/eventHeader.jpg" />
              </div>
              <div className="eventList--content--item--description">
                <div>はじめての勉強会 #30 @shibuya</div>
                <div className="eventList--content--item--description--participant">
                  <img src="/peopleicon.png" />
                  <div>20</div>
                </div>
              </div>
            </div>
            <div className="eventList--content--item">
              <div className="eventList--content--item--title">
                <img src="/eventHeader.jpg" />
              </div>
              <div className="eventList--content--item--description">
                <div>はじめての勉強会 #30 @shibuya</div>
                <div className="eventList--content--item--description--participant">
                  <img src="/peopleicon.png" />
                  <div>20</div>
                </div>
              </div>
            </div>
          </div>

          <button onClick={this.handleClick}>ぼたん</button>
          <div>{count}</div>
        </div>
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
