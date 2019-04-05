import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lineThrough, lineThrough2 } from '../actions/WeeklyAction';
import styles from '../style/Journal.module.scss';

import Weeklys from '../components/Weekly';
import WritingBlock from '../components/WritingBlock';
import History from '../components/History';

class Journal extends Component {
    render() {
        return (
            <main className={styles.Journal}>
                <Weeklys status={this.props.weeklyDone} status2={this.props.weeklyDone2} done={this.props.lineThrough} done2={this.props.lineThrough2}/>
                <WritingBlock />
                <History />
                <History />
                <History />
                <History />
                <History />
            </main>
        );
    };
};

const mapStateToProps = state => ({
    weeklyDone: state.weeklyReducer.weeklyDone,
    weeklyDone2: state.weeklyReducer.weeklyDone_2
})

export default connect(
    mapStateToProps, 
    {
        lineThrough,
        lineThrough2
    }
)(Journal);