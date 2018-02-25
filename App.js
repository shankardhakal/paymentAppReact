/**
 * SIMPLE PAYMENT APP
 * @author Shankar Dhakal
 * @version 1
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Form,
  ListView
} from 'react-native';
import Tabs from './Tabs';
import Transactions from './Transactions'
import Contacts from './Contacts'
import Sendmoney from './Sendmoney'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    }
  render() {
    return (
      <View style={styles.container}>
        <Tabs>
          {/* SEND MONEY TAB */}
          <View title="Send Money" style={styles.content}>
            <Text style={styles.header}>

SIMPLE PAYMENT APP
            </Text>

<Sendmoney> </Sendmoney>
            <Text style={styles.text}>
            
            </Text>
          </View>
          {/* CONTACT LISTS TAB */}
          <View title="Contacts" style={styles.content}>
           

<Contacts> </Contacts>
            
            <Text style={styles.text}>
            </Text>
          </View>
          {/* TRANSACTIONS TAB */}
          <View title="Transactions" style={styles.content}>
         <Transactions></Transactions>
      </View>
        </Tabs>
      </View>
    );
  
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,                            
    backgroundColor: '#E91E63',       
  },
  content: {
    flex: 1,                            
    justifyContent: 'center',           
    alignItems: 'center',               
    backgroundColor: '#C2185B',         
  },
  header: {
    margin: 10,                         
    color: '#FFFFFF',                  
    fontFamily: 'Avenir',               
    fontSize: 26,                       
  },
  text: {
    marginHorizontal: 20,              
    color: 'rgba(255, 255, 255, 0.75)', 
    textAlign: 'center',                
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});