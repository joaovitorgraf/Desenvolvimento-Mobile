import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={styles.text}>Instagram</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15,
                    }}
                >
                    <AntDesign name="plussquareo" size={24} color="black" />
                    <Feather name="heart" size={24} color="black" />
                    <FontAwesome6 name="facebook-messenger" size={24} color="black" />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./assets/favicon.png')} />
                </View>
                <View style={{ flexDirection: 'row' }}></View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    },
});
