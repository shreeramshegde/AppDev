import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, LinearGradient } from 'react-native';

export default function App() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [expandedSection, setExpandedSection] = useState('skills');

  const allSkills = [
    'React Native',
    'JavaScript',
    'TypeScript',
    'Expo',
    'State Management',
    'Mobile Development',
    'UI/UX Design',
    'REST APIs',
    'Firebase'
  ];

  const experience = [
    { company: 'Tech Solutions Inc.', position: 'Senior Developer', period: '2022 - Present' },
    { company: 'Digital Innovations', position: 'React Native Developer', period: '2020 - 2022' },
    { company: 'StartUp Labs', position: 'Junior Developer', period: '2019 - 2020' }
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileInitials}>
            <Text style={styles.initialsText}>SR</Text>
          </View>
          <Text style={styles.nameText}>Shreeram</Text>
          <Text style={styles.titleText}>Senior React Native Developer</Text>
          <Text style={styles.locationText}>📍 San Francisco, CA</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5+</Text>
            <Text style={styles.statLabel}>Years Experience</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>20+</Text>
            <Text style={styles.statLabel}>Projects Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{selectedSkills.length}</Text>
            <Text style={styles.statLabel}>Selected Skills</Text>
          </View>
        </View>

        {/* Skills Section */}
        <TouchableOpacity 
          style={styles.collapsibleHeader}
          onPress={() => toggleSection('skills')}
          activeOpacity={0.7}
        >
          <View style={styles.headerContent}>
            <Text style={styles.sectionIcon}>💻</Text>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
          </View>
          <Text style={styles.expandIcon}>
            {expandedSection === 'skills' ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>

        {expandedSection === 'skills' && (
          <View style={styles.skillsSection}>
            <View style={styles.skillsContainer}>
              {allSkills.map((skill, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.skillBadge,
                    selectedSkills.includes(skill) && styles.skillBadgeSelected
                  ]}
                  onPress={() => toggleSkill(skill)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.skillText}>
                    {selectedSkills.includes(skill) ? '✓ ' : ''}{skill}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Experience Section */}
        <TouchableOpacity 
          style={styles.collapsibleHeader}
          onPress={() => toggleSection('experience')}
          activeOpacity={0.7}
        >
          <View style={styles.headerContent}>
            <Text style={styles.sectionIcon}>💼</Text>
            <Text style={styles.sectionTitle}>Experience</Text>
          </View>
          <Text style={styles.expandIcon}>
            {expandedSection === 'experience' ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>

        {expandedSection === 'experience' && (
          <View style={styles.experienceSection}>
            {experience.map((exp, index) => (
              <View key={index} style={styles.experienceCard}>
                <View style={styles.expHeader}>
                  <Text style={styles.expCompany}>{exp.company}</Text>
                  <Text style={styles.expPeriod}>{exp.period}</Text>
                </View>
                <Text style={styles.expPosition}>{exp.position}</Text>
              </View>
            ))}
          </View>
        )}

        {/* About Section */}
        <TouchableOpacity 
          style={styles.collapsibleHeader}
          onPress={() => toggleSection('about')}
          activeOpacity={0.7}
        >
          <View style={styles.headerContent}>
            <Text style={styles.sectionIcon}>👤</Text>
            <Text style={styles.sectionTitle}>About</Text>
          </View>
          <Text style={styles.expandIcon}>
            {expandedSection === 'about' ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>

        {expandedSection === 'about' && (
          <View style={styles.aboutSection}>
            <Text style={styles.aboutText}>
              Highly skilled React Native developer with 5+ years of experience building scalable, high-performance mobile applications. Specialized in cross-platform development, state management, and modern UI/UX design patterns.
            </Text>
            <Text style={styles.aboutText} numberOfLines={1}>
              Passionate about clean code, best practices, and delivering exceptional user experiences.
            </Text>
          </View>
        )}

        {/* CTA Button */}
        <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
          <Text style={styles.ctaButtonText}>Get In Touch</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1419',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 20,
  },
  profileInitials: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1E88E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  initialsText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  nameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E88E5',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 13,
    color: '#90A4AE',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#1A1F26',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A3038',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E88E5',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#90A4AE',
    textAlign: 'center',
  },
  collapsibleHeader: {
    backgroundColor: '#1A1F26',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A3038',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sectionIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  expandIcon: {
    color: '#1E88E5',
    fontSize: 14,
    fontWeight: '700',
  },
  skillsSection: {
    backgroundColor: '#1A1F26',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A3038',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#2A3038',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#3A424A',
  },
  skillBadgeSelected: {
    backgroundColor: '#1E88E5',
    borderColor: '#1565C0',
  },
  skillText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  experienceSection: {
    backgroundColor: '#1A1F26',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A3038',
    gap: 12,
  },
  experienceCard: {
    backgroundColor: '#0F1419',
    padding: 14,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1E88E5',
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  expCompany: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  expPeriod: {
    fontSize: 12,
    color: '#90A4AE',
    fontWeight: '500',
  },
  expPosition: {
    fontSize: 13,
    color: '#1E88E5',
    fontWeight: '500',
  },
  aboutSection: {
    backgroundColor: '#1A1F26',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A3038',
    gap: 12,
  },
  aboutText: {
    fontSize: 13,
    color: '#B0BEC5',
    lineHeight: 20,
    fontWeight: '400',
  },
  ctaButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#1E88E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});

