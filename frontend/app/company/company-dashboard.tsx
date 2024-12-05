import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const CompanyHome = () => {
  const router = useRouter();

  const postedJobs = [
    {
      id: "1",
      title: "Marketing",
      company: "XYZ",
      location: "Remote",
      time: "1h ago",
    },
    {
      id: "2",
      title: "Software Developer",
      company: "XYZ",
      location: "Remote",
      time: "6h ago",
    },
  ];

  const collegesForOffCampus = ["B.TECH/BE", "DIPLOMA", "MBA"];
  const collegesForInternship = ["B.TECH/BE", "DIPLOMA", "MBA"];

  const renderJobCard = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  const renderCollegeCard = (item) => (
    <View style={styles.collegeCard} key={item}>
      <Text style={styles.collegeText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>Company's Profile</Text>
          <Text style={styles.profileSubtitle}>Updated 90d ago</Text>
          <TouchableOpacity onPress={() => router.push("/profile")}>
            <Text style={styles.viewProfile}>View Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appliedJobsCard}>
          <Text style={styles.profileTitle}>25</Text>
          <Text style={styles.profileSubtitle}>Job's Posted</Text>
          <TouchableOpacity>
            <Text style={styles.viewProfile}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Posted Jobs Section */}
      <View style={styles.jobsSection}>
        <View style={styles.jobsHeader}>
          <Text style={styles.sectionTitle}>Posted Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={postedJobs}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Colleges Posting For Off-Campus */}
      <View style={styles.jobsSection}>
        <View style={styles.jobsHeader}>
          <Text style={styles.sectionTitle}>
            Colleges Posting For OffCampus
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.collegeCardsContainer}>
          {collegesForOffCampus.map(renderCollegeCard)}
        </View>
      </View>

      {/* Colleges Posting For Internship */}
      <View style={styles.jobsSection}>
        <View style={styles.jobsHeader}>
          <Text style={styles.sectionTitle}>
            Colleges Posting For Internship
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.collegeCardsContainer}>
          {collegesForInternship.map(renderCollegeCard)}
        </View>
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
    backgroundColor: "#f9f9f9",
    padding: 15,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profileCard: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  appliedJobsCard: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileSubtitle: {
    color: "#888",
    marginBottom: 10,
  },
  viewProfile: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
  jobsSection: {
    marginBottom: 20,
  },
  jobsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
  jobCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    width: 200,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  company: {
    color: "#888",
    marginBottom: 5,
  },
  location: {
    color: "#007bff",
    marginBottom: 5,
  },
  time: {
    color: "#555",
  },
  collegeCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collegeCard: {
    backgroundColor: "#fff",
    padding: 20,
    marginRight: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  collegeText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
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

export default CompanyHome;