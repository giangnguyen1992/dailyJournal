import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { lineThrough, lineThrough2 } from '../actions/weeklyAction';
import { saveHistory } from '../actions/writingAction';
import styles from '../style/Journal.module.scss';

import Weeklys from '../components/Weekly';
import WritingBlock from '../components/WritingBlock';
import History from '../components/History';

class Journal extends Component {
    submit = (event) => {
        event.preventDefault();
        this.props.saveHistory(this.props.formValues);
    };

    render() {
        return (
            <main className={styles.Journal}>
                <Weeklys firstStatus={this.props.firstDone} secondStatus={this.props.secondDone} firstLine={this.props.lineThrough} secondLine={this.props.lineThrough2}/>
                <WritingBlock onSubmit={this.submit} />
                {this.props.newHistory.map((i, index) => <History  key={index}/>).reverse()}
            </main>
        );
    };
};

const mapStateToProps = state => ({
    firstDone: state.weeklyReducer.firstDone,
    secondDone: state.weeklyReducer.secondDone,
    formValues: getFormValues('journal')(state),
    newHistory: state.writingReducer.historyArray
});

export default connect(
    mapStateToProps, 
    {
        lineThrough,
        lineThrough2,
        saveHistory
    }
)(Journal);