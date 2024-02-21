import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { Mixpanel } from "mixpanel-react-native";
 
// initializing the with project token
const trackAutomaticEvents = false;
const mixpanel = new Mixpanel('728c835e7a37efc79ad1592f6ba301a9', trackAutomaticEvents);
mixpanel.init();
 
const SampleApp = () => {
  return (
    <SafeAreaView style={{marginTop:20}}>
      <Button
        title="Select Premium Plan"
        onPress={() =>
          mixpanel.track("Signed Up", { "Signup Type": "Referral" })
        }
      />
      <Text style={{marginVertical:10 }}>Tracking the registration </Text>
         <Button
        title="Register For Event"
        onPress={() =>
          mixpanel.track("Registration")
        }
      />
    </SafeAreaView>
  );
};
 
export default SampleApp;