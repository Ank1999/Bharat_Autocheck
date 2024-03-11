import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TimeSlotButton = ({ slot, selected, onSelect }) => (
    <TouchableOpacity
        style={[styles.timeSlotButton, selected && styles.selectedTimeSlotButton]}
        onPress={() => onSelect(slot)}
    >
        <Text style={[styles.timeSlotText, selected && styles.selectedTimeSlotText]}>{slot}</Text>
    </TouchableOpacity>
);

const DateItem = ({ date, isSelected, onSelect }) => {
    const day = date.getDate().toString().padStart(2, '0'); // Ensure day is two digits
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

    const dateText = `${month}'${year}`;


    return (
        <TouchableOpacity
            onPress={() => onSelect(date)}
            style={[styles.dateItem, isSelected && styles.selectedDateItem]}
        >
            <Text style={[styles.dateDay, isSelected && styles.selectedDateText]}>{day}</Text>
            <Text style={[styles.dateMonthYear, isSelected && styles.selectedDateText]}>{dateText}</Text>
        </TouchableOpacity>
    );
};


export default function DateTimeScreen({ navigation, onClose, visible }) {

    const [selectedDate, setSelectedDate] = useState(new Date());

    // Create an array of the next 30 days
    const dateArray = Array.from({ length: 30 }, (_, index) => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + index);
        return futureDate;
    });

    const times = [
        '09:00-10:00', '10:00-11:00', '11:00-12:00',
        '12:00-13:00', '14:00-15:00', '15:00-16:00', '16:00-17:00',
        '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00'
    ]; // Time slots


    const [selectedTime, setSelectedTime] = useState(null);

    const handleSelectDate = (date) => {
        setSelectedDate(date);
    };

    const handleBack = () => {
        navigation.goBack();
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalContainer}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <View style={styles.modalContent}>

                                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                                    <Icon name="close" size={24} color="#000" />
                                </TouchableOpacity>
                                <Text style={styles.selectTimeText}>Select Date</Text>

                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.datesScrollView}
                                >
                                    {dateArray.map((date, index) => (
                                        <DateItem
                                            key={index}
                                            date={date}
                                            isSelected={date.toDateString() === selectedDate.toDateString()}
                                            onSelect={handleSelectDate}
                                        />
                                    ))}
                                </ScrollView>
                                <Text style={styles.selectTimeText}>Select time</Text>
                                <ScrollView>
                                    <View style={styles.timeSlotsContainer}>
                                        {times.map((time, index) => (
                                            <TimeSlotButton
                                                key={index}
                                                slot={time}
                                                selected={selectedTime === time}
                                                onSelect={setSelectedTime}
                                            />
                                        ))}
                                    </View>

                                </ScrollView>
                                <TouchableOpacity style={styles.buyNowButton}>
                                    <Text style={styles.buyNowText}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    backButton: {
        position: 'relative',
        bottom: 90, // Adjust as needed
        zIndex: 1,
        marginTop: 90
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 2,
        marginBottom: 20
    },
    closeButtonText: {
        fontSize: 24, // Or your desired size
        fontWeight: 'bold',
    },
    datesScrollView: {
        flexGrow: 0,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 16,
        // backgroundColor: '#FFF', // Adjust if you have a different background color
        height: 100,
    },
    dateMonthYear: {
        fontSize: 14,
        color: '#000',
        // Add any other styling you need for the month and year text
    },
    selectedDateText: {
        color: '#FFF',

    },
    dateItem: {
        width: 60,
        marginHorizontal: 6,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        top: 10
    },
    selectedDateItem: {
        backgroundColor: '#34C759',
    },
    dateDay: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    dateMonth: {
        fontSize: 14,
        color: '#000',
    },
    dateYear: {
        fontSize: 12,
        color: '#000',
    },
    selectedDateText: {
        color: '#FFF',
    },
    dayText: {
        textAlign: 'center',
        fontWeight: '500',
    },
    selectedDayText: {
        color: '#FFFFFF',
    },
    selectTimeText: {
        fontSize: 20,
        margin: 15,
        top: 10,
        alignSelf: 'center',
        fontWeight: '500'
    },
    timeSlotsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        bottom: 60

    },
    timeSlotButton: {
        width: '46%',
        backgroundColor: '#fff',
        borderRadius: 18,
        paddingVertical: 20,
        alignItems: 'center',
        marginBottom: 16,
    },
    selectedTimeSlotButton: {
        backgroundColor: '#34C759',
    },
    timeSlotText: {
        fontWeight: '500',
    },
    selectedTimeSlotText: {
        color: '#FFFFFF',
    },
    floatingButton: {
        position: 'absolute', // Use absolute positioning
        right: 20, // Place 20 points from the right edge
        bottom: 20, // Place 20 points from the bottom edge
        width: 60, // Set the width
        height: 60, // Set the height
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center', // Center the text horizontally
        borderRadius: 30, // Circular shape
        backgroundColor: '#34C759', // Background color
        shadowColor: '#000', // Shadow color
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    floatingButtonText: {
        color: '#FFF', // Text color
        fontSize: 16, // Font size
        fontWeight: 'bold', // Font weight
    },
    appButton: {
        flex: 1,
    },
    buyNowButton: {
        backgroundColor: '#34C759',
        paddingVertical: 15,
        borderRadius: 15,
        alignSelf: 'flex-end',
        padding:20,
        bottom:30
      },
      buyNowText: {
        fontSize: 18,
        color: '#FFF',
      },
});