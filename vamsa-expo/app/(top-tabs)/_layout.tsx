import {
    MaterialTopTabNavigationEventMap,
    MaterialTopTabNavigationOptions,
    createMaterialTopTabNavigator,
  } from "@react-navigation/material-top-tabs";
  import { withLayoutContext } from "expo-router";
  import { ParamListBase, TabNavigationState } from "@react-navigation/native";
  import { StyleSheet, Image, View } from 'react-native';

  const { Navigator } = createMaterialTopTabNavigator();
  
  export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
  >(Navigator);
  
  export default function TabLayout() {
    return (
      <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#9DC183', // Light grey background
          borderTopLeftRadius: 10, // Rounded corners
          borderTopRightRadius: 10, // Rounded corners
          height: 60,
          justifyContent: 'center'
        },
        tabBarLabelStyle: {
          color: '#004d00', // Dark green text color
          fontFamily: 'YourCustomFont', // Custom font
          fontSize: 20,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'green', // Remove blue underline
        },
      }}
      >
        <MaterialTopTabs.Screen
            name="index"
            options={{
                tabBarIcon: ({ focused }) => 
                    <View style={styles.iconContainer}>
                        <Image
                        source={require("./images/whitelogo.png")}
                        style={[styles.icon, focused && styles.iconFocused]}
                        />
                    </View>,
                tabBarLabel: () => null, // Hide label for this tab
            }}
        />
        <MaterialTopTabs.Screen
          name="features"
          options={{ title: "Features" }}
        />
        <MaterialTopTabs.Screen name="impact" options={{ title: "Impact" }} />
        <MaterialTopTabs.Screen name="about" options={{ title: "About" }} />
        <MaterialTopTabs.Screen name="enter" options={{ title: "Get Started" }} />
      </MaterialTopTabs>
    );
  }

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    icon: {
        width: 80, // Adjust the size as needed
        height: 80,
    },
    iconFocused: {
        width: 120, // Adjust the size as needed
        height: 120,
    },
    font: {
        fontSize: 12,
    },
    fontFocused: {
        fontSize: 20,
    }
  });