import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationScreen from '../components/LocationScreen';
import { useCart } from '../Global/CartContext';
import { v4 as uuidv4 } from 'uuid';
import Toast from 'react-native-toast-message';
import SummaryBar from '../Global/SummaryBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {

    const [isLocationModalVisible, setLocationModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [savedAddress, setSavedAddress] = useState('');
    const numberOfSlides = 2;
    const { addToCart } = useCart();

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / Dimensions.get('window').width);
        setCurrentIndex(currentIndex);
    };

    useEffect(() => {
        const loadSavedAddresses = async () => {
            try {
                const savedAddressesString = await AsyncStorage.getItem('savedAddresses');
                const savedAddresses = savedAddressesString ? JSON.parse(savedAddressesString) : [];
                setSavedAddress(savedAddresses);
            } catch (error) {
                console.error('Failed to load saved addresses:', error);
            }
        };

        loadSavedAddresses();
    }, []);

    const handleSaveAddress = async (updatedAddresses) => {
        setSavedAddress(updatedAddresses); // Assuming updatedAddresses is an array
        console.log('Fetched saved addresses:', savedAddresses);

        // Save the updated array to AsyncStorage
        try {
            await AsyncStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
        } catch (error) {
            console.error('Failed to save addresses:', error);
        }
    };


    const openSearch = () => {
        // Logic to navigate to the SearchScreen
        navigation.navigate('SearchScreen');
    };

    const openDetails = (service) => {
        navigation.navigate('DetailScreen', {
            title: service.title,
            imageUrl: service.imageUrl,
            description: service.description,
            price: service.price
        });
    };

    const PromoCard = ({ imageUrl, title }) => (
        <View style={styles.promoContainer}>
            <View style={styles.promoBanner}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.promoImage}
                />
                <Text style={styles.promoText}>{title}</Text>
            </View>
        </View>
    );

    const ServiceCard = ({ title, imageUrl, subtitle, description, price }) => (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card} onPress={() => openDetails({ title, imageUrl, description, price })}>
                <Image source={{ uri: imageUrl }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardDescription}>{subtitle}</Text>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.cardTitle}>{price}</Text>
                        <Button title="Add" buttonStyle={styles.cardButton} titleStyle={styles.cardButtonText} onPress={() => {
                            addToCart({
                                id: uuidv4(),
                                title: title,
                                price: price,
                                image: imageUrl
                            });
                            Toast.show({
                                type: 'success',
                                position: 'bottom',
                                text1: 'Added to cart successfully!',
                                visibilityTime: 4000,
                                autoHide: true,
                                bottomOffset: 50,
                            });
                        }} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/logoBg.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{
                                right: 80,
                                textAlign: 'center',
                                alignSelf: 'center',
                                color: 'white',
                                width: 100, // Fixed width
                                overflow: 'hidden', // This is redundant in React Native but kept for clarity
                            }}
                            numberOfLines={1} // Ensures that text does not wrap and uses ellipsis
                        >
                            {Array.isArray(savedAddress) && savedAddress.map((address, index) => (
                                <Text key={index}>{address}</Text>
                            ))}
                        </Text>
                        <TouchableOpacity style={{ right: 60 }} onPress={() => setLocationModalVisible(true)}>
                            <Icon name="location-sharp" size={24} color="#fff" />
                        </TouchableOpacity>

                        <LocationScreen
                            visible={isLocationModalVisible}
                            onClose={() => setLocationModalVisible(false)}
                            onSaveAddress={handleSaveAddress} // Passing the function here
                            savedAddress={savedAddress}
                        />
                    </View>

                </View>

                {/* Search Bar */}
                <TouchableOpacity onPress={openSearch} style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#9e9e9e" style={styles.searchIcon} />
                    <Text style={styles.searchInput}>Search Services</Text>
                </TouchableOpacity>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.servicesSection}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            onMomentumScrollEnd={handleScroll}
                            style={styles.horizontalScrollView}>
                            <PromoCard
                                title="Get 20% Off on All Services!"
                                imageUrl="https://as2.ftcdn.net/v2/jpg/02/30/38/23/1000_F_230382343_TNYafJLrddIdnBPhKXtHsDj4czguybkH.jpg"
                            />
                            <PromoCard
                                title="Get 20% Off on All Services!"
                                imageUrl="https://dreamvision.media/wp-content/uploads/2022/07/xion-bike-commercial-768x323.jpg"
                            />
                        </ScrollView>

                        <View style={styles.dotsContainer}>
                            {Array.from({ length: numberOfSlides }).map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        currentIndex === index ? styles.activeDot : styles.inactiveDot,
                                    ]}
                                />
                            ))}
                        </View>

                        <Text h4 style={styles.sectionTitle}>Trending Services</Text>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                            <ServiceCard
                                title="Used Car Inspection"
                                imageUrl="https://static.overfuel.com/dealers/auto-city/image/30-goautocity-30color-1024x576.jpg"
                                subtitle="Comprehensive inspection for peace of mind."
                                price="100"
                                description="This is the full description of the Used Car Inspection service. It covers all the details about what is included in the service,
                                        the benefits for the customer, and any additional important information that the customer should be aware of before making a purchase decision."
                            />
                            <ServiceCard
                                title="Used Bike Inspection"
                                price="400"
                                imageUrl="https://i.pinimg.com/736x/68/f0/21/68f02155d9e2cf6219edc88afb8d71c4.jpg"
                                subtitle="Detailed checks for your two-wheeled companions."
                                description="Get a thorough inspection of your bike to ensure all systems are go."

                            />
                            <ServiceCard
                                title="Oil Change"
                                price="500"
                                imageUrl="https://d26qplkpp6t30l.cloudfront.net/wp-content/uploads/2019/01/22092032/oil-change-explained.jpg"
                                subtitle="Ensure your engine runs smoothly."
                                description="Regular oil changes are vital to the longevity of your vehicle's engine."
                            />
                            <ServiceCard
                                title="Brake Repair"
                                price="800"
                                imageUrl="https://media.istockphoto.com/id/522394158/photo/car-service-procedure.jpg?s=612x612&w=0&k=20&c=SXPyg7yMw0Uc4LuI59lchMouvjJ3z6r5oNKO7mdnHCc="
                                subtitle="Safety first with reliable brakes."
                                description="Brake servicing is crucial for the safety and performance of your vehicle."

                            />
                            <ServiceCard
                                title="Tyre Change"
                                price="200"
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
                <SummaryBar />
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </>

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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 50
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#9e9e9e',
        fontSize: 16,
    },
    servicesSection: {
        paddingHorizontal: 10,
        bottom: 20
    },
    sectionTitle: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 20,
        color: '#333',
        fontWeight: 'bold',
    },
    scrollView: {
        // paddingHorizontal: 5,
    },
    horizontalScrollView: {
        marginHorizontal: -10
    },
    promoContainer: {
        width: width * 1,
        padding: 10,
    },
    dotsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 5
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: 'gray',
    },
    activeDot: {
        height: 11,
        width: 11,
        borderRadius: 5.5,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'gray',
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
        height: 300,
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
        justifyContent: 'space-between',
    },
    cardButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#4a6fa5', // primary color
        borderRadius: 15,
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
