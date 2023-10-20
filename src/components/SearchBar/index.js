import React, { useState } from 'react';
import { View, TextInput, Button, Pressable, Text } from 'react-native';
import { searchInputstyles } from './styles';

const SearchBar = ({ onSearch, searchText, setSearchText, setPage }) => {

    return (
        <View style={searchInputstyles.container}>

            <TextInput
                style={searchInputstyles.inputField}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search movies..."
                onBlur={()=>setPage(1)}
            />
            <Pressable onPress={() => onSearch(searchText)} style={searchInputstyles.button}>
                <Text style={searchInputstyles.text}>Search</Text>
            </Pressable>

        </View>
    );
};


export default SearchBar;
