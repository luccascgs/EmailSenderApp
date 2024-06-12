import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Surface, Button, TextInput } from "react-native-paper";
import { style } from "../config/styles";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const sendEmailWelcome = async () => {
    const dados = {
      nome: nome,
      email: email,
    };

    axios
      .post("http://localhost:5000/send-email-welcome", dados)
      .then(function (response) {
        console.log(response);
        navigation.navigate("HomeScreen");
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
  };

  return (
    <Surface style={style.container}>
      <View style={style.container_inner}>
        <TextInput
          style={style.input}
          label="Nome"
          mode="outlined"
          value={nome}
          onChangeText={setNome}
        />
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
        <Button style={style.button} mode="contained" onPress={sendEmailWelcome}>
          Fazer Cadastro
        </Button>
        <Button
          style={style.button}
          mode="outlined"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Fazer Login
        </Button>
      </View>
    </Surface>
  );
}
