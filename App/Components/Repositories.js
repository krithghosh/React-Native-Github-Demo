import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, ScrollView, ToastAndroid, 
         TouchableHighlight, ActivityIndicator} from 'react-native'
import styles from '../Stylesheets/repositories'
import Badge from './Badge'
import Separator from './Separator'
import { getRepository } from '../Utils/RestApiService'

class Repositories extends Component {
    constructor(props) {
        super(props)
        this.state ={
            isLoading: false,
            userInfo: this.props.navigation.state.params.userInfo,
            repos: []
        }
    }

    static navigationOptions = ({navigation})=>({
        title: 'Repositories',
    });

    componentWillMount() {
        this.setState({ isLoading: true })
        getRepository(this.state.userInfo.login).then(res => {
            if(res.message === 'Not Found') {
                this.setState({ isLoading: false })
                ToastAndroid.show('No repositories found', ToastAndroid.SHORT)
            } else {
                this.setState({ isLoading: false, repos: res })
            }
        })
    }

    openPage(repo) {
        this.props.navigation.navigate('Web_View', {url: repo.html_url, repo_name: repo.name})
    }

    render() {
        const {repos} = this.state
        var list = repos.map((item, index) => {
            var desc = repos[index].description 
                            ? <Text style={styles.description}>{ repos[index].description }</Text> 
                            : < View/>
            return  (
                <View key={index}>
                    <View style={styles.rowContainer}>
                        <TouchableHighlight
                            onPress={this.openPage.bind(this, repos[index])}
                            underlayColor='transparent'>
                            <Text style={styles.name}>{repos[index].name}</Text>
                        </TouchableHighlight>
                        <Text style={styles.stars}>Stars: {repos[index].stargazers_count}</Text>
                        {desc}
                    </View>
                    <Separator />
                </View>
            )
        })
        return(
            <ScrollView style={styles.container}>
                <Badge userInfo={this.state.userInfo} />
                <ActivityIndicator
                    animating={this.state.isLoading}
                    color="#111"
                    size={this.state.isLoading ? "large" : 0}/>
                {list}
            </ScrollView>
        )
    }
}

Repositories.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array
}

export default Repositories