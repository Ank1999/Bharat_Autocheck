import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Assuming you're using FontAwesome, adjust if using a different icon set
import AppHeader from '../Global/AppHeader';

const SearchScreen = ({navigation}) => {
    return (
        <View>

            <AppHeader
                showBackButton={true}
                showText={true} // Display text alongside the back button
                title="Search Page"
                onBackButtonPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.screen}>
                <Text style={styles.header}>Inspection</Text>

                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                </View>

                {/* Repeat for other categories and items... */}

                <Text style={styles.categoryHeader}>Cars</Text>
                <View style={styles.subCategoryContainer}>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.categoryHeader}>Service</Text>
                <View style={styles.subCategoryContainer}>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.categoryHeader}>Additional Service</Text>
                <View style={styles.subCategoryContainer}>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="car" style={styles.icon} />
                        <Text style={styles.categoryText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryItem}>
                        <Icon name="motorcycle" style={styles.icon} />
                        <Text style={styles.categoryText}>Motorcycles</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        marginBottom: 50
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 16,
        marginLeft: 16,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 10

    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the start of the container
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 16,
        width: '48%',
        height: 60
    },
    categoryHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 8,
    },
    subCategoryContainer: {
        flexDirection: 'row', // Align sub-category items in a row
        flexWrap: 'wrap', // Allow items to wrap to the next line
        justifyContent: 'space-between', // Distribute space between items
        paddingHorizontal: 16, // Add horizontal padding to the container
        marginBottom: 10
    },
    icon: {
        fontSize: 20,
        color: '#333333',
        marginRight: 8, // Add some space between the icon and the text
    },
    categoryText: {
        fontSize: 16,
    },
});

export default SearchScreen;
