import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { lineThrough, lineThrough2 } from '../actions/weeklyAction';
import styles from '../style/Journal.module.scss';

import Weeklys from '../components/Weekly';
import WritingBlock from '../components/WritingBlock';
import History from '../components/History';

class Journal extends Component {
    submit = (event) => {
        event.preventDefault();
        console.log(this.props.test)
    };

    render() {
        return (
            <main className={styles.Journal}>
                <Weeklys firstStatus={this.props.firstDone} secondStatus={this.props.secondDone} firstLine={this.props.lineThrough} secondLine={this.props.lineThrough2}/>
                <WritingBlock onSubmit={this.submit} />
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
    firstDone: state.weeklyReducer.firstDone,
    secondDone: state.weeklyReducer.secondDone,
    test: getFormValues('journal')(state)
});

export default connect(
    mapStateToProps, 
    {
        lineThrough,
        lineThrough2
    }
)(Journal);