import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Home.style';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;