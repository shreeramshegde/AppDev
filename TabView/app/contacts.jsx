import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Contacts() {
  const contactMethods = [
    {
      id: 1,
      title: 'Email',
      subtitle: 'your.email@example.com',
      icon: 'envelope',
      color: '#ef4444',
      action: () => Linking.openURL('mailto:your.email@example.com'),
    },
    {
      id: 2,
      title: 'GitHub',
      subtitle: '@shreeramshegde',
      icon: 'github',
      color: '#1f2937',
      action: () => Linking.openURL('https://github.com/shreeramshegde'),
    },
    {
      id: 3,
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      icon: 'linkedin',
      color: '#0a66c2',
      action: () => Linking.openURL('https://linkedin.com/in/shreeramshegde'),
    },
    {
      id: 4,
      title: 'Twitter',
      subtitle: '@shreeramshegde',
      icon: 'twitter',
      color: '#1da1f2',
      action: () => Linking.openURL('https://twitter.com/shreeramshegde'),
    },
    {
      id: 5,
      title: 'Portfolio Website',
      subtitle: 'Visit my website',
      icon: 'globe',
      color: '#8b5cf6',
      action: () => Linking.openURL('https://shreeramshegde.dev'),
    },
    {
      id: 6,
      title: 'Phone',
      subtitle: '+91 XXXXX XXXXX',
      icon: 'phone',
      color: '#10b981',
      action: () => Linking.openURL('tel:+91XXXXXXXXXX'),
    },
  ];

  const quickActions = [
    {
      id: 1,
      label: 'Download CV',
      icon: 'download',
      color: theme.colors.primary,
      action: () => Alert.alert('Download CV', 'CV download functionality coming soon!'),
    },
    {
      id: 2,
      label: 'Schedule Meeting',
      icon: 'calendar',
      color: '#f59e0b',
      action: () => Linking.openURL('https://calendly.com/shreeramshegde'),
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <FontAwesome name="envelope-open" size={48} color={theme.colors.primary} />
        <Text style={styles.headerTitle}>Get In Touch</Text>
        <Text style={styles.headerSubtitle}>
          Let's connect! Feel free to reach out through any of these channels.
        </Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        {quickActions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={[styles.quickActionButton, { backgroundColor: action.color }]}
            onPress={action.action}
          >
            <FontAwesome name={action.icon} size={20} color={theme.colors.card} />
            <Text style={styles.quickActionText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contact Methods */}
      <View style={styles.contactMethodsContainer}>
        {contactMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={styles.contactCard}
            onPress={method.action}
            activeOpacity={0.7}
          >
            <View style={[styles.iconCircle, { backgroundColor: method.color + '15' }]}>
              <FontAwesome name={method.icon} size={24} color={method.color} />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>{method.title}</Text>
              <Text style={styles.contactSubtitle}>{method.subtitle}</Text>
            </View>
            <FontAwesome name="chevron-right" size={16} color={theme.colors.textSecondary} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Additional Info */}
      <View style={styles.infoCard}>
        <View style={styles.infoHeader}>
          <FontAwesome name="info-circle" size={20} color={theme.colors.primary} />
          <Text style={styles.infoTitle}>Availability</Text>
        </View>
        <Text style={styles.infoText}>
          Currently available for freelance projects and full-time opportunities. 
          I typically respond to messages within 24 hours.
        </Text>
        <View style={styles.responseBadge}>
          <View style={styles.statusDot} />
          <Text style={styles.responseText}>Usually responds in a few hours</Text>
        </View>
      </View>

      {/* Location */}
      <View style={styles.locationCard}>
        <FontAwesome name="map-marker" size={24} color={theme.colors.primary} />
        <View style={styles.locationInfo}>
          <Text style={styles.locationTitle}>Based in</Text>
          <Text style={styles.locationText}>India</Text>
          <Text style={styles.timezoneText}>UTC +5:30 (IST)</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Looking forward to hearing from you! 🚀</Text>
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
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  headerTitle: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  headerSubtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.lg,
    lineHeight: 22,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
    ...theme.shadows.md,
  },
  quickActionText: {
    color: theme.colors.card,
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
  },
  contactMethodsContainer: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  contactSubtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  infoCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  infoTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  infoText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  responseBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    alignSelf: 'flex-start',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.success,
  },
  responseText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.text,
    fontWeight: '500',
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  locationInfo: {
    marginLeft: theme.spacing.md,
  },
  locationTitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  locationText: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  timezoneText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
  },
  footerText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
})