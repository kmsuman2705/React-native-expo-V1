import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const campusService = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Campus Service Page</Text>
      </View>

      {/* Profile Cards */}
      <View style={styles.profileSection}>
        <View style={styles.profileCard}>
          <Ionicons name="person-circle-outline" size={50} color="#4CAF50" />
          <Text style={styles.cardTitle}>College's Profile</Text>
          <Text style={styles.cardSubtitle}>Updated 3d ago</Text>
          <Text style={styles.cardLink}>View Profile</Text>
        </View>
        <View style={styles.profileCard}>
          <View style={styles.circularBadge}>
            <Text style={styles.badgeText}>25</Text>
          </View>
          <Text style={styles.cardTitle}>Company's Applied</Text>
          <Text style={styles.cardLink}>View All</Text>
        </View>
      </View>

      {/* Services Section */}
      <Text style={styles.servicesHeader}>
        Services Provided by TalentConnect
      </Text>
      <View style={styles.servicesGrid}>
        <TouchableOpacity style={styles.serviceCard}>
          <MaterialIcons name="work-outline" size={30} color="#000" />
          <Text style={styles.serviceText}>Campus Placement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <FontAwesome name="microphone" size={30} color="#000" />
          <Text style={styles.serviceText}>Seminar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <MaterialIcons name="branding-watermark" size={30} color="#000" />
          <Text style={styles.serviceText}>Campus Branding</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <FontAwesome name="users" size={30} color="#000" />
          <Text style={styles.serviceText}>Job Fairs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard}>
          <MaterialIcons name="school" size={30} color="#000" />
          <Text style={styles.serviceText}>Training Program</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => router.push("/campus/campusService")}
          style={styles.footerButton}
        >
          <Ionicons name="ios-list-outline" size={24} color="#000" />
          <Text>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/campus/apply")}
          style={styles.footerButton}
        >
          <Ionicons name="ios-send-outline" size={24} color="#000" />
          <Text>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/campus/campus-dashboard")}
          style={[styles.footerButton, styles.activeButton]}
        >
          <Ionicons name="ios-home" size={24} color="#FFF" />
          <Text style={styles.activeText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/campus/CampusLogin")}
          style={styles.footerButton}
        >
          <Ionicons name="ios-person-outline" size={24} color="#000" />
          <Text>Profile</Text>
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#DCE9F5",
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#1E88E5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  activeText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default campusService;
