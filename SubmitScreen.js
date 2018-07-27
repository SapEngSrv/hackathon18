import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Report = t.struct({
  incident: t.String,
  location: t.String,
  comment: t.maybe(t.String)
});

export default class SubmitScreen extends React.Component {

    showCurrentDate() {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hour = new Date().getHours();
        var minutes = new Date().getMinutes();
        var seconds = new Date().getSeconds();
  
        return day + '-' + month + '-' + year + ', ' + hour + ':' + minutes + ':' + seconds;
    }

    verify() {
        var value = this.refs.form.getValue();
        if (value) {
          console.log(value);
          this.clearForm();
        }
    }

    clearForm() {
        this.setState({ value: null });
    }

    upload() {
        console.log("Upload pressed.");
    }

    render() {
      return (
        <View style={styles.container}>
            <Text style = {styles.title}>Incident Report</Text>
            <Text>Current date: {this.showCurrentDate() + "\n\n"}</Text> 

            <Form ref="form" type={Report} />
  
            <TouchableHighlight style={styles.upload} onPress={this.upload}>
                <Text style={{fontWeight: 'bold'}}> Upload File. </Text>
            </TouchableHighlight>

            <Button
                title="Submit"
                onPress={this.verify.bind(this)}
            />
        </View>  
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
  
    title: {
        margin: 24,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        paddingBottom: 10,
   },

    upload: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        alignItems: 'center',
        marginBottom: 30
    }

});
