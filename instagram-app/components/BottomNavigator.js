import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CreateScreen from "../screens/CreateScreen";
import ReelsScreen from "../screens/ReelsScreen";
import AccountScreen from "../screens/AccountScreen";
import { Entypo, Feather } from "@expo/vector-icons";

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: "", tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={30} /> }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false, title: "", tabBarIcon: ({ color, size }) => <Feather name="search" color={color} size={30} /> }} />
      <Tab.Screen name="Create" component={CreateScreen} options={{ headerShown: false, title: "", tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={30} /> }} />
      <Tab.Screen name="Reels" component={ReelsScreen} options={{ headerShown: false, title: "", tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={30} /> }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false, title: "", tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={30} /> }} />
    </Tab.Navigator>
  );
}
