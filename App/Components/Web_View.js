import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, WebView } from 'react-native'
import styles from '../Stylesheets/webview'

class Web_View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: props.navigation.state.params.url
        }
    }

    static navigationOptions = ({navigation})=>({
        title: `${navigation.state.params.repo_name}`,
    });

    render() {
        return(
            <WebView source={{uri: this.state.url}}
                         javaScriptEnabled={true}
                         domStorageEnabled={true}
                         startInLoadingState={true} />
        )
    }
}

Web_View.propTypes = {
    url: PropTypes.string,
    repo_name: PropTypes.string
}

export default Web_View