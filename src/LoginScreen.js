import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, Image } from 'react-native';
import Store from './Store';
import { TouchableOpacity, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Observer } from 'mobx-react';

export default LoginScreen = (props) => {

    const [listData, setListData] = useState([
        {
            id: "1",
            name: "Saurabh",
            domain: "Android",
            image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
        },
        {
            id: "2",
            name: "Atif",
            domain: "Web",
            image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
        },
        {
            id: "3",
            name: "Shwet",
            domain: "UI/UX",
            image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
        },
        {
            id: "4",
            name: "Subhashree",
            domain: "ML",
            image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
        }
    ])

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <FlatList
                data={listData}
                renderItem={({ item }) => (<TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple("#000")}
                >
                    <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#d4d4d4' }}>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontSize: 30 }}>{item.name}</Text>
                            <Text style={{ fontSize: 20 }}>{item.domain}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>)}
                keyExtractor={(item) => (item.id)}
            />
            <TouchableOpacity
                onPress={() => {
                    var temp = listData;
                    var temp = [
                        ...temp,
                        {
                            id: temp.length + 1 + "",
                            name: "XYZ",
                            domain: "ABC",
                            image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
                        }
                    ]

                    setListData(temp);
                }}
                style={{ height: 50 }}>
                <Text>
                    Add Item
                    </Text>
            </TouchableOpacity>
        </View>
    );
}