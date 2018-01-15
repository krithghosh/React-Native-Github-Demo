import React, {Component} from 'react'
import {View, Image} from 'react-native'
import styles from '../Stylesheets/badge'

class Badge extends Component {
    render() {
        const {userInfo} = this.props
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: userInfo.avatar_url}} />
            </View>
        )
    }
}

export default Badge