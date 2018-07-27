import React from 'react';
import { StyleSheet, View, Button, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
  
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/bg.png')} style={{width: '100%', height: '100%'}}>
                <Image source={require('./images/logo.png')} style={{width: '50%', height: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}/>

                <Button
                    style={{height: 100}}
                    title="Submit incident"
                    onPress={() =>
                        navigate('Submit', { name: 'Report' })
                    }
                />

                </ImageBackground>
        </View>
      );
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
});