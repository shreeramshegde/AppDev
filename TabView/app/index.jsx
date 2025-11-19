import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Home() {
  const skills = [
    'React Native', 'JavaScript', 'TypeScript', 'Expo',
    'Mobile Development', 'UI/UX Design', 'Git', 'REST APIs'
  ];

  const openGitHub = () => {
    Linking.openURL('https://github.com/shreeramshegde');
  };

  const openEmail = () => {
    Linking.openURL('mailto:your.email@example.com');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={100} color={theme.colors.primary} />
        </View>
        <Text style={styles.name}>Shreeram Shegde</Text>
        <Text style={styles.title}>Mobile Developer</Text>
        <Text style={styles.tagline}>Building beautiful & functional mobile experiences</Text>
        
        {/* Quick Links */}
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.linkButton} onPress={openGitHub}>
            <FontAwesome name="github" size={20} color={theme.colors.card} />
            <Text style={styles.linkButtonText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={openEmail}>
            <FontAwesome name="envelope" size={20} color={theme.colors.card} />
            <Text style={styles.linkButtonText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome name="user" size={20} color={theme.colors.primary} />
          <Text style={styles.sectionTitle}>About Me</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.aboutText}>
            Passionate mobile developer with expertise in React Native and modern JavaScript frameworks. 
            I love creating intuitive, performant applications that solve real-world problems and deliver 
            exceptional user experiences.
          </Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <FontAwesome name="code" size={20} color={theme.colors.primary} />
          <Text style={styles.sectionTitle}>Skills</Text>
        </View>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <View style={styles.statCard}>
          <FontAwesome name="code" size={24} color={theme.colors.primary} />
          <Text style={styles.statNumber}>15+</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>
        <View style={styles.statCard}>
          <FontAwesome name="star" size={24} color={theme.colors.primary} />
          <Text style={styles.statNumber}>3+</Text>
          <Text style={styles.statLabel}>Years Exp</Text>
        </View>
        <View style={styles.statCard}>
          <FontAwesome name="coffee" size={24} color={theme.colors.primary} />
          <Text style={styles.statNumber}>∞</Text>
          <Text style={styles.statLabel}>Coffee</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.xxl,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  avatarContainer: {
    marginBottom: theme.spacing.md,
  },
  name: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.primary,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
  },
  tagline: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  quickLinks: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
    ...theme.shadows.md,
  },
  linkButtonText: {
    color: theme.colors.card,
    fontSize: theme.fontSize.md,
    fontWeight: '600',
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  aboutText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  skillChip: {
    backgroundColor: theme.colors.card,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadows.sm,
  },
  skillText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.text,
    fontWeight: '500',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    ...theme.shadows.md,
  },
  statNumber: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
  },
  statLabel: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
})