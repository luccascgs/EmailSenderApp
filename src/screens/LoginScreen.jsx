import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Surface, Button, TextInput } from "react-native-paper";
import { style } from "../config/styles";

export default function LoginScreen({navigation}) {
  const [nome, setNome] = useState("Luccas");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Surface style={style.container}>
      <View style={style.container_inner}>
        <TextInput
          style={style.input}
          label="E-mail"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={style.input}
          label="Senha"
          mode="outlined"
          value={senha}
          onChangeText={setSenha}
        />
        <Button style={style.button} onPress={()=> navigation.navigate("RecPasswordScreen")}>Esqueci minha senha</Button>
        <Button style={style.button} mode="outlined" onPress={()=> navigation.navigate("VerifyEmailScreen")}>Fazer Login</Button>
        <Button style={style.button} mode="contained" onPress={()=> navigation.navigate("RegisterScreen")}>Fazer Cadastro</Button>
      </View>
    </Surface>
  );
}