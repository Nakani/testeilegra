import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import { requisitionsService } from '../../../services/requisitions'

export class QrCodeComponent extends Component {

    state = {
        modalVisible: false,
        success: null,
        data: '',
    };

    onSuccess = async (e) => {
        const data = await requisitionsService.getNfce(e.data)
        this.triggerNext(data)
        await this.setState({ success: true, data: data });
    };

    triggerNext(value) {
        this.props.triggerNextStep({ value })
    }


    render() {
        const { success, data } = this.state
        return !success ? (
            <View style={styles.container}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    showMarker={true}
                    checkAndroid6Permissions={true}
                    ref={(elem) => { this.scanner = elem }}
                    cameraStyle={styles.cameraContainer}
                />
            </View>
        ) : (
                <View style={styles.containerResult}>

                    <Image
                        style={styles.image}
                        source={{ uri: data.thumb }}
                    //resizeMode='contain'

                    />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: "transparent",
    },

    touchable: {
        padding: 0
    },

    cameraContainer: {
        height: Dimensions.get('window').height,
        width: '100%',
    },

    containerResult: {
        height: 'auto',
        //  width: Dimensions.get('window').width,

        alignContent: 'center',

    },

    image: {
        width: '100%',
        height: 200
    },

    textResult: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center'

    }

});