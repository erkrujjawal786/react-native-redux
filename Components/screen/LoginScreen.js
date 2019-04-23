import React, { Component } from 'react';
import { Platform, Button, StyleSheet, FlatList, TextInput, Text, View } from 'react-native';
import ListItem from './Listitems';
import { connect } from 'react-redux';
import { addPlace } from '../../Actions/places';






class LoginScreen extends Component {

  state = {
    placeName: '',
    places: []
  }


  placeSubmitHandler = () => {
    console.log("Submitted", this.state.placeName, 'this.state.placeName');
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
    console.log('placeName', value)

  }

  placesOutput = () => {
    console.log('placeName', this.state.placeName)
    return (
      <FlatList style={styles.listContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
          />
        )}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seach Places"
            style={styles.placeInput}
            value = { this.state.placeName }
            onChangeText={this.placeNameChangeHandler}
          ></TextInput>
          <Button title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
          {this.placesOutput()}
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: 300,
    backgroundColor: '#eee'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});


const mapStateToProps = state => {
  console.log(state,'state')
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch,'statestore')
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)