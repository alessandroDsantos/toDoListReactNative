
import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ButtonAddCard } from "../ButtonAddCard";

import { useGetDateToday } from '../../hooks/useGetDateToday'

import { styles } from './styles';

// type props = {
//     addPress: () => void,
// }

// export const Header: React.FC<props> = ({ addPress }) => {
export const Header: React.FC = () => {

    const {dateFormat} = useGetDateToday(new Date());

    return(
        <View style={styles.header}>

            <View>
                <Text style={styles.title}>To Do List</Text>
                <Text style={styles.hours}>{dateFormat}</Text>
            </View>

            <ButtonAddCard/>

        </View>
    );
}