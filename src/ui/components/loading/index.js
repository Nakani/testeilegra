import React, { useEffect, useState } from 'react';
import {
    View,
} from 'react-native';
import LottieView from 'lottie-react-native';

import loading from 'assets/animations/loading.json'

export function LoadindComponent() {
    return (
        <View>
            <LottieView source={loading} autoPlay loop />
        </View>
    )
}
