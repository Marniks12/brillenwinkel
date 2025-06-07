import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Text style={styles.title}>Welkom bij Maze jou opticien </Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Ga naar onze Producten"
                        color="#0000FF" 
                        onPress={() => navigation.navigate('products')}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Lees onze Blogposts"
                        color="#0000FF" 
                        onPress={() => navigation.navigate('blogpost')}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="Ga naar jou Wenslijst"
                        color="#0000FF" 
                        onPress={() => navigation.navigate('wishlist')}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button
                        title="check jou winkelmandje"
                        color="#0000FF" 
                        onPress={() => navigation.navigate('cartscreen')}
                    />
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF1E6',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'System', // Hier zou je een custom font kunnen gebruiken via `expo-font` of `react-native-fonts`
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    buttonWrapper: {
        marginVertical: 10,
        width: '80%',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Android shadow
    },
});

export default HomeScreen;
