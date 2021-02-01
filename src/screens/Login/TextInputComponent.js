import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
export default class TextInputComponent extends Component {
  render(props) {
    return (
      <>
        <Text>{this.props.title}</Text>
        <TextInput
          style={this.props.styles}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
        />
      </>
    );
  }
}
