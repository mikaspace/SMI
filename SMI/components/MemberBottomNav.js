// components/MemberBottomNav.js

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function MemberBottomNav({ activeTab }) {
  const router = useRouter();

  return (
    <View style={styles.bottomNav}>
      <NavItem
        label="Home"
        icon="home"
        active={activeTab === "home"}
        onPress={() => router.push("/member/HomeScreen")}
      />

      <NavItem
        label="Savings"
        materialIcon="piggy-bank-outline"
        active={activeTab === "savings"}
        onPress={() => router.push("/member/SavingsScreen")}
      />

      <NavItem
        label="Loans"
        icon="credit-card"
        active={activeTab === "loans"}
        onPress={() => router.push("/member/LoansScreen")}
      />

      <NavItem
        label="Dividend"
        icon="trending-up"
        active={activeTab === "dividend"}
        onPress={() => router.push("/member/DividendsScreen")}
      />

      <NavItem
        label="Requests"
        icon="clipboard"
        active={activeTab === "requests"}
        onPress={() => router.push("/member/RequestsScreen")}
      />

      <NavItem
        label="Profile"
        icon="user"
        active={activeTab === "profile"}
        onPress={() => router.push("/member/ProfileScreen")}
      />
    </View>
  );
}

function NavItem({ label, icon, materialIcon, active, onPress }) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      {materialIcon ? (
        <MaterialCommunityIcons
          name={materialIcon}
          size={21}
          color={active ? "#126b3f" : "#7d8b82"}
        />
      ) : (
        <Feather
          name={icon}
          size={21}
          color={active ? "#126b3f" : "#7d8b82"}
        />
      )}

      <Text style={active ? styles.navTextActive : styles.navText}>{label}</Text>

      {active && <View style={styles.activeLine} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 16,
    height: 76,
    borderRadius: 24,
    backgroundColor: "#fffdf8",
    borderWidth: 1,
    borderColor: "#e2d8c8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 4,
    zIndex: 20,
  },

  navItem: {
    flex: 1,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  navText: {
    color: "#7d8b82",
    fontSize: 9,
    fontWeight: "800",
    marginTop: 4,
  },

  navTextActive: {
    color: "#126b3f",
    fontSize: 9,
    fontWeight: "900",
    marginTop: 4,
  },

  activeLine: {
    position: "absolute",
    bottom: 1,
    width: 22,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#126b3f",
  },
});