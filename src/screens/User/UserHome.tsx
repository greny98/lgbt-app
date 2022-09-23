import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const UserHome = () => {
    return (
        <View>
            <View style={{

            }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 32, lineHeight: 44.8, color: '#92379C', marginTop: 50, marginBottom: 30 }}>LGBT</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <ImageBackground
                        source={require('../../../assets/images/circle.png')}
                        style={{ width: 173, height: 173, position: 'relative' }}
                    />
                    <ImageBackground
                        source={require('../../../assets/images/avartar.png')}
                        style={{ width: 137, height: 137, position: 'absolute', top: 18 }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', color: '#F5344B', marginRight: 10 }}>Tr Vu, 30</Text>
                        <ImageBackground
                            source={require('../../../assets/images/star.png')}
                            style={{ width: 22, height: 22 }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={require('../../../assets/images/setting.png')}
                            style={{ width: 70, height: 70 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            source={require('../../../assets/images/pen.png')}
                            style={{ width: 100, height: 100 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <ImageBackground
                            source={require('../../../assets/images/guard.png')}
                            style={{ width: 70, height: 70 }}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default UserHome