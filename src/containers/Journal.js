import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { lineThrough, lineThrough2, saveWeek, saveWeekNow } from '../actions/weeklyAction';
import { saveHistory, unmountSuccess, mountSuccess, saveTimeNow } from '../actions/writingAction';
import {weeklyData } from '../weeklyData';
import styles from '../style/Journal.module.scss';

import Weeklys from '../components/Weekly';
import WritingBlock from '../components/WritingBlock';
import History from '../components/History';
import SubmitSuccess from '../components/SubmitSuccess';
import NewWeekChallenge from '../components/newWeekChallenge';

class Journal extends Component {
    componentWillMount() {
        this.reset();
    };

    getNumberOfWeek = () => {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    saveThisWeekData = (data, weekNumber) => {
        const weekData = data[Math.floor(Math.random() * 7)];
        this.props.saveWeek(weekData);
        this.props.saveWeekNow(weekNumber());
    };

    submit = (event) => {
        event.preventDefault();
        this.props.saveHistory(this.props.formValues);
        this.props.unmountSuccess();
        this.props.saveTimeNow(new Date().getDay());
    };

    reset = () => {
        const today = new Date().getDay();
        if (this.props.timeNow !== today || this.props.newHistory.length === 0) {
            this.props.mountSuccess();
        };

        let thisWeek = this.getNumberOfWeek();
        if (this.props.weekNow !== thisWeek && this.props.weekNow !== 0) {
            this.saveThisWeekData(weeklyData, this.getNumberOfWeek);
        };
    };

    render() {
        return (
            <main className={styles.Journal}>
                {Object.getOwnPropertyNames(this.props.thisWeekData).length === 0 ? <NewWeekChallenge saveWeek={() => this.saveThisWeekData(weeklyData, this.getNumberOfWeek)}/> : <Weeklys thisWeek={this.props.thisWeekData} firstStatus={this.props.firstDone} secondStatus={this.props.secondDone} firstLine={this.props.lineThrough} secondLine={this.props.lineThrough2} />}
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
    thisWeekData: state.weeklyReducer.thisWeek,
    timeNow : state.writingReducer.timeNow,
    weekNow: state.weeklyReducer.weekNow
});

export default connect(
    mapStateToProps, 
    {
        lineThrough,
        lineThrough2,
        saveHistory,
        unmountSuccess,
        mountSuccess,
        saveWeek,
        saveTimeNow,
        saveWeekNow
    }
)(Journal);