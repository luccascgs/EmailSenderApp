import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import RecPasswordScreen from "../screens/RecPasswordScreen";
import VerifyEmailScreen from "../screens/VerifyEmailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
              title: "Tela de Login",
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: false,
              title: "Tela de Registro",
            }}
          />
          <Stack.Screen
            name="ChangePasswordScreen"
            component={ChangePasswordScreen}
            options={{
              title: "Mudar Senha",
            }}
          />
          <Stack.Screen
            name="RecPasswordScreen"
            component={RecPasswordScreen}
            options={{
              headerShown: false,
              title: "Recuperar Senha",
            }}
          />
          <Stack.Screen
            name="VerifyEmailScreen"
            component={VerifyEmailScreen}
            options={{
              title: "Verificar Email",
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
              title: "Página inicial",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
