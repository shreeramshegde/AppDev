import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio App',
      description: 'A professional portfolio mobile application built with React Native and Expo. Features smooth navigation, responsive design, and modern UI components.',
      tech: ['React Native', 'Expo', 'JavaScript'],
      icon: 'mobile',
      color: theme.colors.primary,
      github: 'https://github.com/shreeramshegde/portfolio-app',
    },
    {
      id: 2,
      title: 'E-Commerce Mobile',
      description: 'Full-featured e-commerce application with product catalog, cart management, payment integration, and order tracking.',
      tech: ['React Native', 'Redux', 'API Integration'],
      icon: 'shopping-cart',
      color: '#10b981',
      github: 'https://github.com/shreeramshegde/ecommerce-app',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location services, 7-day forecast, and beautiful weather animations.',
      tech: ['React Native', 'REST API', 'Geolocation'],
      icon: 'cloud',
      color: '#f59e0b',
      github: 'https://github.com/shreeramshegde/weather-app',
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Productivity app with task organization, reminders, categories, and progress tracking. Clean and intuitive interface.',
      tech: ['React Native', 'AsyncStorage', 'Notifications'],
      icon: 'check-square',
      color: '#8b5cf6',
      github: 'https://github.com/shreeramshegde/task-manager',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Health and fitness app tracking workouts, calories, and progress. Includes charts and goal setting features.',
      tech: ['React Native', 'Charts', 'SQLite'],
      icon: 'heartbeat',
      color: '#ef4444',
      github: 'https://github.com/shreeramshegde/fitness-tracker',
    },
    {
      id: 6,
      title: 'Social Chat App',
      description: 'Real-time messaging application with group chats, media sharing, and push notifications.',
      tech: ['React Native', 'Firebase', 'WebSocket'],
      icon: 'comments',
      color: '#06b6d4',
      github: 'https://github.com/shreeramshegde/chat-app',
    },
  ];

  const openGitHub = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Projects</Text>
        <Text style={styles.headerSubtitle}>Explore my latest work and contributions</Text>
      </View>

      <View style={styles.projectsGrid}>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <View style={[styles.iconContainer, { backgroundColor: project.color + '15' }]}>
              <FontAwesome name={project.icon} size={32} color={project.color} />
            </View>
            
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            
            <View style={styles.techStack}>
              {project.tech.map((tech, index) => (
                <View key={index} style={styles.techTag}>
                  <Text style={styles.techText}>{tech}</Text>
                </View>
              ))}
            </View>
            
            <TouchableOpacity 
              style={[styles.githubButton, { backgroundColor: project.color }]}
              onPress={() => openGitHub(project.github)}
            >
              <FontAwesome name="github" size={16} color={theme.colors.card} />
              <Text style={styles.githubButtonText}>View on GitHub</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <FontAwesome name="code" size={20} color={theme.colors.textSecondary} />
        <Text style={styles.footerText}>More projects coming soon...</Text>
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
  header: {
    marginBottom: theme.spacing.xl,
    paddingTop: theme.spacing.md,
  },
  headerTitle: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  headerSubtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  projectsGrid: {
    gap: theme.spacing.lg,
  },
  projectCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  projectTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  projectDescription: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  techTag: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  techText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.text,
    fontWeight: '500',
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
  },
  githubButtonText: {
    color: theme.colors.card,
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
  },
  footerText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
  },
})