import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';
export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        responseJson.unshift({id:"id", transaction_type: "transaction_type", transaction_date : "transaction_date", amount : "amount", receiver :"receiver", sender: "sender"});
        this.setState({
          isLoading: false,
         responseJson,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ListView    

          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.id}, {rowData.transaction_date}, {rowData.amount}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    color: '#F44336',
     paddingTop: 23,
     fontWeight: 'bold',
        fontSize:30,
    marginTop: 10,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
  },
});
