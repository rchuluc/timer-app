/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

import EditableTimer from '@components/editableTimer'
import ToggleableTimerForm from '@components/toggleableTimerForm'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>

        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false} />
          <EditableTimer
            id="1"
            title="Mow the lawn"
            project="House chores"
            elapsed="8986300"
            isRunning
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({})

export default App
