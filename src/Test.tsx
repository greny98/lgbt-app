import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from "expo-firebase-recaptcha";
import { initializeApp } from "firebase/app";
import { ApplicationVerifier, getAuth, PhoneAuthProvider, signInWithCredential } from "firebase/auth";

// Firebase references
const firebaseConfig = {
  apiKey: "AIzaSyC1jWZI3yH5cxbeMMs5nsY44fA6kAnl6Kg",
  authDomain: "lgbt-app-fea12.firebaseapp.com",
  projectId: "lgbt-app-fea12",
  storageBucket: "lgbt-app-fea12.appspot.com",
  messagingSenderId: "560720405187",
  appId: "1:560720405187:web:47cbf2e1d410d74d3cf876",
  measurementId: "G-84N288JTYC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Double-check that we can run the example
if (!app?.options || Platform.OS === "web") {
  throw new Error("This example only works on Android or iOS, and requires a valid Firebase config.");
}

export default function Test() {
  // Ref or state management hooks
  const recaptchaVerifier = React.useRef<ApplicationVerifier | null>(null);
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [verificationId, setVerificationId] = React.useState<string>("");
  const [verificationCode, setVerificationCode] = React.useState<string>("");

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState<any | null>({});
  const attemptInvisibleVerification = false;

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier as any}
        firebaseConfig={app.options}
        androidHardwareAccelerationDisabled
        attemptInvisibleVerification
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current!);
            setVerificationId(verificationId);
            showMessage({
              text: "Verification code has been sent to your phone.",
            });
          } catch (err: any) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
            await signInWithCredential(auth, credential);
            showMessage({ text: "Phone authentication successful 👍" });
          } catch (err: any) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, { backgroundColor: "0xffffffee", justifyContent: "center" }]}
          onPress={() => showMessage(null)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
  );
}
