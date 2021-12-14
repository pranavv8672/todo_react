import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export const Task = (props) => {
    return (
        <View style = {styles.items}>

            <View style = {styles.itemLeft}>
                <View style = {styles.square}>

                </View>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>

            <View style = {styles.circular}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    items :{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 11,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft :{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square :{
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText :{
        maxWidth: '80%',

    },
    circular :{
        width:12,
        height: 12,
        borderColor: '#55bcf6',
        borderRadius: 5,
        borderWidth: 2,
    },

});

export default Task;

