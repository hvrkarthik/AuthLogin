import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface CarouselItem {
  id: number;
  image: number;
}

const DashboardScreen: React.FC = () => {
  const carouselData: CarouselItem[] = [
    { id: 1, image: require('../assets/Images/demo1.jpg') },
    { id: 2, image: require('../assets/Images/demo2.jpg') },
    { id: 3, image: require('../assets/Images/demo3.jpeg') },
  ];

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Dashboard</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselData}
          renderItem={renderItem}
          sliderWidth={350}
          itemWidth={300}
          layout={'default'}
          loop
          autoplay
        />
      </View>
      <Text style={styles.subTitle}>Explore the Latest</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  carouselContainer: {
    height: 200, // Adjust this height as needed
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 20,
  },
  carouselItem: {
    flex: 1,
    borderRadius: 10,
    overflow: 'visible',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  carouselImage: {
    flex: 1,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default DashboardScreen;
