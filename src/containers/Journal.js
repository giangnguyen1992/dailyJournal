import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { lineThrough, lineThrough2, saveWeek } from '../actions/weeklyAction';
import { saveHistory, unmountSuccess } from '../actions/writingAction';
import {weeklyData } from '../weeklyData';
import styles from '../style/Journal.module.scss';

import Weeklys from '../components/Weekly';
import WritingBlock from '../components/WritingBlock';
import History from '../components/History';
import SubmitSuccess from '../components/SubmitSuccess';

class Journal extends Component {
    componentWillMount() {
        const thisWeekData = ((data) => {
            return data[Math.floor(Math.random() * 7)];
        })(weeklyData);

        this.props.saveWeek(thisWeekData);
    };

    submit = (event) => {
        event.preventDefault();
        this.props.saveHistory(this.props.formValues);
        this.props.unmountSuccess();
    };

    render() {
        return (
            <main className={styles.Journal}>
                <Weeklys thisWeek={this.props.thisWeekData} firstStatus={this.props.firstDone} secondStatus={this.props.secondDone} firstLine={this.props.lineThrough} secondLine={this.props.lineThrough2}/>
                {this.props.unmountForm ? <SubmitSuccess /> : <WritingBlock onSubmit={this.submit} />}
                {this.props.newHistory.map((i, index) => <History obj={i} key={index}/>).reverse()}
            </main>
        );
    };
};

const mapStateToProps = state => ({
    firstDone: state.weeklyReducer.firstDone,
    secondDone: state.weeklyReducer.secondDone,
    formValues: getFormValues('journal')(state),
    newHistory: state.writingReducer.historyArray,
    unmountForm: state.writingReducer.submitSuccess,
    thisWeekData: state.weeklyReducer.thisWeek
});

export default connect(
    mapStateToProps, 
    {
        lineThrough,
        lineThrough2,
        saveHistory,
        unmountSuccess,
        saveWeek
    }
)(Journal);