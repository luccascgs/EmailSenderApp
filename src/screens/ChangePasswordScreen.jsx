import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Surface, Button, TextInput, Text } from "react-native-paper";
import { style } from "../config/styles";

export default function ChangePasswordScreen({ navigation }) {
  const [email, setEmail] = useState("luccas@teste.com");
  const [nome, setNome] = useState("Luccas");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [error, setError] = useState("");

  const SendEmailChangePassword = () => {
    const dados = {
      nome: nome,
      email: email,
      senha: novaSenha,
    };

    axios
      .post("http://localhost:5000/send-email-modify-password", dados)
      .then(function (response) {
        console.log(response);
        navigation.navigate("HomeScreen")
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
          label={"Senha Antiga"}
          mode="outlined"
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={style.input}
          label={"Nova Senha"}
          mode="outlined"
          value={novaSenha}
          onChangeText={setNovaSenha}
        />
        {error ? <Text>{error}</Text> : null}
        <Button style={style.button} mode="outlined" onPress={SendEmailChangePassword}>
          Mudar Senha
        </Button>
      </View>
    </Surface>
  );
}
