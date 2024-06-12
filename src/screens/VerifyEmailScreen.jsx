import { View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { Surface, Button, TextInput, Text } from "react-native-paper";
import { style } from "../config/styles";

export default function VerifyEmailScreen({ navigation }) {
  const [email, setEmail] = useState("luccas@teste.com");
  const [code, setCode] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      const dados = {
        email: email,
      };

      axios
        .post("http://localhost:5000/send-email-confirmation", dados)
        .then(function (response) {
          console.log(response);
          setCode(response.data.code);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  const VerifyCode = () => {
    if (codeInput === code) {
      navigation.navigate("HomeScreen");
    } else {
      setError("Código inválido");
    }
  };

  return (
    <Surface style={style.container}>
      <View style={style.container_inner}>
        <Text>Digite o código de 6 dígitos enviado na sua caixa de e-mail</Text>
        <TextInput
          style={style.input}
          maxLength={6}
          mode="outlined"
          value={codeInput}
          onChangeText={setCodeInput}
        />
        {error ? <Text>{error}</Text> : null}
        <Button style={style.button} mode="outlined" onPress={VerifyCode}>
          Verificar Email
        </Button>
      </View>
    </Surface>
  );
}
