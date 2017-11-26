import React, { Component } from 'react'; 
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Movies extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      isLoading: true, 
      dataSource: 'start data' 
    }}

componentDidMount() {
  var request = new XMLHttpRequest(); 
    request.onreadystatechange = (e) => { 
      if (request.readyState !== 4) { 
        return; 
      }
  
    if (request.status === 200) {
      console.log('success', request.responseText);
      this.setState({
        isLoading: false,
        dataSource: JSON.parse(request.responseText)
      })
    } else {
      console.warn('error');
    }
  };

  request.open('GET', 'http://api.hochuna.com/open-events');
  request.send();
}

render() {

  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <Text>{ this.state.dataSource[1].id }</Text>
    </View>
  );
}}