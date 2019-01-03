import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import ActionCreator from '../actions/actionCreators'
import { timeToString, getDailyReminderValue } from '../utils/helper'
import { fetchCalendarResults } from '../utils/api'

class History extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        fetchCalendarResults()
            .then((entries) => dispatch(ActionCreator.receiveEntries(entries)))
            .then(({ entries }) => {
                if (!entries[timeToString()]) {
                    dispatch(ActionCreator.addEntry({
                        [timeToString()]: getDailyReminderValue()
                    }))
                }
            })
            .then(() => this.setState(() => ({ ready: true })))
    }
    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.props)}</Text>
            </View>
        )
    }
}

function mapStateToProps(entries) {
    return {
        entries
    }
}

export default connect(
    mapStateToProps,
)(History)