import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const companyService = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Company Service Page</Text>
      </View>

      {/* Profile Cards */}
      <View style={styles.profileSection}>
        <View style={styles.profileCard}>
          <Ionicons name="business-outline" size={50} color="#4CAF50" />
          <Text style={styles.cardTitle}>Company's Profile</Text>
          <Text style={styles.cardSubtitle}>Updated 3d ago</Text>
          <Text style={styles.cardLink}>View Profile</Text>
        </View>
        <View style={styles.profileCard}>
          <View style={styles.circularBadge}>
            <Text style={styles.badgeText}>25</Text>
          </View>
          <Text style={styles.cardTitle}>Job's Posted</Text>
          <Text style={styles.cardLink}>View All</Text>
        </View>
      </View>

      {/* Services Section */}
      <Text style={styles.servicesHeader}>
        Services Provided by TalentConnect
      </Text>
      <View style={styles.servicesGrid}>
        <TouchableOpacity style={styles.serviceCard}>
          <MaterialIcons name="school" size={30} color="#000" />
          <Text style={styles.serviceText}>Campus Drives</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <Ionicons name="people-outline" size={30} color="#000" />
          <Text style={styles.serviceText}>Staffing Solutions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <MaterialIcons name="assignment" size={30} color="#000" />
          <Text style={styles.serviceText}>Internship Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <FontAwesome name="users" size={30} color="#000" />
          <Text style={styles.serviceText}>Part of Job Fairs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <MaterialIcons name="supervisor-account" size={30} color="#000" />
          <Text style={styles.serviceText}>Staff Training Programs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <MaterialIcons name="branding-watermark" size={30} color="#000" />
          <Text style={styles.serviceText}>Employer Branding</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/company/companyService")}
        >
          <Ionicons name="briefcase-outline" size={24} color="#007bff" />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/apply")}
        >
          <Ionicons name="paper-plane-outline" size={24} color="#007bff" />
          <Text style={styles.navText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/company/company-dashboard")}
        >
          <Ionicons name="home-outline" size={24} color="#007bff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/profile")}
        >
          <Ionicons name="person-outline" size={24} color="#007bff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4FC",
  },
  header: {
    padding: 15,
    backgroundColor: "#DCE9F5",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  profileCard: {
    backgroundColor: "#FFF",
    width: "40%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  circularBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  badgeText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#888",
    marginVertical: 3,
  },
  cardLink: {
    fontSize: 12,
    color: "#1E88E5",
  },
  servicesHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  serviceCard: {
    width: "40%",
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  serviceText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#007bff",
    marginTop: 5,
  },
});

export default companyService;
