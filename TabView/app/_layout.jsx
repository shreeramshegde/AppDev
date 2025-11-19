import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <>
            <Tabs 
                screenOptions={{ 
                    tabBarActiveTintColor: '#2563eb',
                    tabBarInactiveTintColor: '#64748b',
                    tabBarStyle: {
                        backgroundColor: '#ffffff',
                        borderTopWidth: 1,
                        borderTopColor: '#e2e8f0',
                        paddingBottom: 5,
                        paddingTop: 5,
                        height: 60,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '600',
                    },
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="projects"
                    options={{
                        title: 'Projects',
                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="code" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="contacts"
                    options={{
                        title: 'Contact',
                        tabBarIcon: ({ color }) => <FontAwesome size={24} name="envelope" color={color} />,
                    }}
                />
            </Tabs>
        </>
    );
}
