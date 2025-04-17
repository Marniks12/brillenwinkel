import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <Button
                title="Go to Products"
                onPress={() => navigation.navigate('products')}
            />
            <Button
                title="Go to Blog Posts"
                onPress={() => navigation.navigate('blogpost')}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF1E6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
    },
});

export default HomeScreen;