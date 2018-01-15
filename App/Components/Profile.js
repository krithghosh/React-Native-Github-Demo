import React, {Component} from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import Badge from './Badge'
import styles from '../Stylesheets/profile'

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'      
    };

    getRowTitle(item) {
        item = (item === 'public_repos') ? item.replace('_', ' '): item
        return item[0] ? item[0].toUpperCase() + item.slice(1): item
    }

    render() {
        const {userInfo} = this.props.navigation.state.params
        var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos']
        var list = topicArr.map((item, index) => {
            if(!userInfo[item]) {
                return <View key={index} />
            } else {
                return (
                    <View key={index}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}>{this.getRowTitle(item)}</Text>
                            <Text styel={styles.rowContent}>{userInfo[item]}</Text>
                        </View>
                    </View>
                )
            }
        });
        return(
            <ScrollView style={styles.container}>
                <Badge userInfo={userInfo} />
                {list}
            </ScrollView>
        )
    }
}

export default Profile