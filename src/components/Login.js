import React, { useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationScreen from '../components/LocationScreen';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {

  const [isLocationModalVisible, setLocationModalVisible] = useState(false);

  const openDetails = (service) => {
    navigation.navigate('DetailScreen', {
      title: service.title,
      imageUrl: service.imageUrl,
      description: service.description
    });
  };

  const ServiceCard = ({ title, imageUrl, subtitle, description }) => (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{subtitle}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Learn More" buttonStyle={styles.cardButton} titleStyle={styles.cardButtonText} onPress={() => openDetails({ title, imageUrl, description })} />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('../../assets/logoBg.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Spacer View to Keep Logo Centered */}
        <View style={{ flex: 1 }}></View>
        {/* Location Service Icon on the Right */}
        <TouchableOpacity onPress={() => setLocationModalVisible(true)}>
          <Icon name="location-sharp" size={24} color="#fff" />
        </TouchableOpacity>
        <LocationScreen
          visible={isLocationModalVisible}
          onClose={() => setLocationModalVisible(false)}
        />
      </View>


      <ScrollView >
        <View style={styles.servicesSection}>
          <Text h4 style={styles.sectionTitle}>Our Services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            <ServiceCard
              title="Used Car Inspection"
              imageUrl="https://static.overfuel.com/dealers/auto-city/image/30-goautocity-30color-1024x576.jpg" // Example image URL, change as needed
              subtitle="Comprehensive inspection for peace of mind."
              description="This is the full description of the Used Car Inspection service. It covers all the details about what is included in the service,
               the benefits for the customer, and any additional important information that the customer should be aware of before making a purchase decision."
            />
            <ServiceCard
              title="Used Bike Inspection"
              imageUrl="https://i.pinimg.com/736x/68/f0/21/68f02155d9e2cf6219edc88afb8d71c4.jpg" // Example image URL, change as needed
              subtitle="Detailed checks for your two-wheeled companions."
              description="Get a thorough inspection of your bike to ensure all systems are go."

            />
            <ServiceCard
              title="Oil Change"
              imageUrl="https://d26qplkpp6t30l.cloudfront.net/wp-content/uploads/2019/01/22092032/oil-change-explained.jpg"
              subtitle="Ensure your engine runs smoothly."
              description="Regular oil changes are vital to the longevity of your vehicle's engine."
            />
            <ServiceCard
              title="Brake Repair"
              imageUrl="https://media.istockphoto.com/id/522394158/photo/car-service-procedure.jpg?s=612x612&w=0&k=20&c=SXPyg7yMw0Uc4LuI59lchMouvjJ3z6r5oNKO7mdnHCc="
              subtitle="Safety first with reliable brakes."
              description="Brake servicing is crucial for the safety and performance of your vehicle."

            />
            <ServiceCard
              title="Tyre Change"
              imageUrl="https://media.istockphoto.com/id/492250416/photo/mechanic-changing-wheel-of-a-modern-car.jpg?s=612x612&w=0&k=20&c=mkibNuoYXzEBRKlMEfs-DF9AnI0bu6yYJH20UFwRd2k="
              subtitle="Optimize your driving experience."
              description="Properly maintained tires are critical for your vehicle's performance and your safety."

            />
          </ScrollView>
        </View>

        {/* Promotional Banner */}
        <View style={styles.promoBanner}>
          <Image
            source={{ uri: 'https://as2.ftcdn.net/v2/jpg/02/30/38/23/1000_F_230382343_TNYafJLrddIdnBPhKXtHsDj4czguybkH.jpg' }}
            style={styles.promoImage}
          />
          <Text style={styles.promoText}>Get 20% Off on Tyre Services!</Text>
        </View>

        <View style={styles.promoBanner}>
          <Image
            source={{ uri: 'https://dreamvision.media/wp-content/uploads/2022/07/xion-bike-commercial-768x323.jpg' }}
            style={styles.promoImage}
          />
          <Text style={styles.promoText}>Get 20% Off on All Services!</Text>
        </View>

      </ScrollView>
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#4a6fa5',
    paddingTop: 50,
    height: 90
  },
  logo: {
    width: 300, // Adjust width as per your logo's aspect ratio
    height: 250,
    resizeMode: 'contain',
    right: 85
  },

  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5
  },
  servicesSection: {
    paddingHorizontal: 10,
  },
  sectionTitle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',

  },
  scrollView: {
    paddingHorizontal: 5,
  },
  cardContainer: {
    width: width * 0.8,
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
    overflow: 'hidden', // keeps child image within the border radius
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover', // ensures the image covers the area without stretching
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4a6fa5', // primary color
    borderRadius: 25,
  },
  cardButtonText: {
    fontSize: 16,
  },
  promoBanner: {
    alignItems: 'center',
    marginVertical: 20,
  },
  promoImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  promoText: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
