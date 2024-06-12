import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Surface, Button, TextInput } from "react-native-paper";
import { style } from "../config/styles";

export default function HomeScreen({navigation}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState("");

  const sendEmailContato = async () => {
    const dados = {
      nome: nome,
      email: email,
      mensagem: mensagem,
    };

    axios
      .post("http://localhost:5000/send-email-contact", dados)
      .then(function (response) {
        console.log(response);
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
          style={style.textArea}
          label="Mensagem"
          mode="outlined"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />
        {error ? <Text>{error}</Text> : null}
        <Button style={style.button} mode="contained" onPress={sendEmailContato}>
          Enviar Email
        </Button>
        <Button style={style.button} onPress={() => navigation.navigate("ChangePasswordScreen")}>
          Mudar Senha
        </Button>
        <Button style={style.button} onPress={() => navigation.navigate("LoginScreen")}>
          Fazer Logout
        </Button>
      </View>
    </Surface>
  );
}
