// app/member/ProfileScreen.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.page}>
      <View style={styles.sidebar}>
        <View style={styles.brandRow}>
          <View style={styles.logoCircle}>
            <MaterialCommunityIcons name="piggy-bank-outline" size={18} color="#fff" />
          </View>

          <View>
            <Text style={styles.brandName}>CoopConnect</Text>
            <Text style={styles.brandSub}>MEMBER PORTAL</Text>
          </View>
        </View>

        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MS</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Maria Santos</Text>
            <Text style={styles.memberId}>MBR-00472</Text>
          </View>

          <View style={styles.memberBadge}>
            <Feather name="user" size={12} color="#0074cc" />
            <Text style={styles.memberBadgeText}>Member</Text>
          </View>
        </View>

        <View style={styles.navArea}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/member/HomeScreen")}
          >
            <Feather name="grid" size={20} color="#708174" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/member/LoansScreen")}
          >
            <Feather name="credit-card" size={20} color="#708174" />
            <Text style={styles.navText}>Loans</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/member/DividendsScreen")}
          >
            <Feather name="trending-up" size={20} color="#708174" />
            <Text style={styles.navText}>Dividends</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => router.push("/member/SavingsScreen")}
          >
            <MaterialCommunityIcons name="piggy-bank-outline" size={20} color="#708174" />
            <Text style={styles.navText}>Savings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.navItem, styles.navActive]}>
            <Feather name="user" size={20} color="#ffffff" />
            <Text style={styles.navActiveText}>Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sidebarBottom}>
          <TouchableOpacity style={styles.bottomItem}>
            <Ionicons name="moon-outline" size={20} color="#708174" />
            <Text style={styles.bottomText}>Dark Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomItem}
            onPress={() => router.push("/")}
          >
            <Feather name="log-out" size={20} color="#708174" />
            <Text style={styles.bottomText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Text style={styles.topLabel}>PROFILE</Text>

          <View style={styles.bellWrap}>
            <Feather name="bell" size={20} color="#697869" />
            <View style={styles.notificationDot} />
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>My Profile</Text>
          <Text style={styles.subtitle}>Member account information</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.bigAvatar}>
            <Text style={styles.bigAvatarText}>MS</Text>
          </View>

          <View style={styles.profileMainInfo}>
            <Text style={styles.memberName}>Maria Santos</Text>
            <Text style={styles.memberCode}>MBR-00472</Text>

            <View style={styles.statusBadge}>
              <Ionicons name="checkmark-circle-outline" size={14} color="#00a86b" />
              <Text style={styles.statusText}>Active Member</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Account Information</Text>

          <InfoRow label="Full Name" value="Maria Santos" />
          <InfoRow label="Member ID" value="MBR-00472" />
          <InfoRow label="Username" value="msantos" />
          <InfoRow label="Role" value="Normal Member" />
          <InfoRow label="Membership Status" value="Active" />
          <InfoRow label="Member Since" value="2015" />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Contact Information</Text>

          <InfoRow label="Email" value="maria.santos@email.com" />
          <InfoRow label="Phone Number" value="+63 912 345 6789" />
          <InfoRow label="Address" value="Cagayan de Oro City" />
          <InfoRow label="Branch" value="Main Branch" />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Cooperative Details</Text>

          <InfoRow label="Cooperative" value="Savings Mutual Intercompany Multipurpose Co-op" />
          <InfoRow label="Share Capital" value="₱48,750.00" />
          <InfoRow label="Current Loan Balance" value="₱55,600.00" />
          <InfoRow label="Total Dividends Earned" value="₱15,050.00" />
        </View>

        <View style={styles.settingsCard}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="moon-outline" size={20} color="#708174" />
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Text style={styles.settingValue}>Off</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Feather name="lock" size={20} color="#708174" />
              <Text style={styles.settingText}>Security & Privacy</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#708174" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Feather name="help-circle" size={20} color="#708174" />
              <Text style={styles.settingText}>Help & Support</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#708174" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => router.push("/")}
        >
          <Feather name="log-out" size={18} color="#ffffff" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpText}>?</Text>
      </TouchableOpacity>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f4f0e8",
  },

  sidebar: {
    width: 256,
    backgroundColor: "#fbfaf6",
    borderRightWidth: 1,
    borderRightColor: "#ddd8cf",
  },

  brandRow: {
    height: 84,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd8cf",
  },

  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#174a33",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  brandName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#001c13",
  },

  brandSub: {
    fontSize: 9,
    letterSpacing: 2,
    color: "#607163",
    marginTop: 4,
  },

  profileRow: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd8cf",
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#174a33",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "800",
  },

  profileName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#001c13",
  },

  memberId: {
    fontSize: 10,
    color: "#174a33",
    marginTop: 2,
  },

  memberBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9dd6ff",
    backgroundColor: "#eff9ff",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  memberBadgeText: {
    color: "#0074cc",
    fontSize: 12,
    marginLeft: 4,
  },

  navArea: {
    paddingTop: 24,
    paddingHorizontal: 12,
  },

  navItem: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 4,
    borderRadius: 13,
  },

  navActive: {
    backgroundColor: "#174a33",
  },

  navText: {
    fontSize: 16,
    color: "#526758",
    marginLeft: 14,
  },

  navActiveText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
    marginLeft: 14,
  },

  sidebarBottom: {
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: "#ddd8cf",
    paddingTop: 22,
    paddingBottom: 26,
  },

  bottomItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    marginBottom: 28,
  },

  bottomText: {
    fontSize: 16,
    color: "#526758",
    marginLeft: 14,
  },

  content: {
    flex: 1,
    paddingHorizontal: 385,
  },

  topBar: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d2c8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  topLabel: {
    fontSize: 12,
    color: "#697869",
    letterSpacing: 3,
  },

  bellWrap: {
    position: "relative",
  },

  notificationDot: {
    position: "absolute",
    right: -1,
    top: -3,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#c4ae42",
  },

  header: {
    marginTop: 20,
    marginBottom: 22,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#001c13",
    fontFamily: "serif",
  },

  subtitle: {
    color: "#174a33",
    fontSize: 13,
    marginTop: 5,
  },

  profileCard: {
    backgroundColor: "#174a33",
    borderRadius: 14,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  bigAvatar: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: "#2b6d4a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },

  bigAvatarText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },

  profileMainInfo: {
    flex: 1,
  },

  memberName: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
    fontFamily: "serif",
  },

  memberCode: {
    color: "#b7cbbb",
    fontSize: 12,
    marginTop: 6,
  },

  statusBadge: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eafff4",
    borderWidth: 1,
    borderColor: "#83e8b9",
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },

  statusText: {
    color: "#00a86b",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 5,
  },

  infoCard: {
    backgroundColor: "#fbfaf6",
    borderWidth: 1,
    borderColor: "#ddd8cf",
    borderRadius: 13,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 16,
  },

  settingsCard: {
    backgroundColor: "#fbfaf6",
    borderWidth: 1,
    borderColor: "#ddd8cf",
    borderRadius: 13,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#001c13",
    marginBottom: 14,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee9df",
    paddingVertical: 12,
  },

  infoLabel: {
    color: "#526758",
    fontSize: 13,
  },

  infoValue: {
    color: "#001c13",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    maxWidth: "58%",
  },

  settingRow: {
    height: 48,
    borderTopWidth: 1,
    borderTopColor: "#eee9df",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  settingText: {
    color: "#526758",
    fontSize: 14,
    marginLeft: 12,
  },

  settingValue: {
    color: "#174a33",
    fontSize: 13,
    fontWeight: "700",
  },

  signOutButton: {
    height: 48,
    backgroundColor: "#174a33",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
  },

  signOutText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
    marginLeft: 8,
  },

  helpButton: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  helpText: {
    color: "#fff",
    fontSize: 22,
  },
});