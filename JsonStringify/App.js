import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#1E88E5" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text style={styles.movieText}>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1419',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  movieText: {
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#1A1F26',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1E88E5',
  },
});
