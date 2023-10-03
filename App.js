import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllUsersPage from "./components/AllUsersPage";
import UserPage from "./components/UserPage";
import { pages } from "./lib/pages";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackVisible: false,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={pages.usersP}
          component={AllUsersPage}
          options={{ title: pages.usersP }}
        />
        <Stack.Screen
          name={pages.userP}
          component={UserPage}
          options={{ title: pages.userP }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
