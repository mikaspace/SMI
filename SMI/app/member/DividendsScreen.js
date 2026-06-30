// app/member/DividendsScreen.js

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

export default function DividendsScreen() {
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

          <TouchableOpacity style={[styles.navItem, styles.navActive]}>
            <Feather name="trending-up" size={20} color="#ffffff" />
            <Text style={styles.navActiveText}>Dividends</Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={styles.navItem}
  onPress={() => router.push("/member/SavingsScreen")}
>
  <MaterialCommunityIcons name="piggy-bank-outline" size={20} color="#708174" />
  <Text style={styles.navText}>Savings</Text>
</TouchableOpacity>
 <TouchableOpacity
  style={styles.navItem}
  onPress={() => router.push("/member/ProfileScreen")}
>
  <Feather name="user" size={20} color="#708174" />
  <Text style={styles.navText}>Profile</Text>
</TouchableOpacity>
        </View>

        <View style={styles.sidebarBottom}>
          <TouchableOpacity style={styles.bottomItem}>
            <Ionicons name="moon-outline" size={20} color="#708174" />
            <Text style={styles.bottomText}>Dark Mode</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItem}>
            <Feather name="log-out" size={20} color="#708174" />
            <Text style={styles.bottomText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Text style={styles.topLabel}>DIVIDENDS</Text>

          <View style={styles.bellWrap}>
            <Feather name="bell" size={20} color="#697869" />
            <View style={styles.notificationDot} />
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Dividends</Text>
          <Text style={styles.subtitle}>Interest on Share Capital</Text>
        </View>

        <View style={styles.pendingNotice}>
          <Ionicons name="time-outline" size={17} color="#e86f00" />
          <View>
            <Text style={styles.pendingTitle}>FY 2024 dividend pending</Text>
            <Text style={styles.pendingSub}>Projected rate: ~13% · Est. Feb 2025</Text>
          </View>
        </View>

        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>TOTAL DIVIDENDS EARNED</Text>
          <Text style={styles.totalAmount}>₱15,050.00</Text>
          <Text style={styles.totalSub}>Since 2018</Text>
        </View>

        <DividendItem
          year="FY 2024"
          status="Pending"
          statusType="pending"
          details="Rate: ~13% · Est. Feb 2025"
          amount="—"
        />

        <DividendItem
          year="FY 2021"
          status="Paid"
          statusType="paid"
          details="Rate: 11% · Feb 20, 2022"
          amount="₱4,400.00"
        />

        <DividendItem
          year="FY 2022"
          status="Paid"
          statusType="paid"
          details="Rate: 10% · Mar 15, 2023"
          amount="₱4,800.00"
        />

        <DividendItem
          year="FY 2023"
          status="Paid"
          statusType="paid"
          details="Rate: 12% · Feb 28, 2024"
          amount="₱5,850.00"
        />
      </ScrollView>
    </View>
  );
}

function DividendItem({ year, status, statusType, details, amount }) {
  const isPaid = statusType === "paid";

  return (
    <View style={styles.dividendCard}>
      <View>
        <View style={styles.dividendTopRow}>
          <Text style={styles.dividendYear}>{year}</Text>

          <View style={isPaid ? styles.paidBadge : styles.pendingBadge}>
            <Ionicons
              name={isPaid ? "checkmark-circle-outline" : "time-outline"}
              size={13}
              color={isPaid ? "#00a86b" : "#e86f00"}
            />
            <Text style={isPaid ? styles.paidText : styles.pendingBadgeText}>
              {status}
            </Text>
          </View>
        </View>

        <Text style={styles.dividendDetails}>{details}</Text>
      </View>

      <Text style={styles.dividendAmount}>{amount}</Text>
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
    paddingHorizontal: 390,
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
    fontSize: 13,
    color: "#174a33",
    marginTop: 5,
  },

  pendingNotice: {
    minHeight: 60,
    borderWidth: 1,
    borderColor: "#f2c94c",
    backgroundColor: "#fff9e8",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 22,
  },

  pendingTitle: {
    color: "#c45f00",
    fontSize: 13,
    fontWeight: "800",
    marginLeft: 12,
  },

  pendingSub: {
    color: "#9b4d00",
    fontSize: 11,
    marginLeft: 12,
    marginTop: 5,
  },

  totalCard: {
    height: 106,
    backgroundColor: "#174a33",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginBottom: 20,
  },

  totalLabel: {
    color: "#93aa99",
    fontSize: 10,
    letterSpacing: 1.5,
    fontWeight: "800",
  },

  totalAmount: {
    color: "#ffffff",
    fontSize: 31,
    fontWeight: "800",
    marginTop: 14,
    fontFamily: "serif",
  },

  totalSub: {
    color: "#b7cbbb",
    fontSize: 11,
    marginTop: 5,
  },

  dividendCard: {
    height: 64,
    backgroundColor: "#fbfaf6",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd8cf",
    paddingHorizontal: 17,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dividendTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  dividendYear: {
    fontSize: 15,
    fontWeight: "700",
    color: "#001c13",
    fontFamily: "serif",
    marginRight: 12,
  },

  paidBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eafff4",
    borderWidth: 1,
    borderColor: "#83e8b9",
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },

  paidText: {
    color: "#00a86b",
    fontSize: 11,
    fontWeight: "700",
    marginLeft: 4,
  },

  pendingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff4df",
    borderWidth: 1,
    borderColor: "#ffc46b",
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },

  pendingBadgeText: {
    color: "#e86f00",
    fontSize: 11,
    fontWeight: "700",
    marginLeft: 4,
  },

  dividendDetails: {
    color: "#174a33",
    fontSize: 10,
    marginTop: 5,
  },

  dividendAmount: {
    color: "#001c13",
    fontSize: 15,
    fontWeight: "800",
  },
});