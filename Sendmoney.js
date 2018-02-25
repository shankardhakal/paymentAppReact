import React, { Component } from 'react';
import { AppRegistry, Text, TextInput , View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Sendmoney extends Component {
    constructor(props){
        super(props);
     
        this.state = {
           amount: 0,
           receiver:''
        }
     }
     
    onSubmitEdit = () => {
        // whatever you want to do on submit

        fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: this.state.amount,
              phoneNumber: this.state.receiver,
            }),
          }).then(()=>{

            this.setState({receiver:'','amount':0});
            alert('Amount sent');
          });
      }
      
      render() {
        return(
          <View style = {styles.container}>
            <TextInput style = {styles.input}
     onChangeText={(amount) => this.setState({amount})}
     value={this.state.amount}
              textAlign="center"
              placeholder="Enter amount"
              onSubmitEditing={this.submitEdit} />
    
     <TextInput style = {styles.input}

     onChangeText={(receiver) => this.setState({receiver})}
     value={this.state.receiver}
    textAlign="center"
    placeholder="Enter receiver"
    onSubmitEditing={this.submitEdit} />

            < TouchableHighlight style = {styles.submitButton} onPress={this.onSubmitEdit} >
            
              <Text>SEND MONEY</Text>
            </TouchableHighlight>
          </View>
        );
      }

}
const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       width: 300,
       borderColor: '#fffaf0',
       borderWidth: 1,
    },
    submitButton: {
       backgroundColor: '#fffaf0',
       padding: 10,
       margin: 15,
       height: 40,
       width: 150,
    },
    submitButtonText:{
       color: '#800080'
    }
 });
