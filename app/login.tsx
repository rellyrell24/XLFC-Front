import { Link, router, Stack } from "expo-router";
import { StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedInput } from "@/components/ThemedInput";
import { useAuth } from "@/context/authContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("testmobile@test.com");
  const [password, setPassword] = useState("123456");
  const { login, user } = useAuth();

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    login(email, password);
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      <Stack.Screen options={{ title: "Login" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Login</ThemedText>
        <ThemedInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <ThemedInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Login" onPress={handleLogin} />
        <Link href="/register" style={styles.link}>
          <ThemedText type="link">Register</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    marginVertical: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
