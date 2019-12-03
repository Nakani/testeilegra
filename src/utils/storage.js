import AsyncStorage from '@react-native-community/async-storage';

let loadedOnce = false;

export class Storage {
    static data = {
        schedules: [],
    };

    static async loadAsync() {
        var promise = await AsyncStorage.multiGet(['@user:data',], (error, result) => {
            if (!error) {
                this.data = { ...JSON.parse(result[0][1]), ...this.data };
            }
        });

        if (promise) {
            loadedOnce = true;
            return true;
        } else {
            return false;
        }
    }

    static async saveAsync() {
        let save = async () => {
            await AsyncStorage.multiSet([
                ['@user:data', JSON.stringify(this.data)],
            ], null);
        };
        if (!loadedOnce) {
            let loaded = await this.loadAsync();
            if (loaded) {
                save();
            }
        } else {
            save();
        }
    }

    static getData() {
        return this.data;
    }

    static setData(data) {
        console.log('SETTING DATA: ', data);
        this.data = { ...this.data, ...data };
        console.log('SETED DATA: ', this.data);
    }

    static async clearData() {
        this.data = {};
        this.saveAsync();
    }

};

