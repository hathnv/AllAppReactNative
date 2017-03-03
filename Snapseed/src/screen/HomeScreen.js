import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    Animated,
    ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


/**
 * get width and height of screen 
 * based: devices
 */
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

/**
 * Screen
 * Demo animated library in RN project
 */
class HomeScreen extends Component {

    state = {
        insightAnimatedValue: new Animated.Value(screenHeight),
        isInsight: false
    }

    /**
     * open insights Layout
     */
    onInsightPressed = () => {
        this.setState(
            {
                isInsight: true
            }
        );

        Animated.timing(
            this.state.insightAnimatedValue,
            {
                toValue: 0,
                duration: 500
            }
        ).start();
    }
    /**
     * back to Home Screen
     */
    returnHomeScreen = () => {
        this.setState(
            {
                isInsight: false
            }
        );

        Animated.timing(
            this.state.insightAnimatedValue,
            {
                toValue: screenHeight,
                duration: 500
            }
        ).start();
    }

    /**
     * create view for Header
     */
    renderNavBar = () => {
        return (
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={styles.btnOpen}
                    onPress={() => console.log("onOpenPresses")}
                >
                    <Text style={styles.openTextStyle}>OPEN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnOptional}
                >
                    <View style={{ width: 8, height: 20 }}>
                        <View style={{ width: 8, height: 6 }}>
                            <Text style={styles.optionalTextStyle}>.</Text>
                        </View>
                        <View style={{ width: 8, height: 6 }}>
                            <Text style={styles.optionalTextStyle}>.</Text>
                        </View>
                        <View style={{ width: 8, height: 6 }}>
                            <Text style={styles.optionalTextStyle}>.</Text>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }

    /**
     * create view for footer, it has button 'Insights'
     * to aminated Insights layout 
     */
    renderFooter = () => {
        if (!this.state.isInsight) {
            return (
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={styles.btnInsignt}
                        onPress={this.onInsightPressed}
                    >
                        <Ionicons
                            name="ios-book"
                            size={30}
                            color="#fff"
                        />
                        <Text style={styles.insightText}>INSIGHTS</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    style={styles.btnInsignt}
                    onPress={this.returnHomeScreen}
                >
                    <Ionicons
                        name="ios-arrow-down"
                        size={30}
                        color="#fff"
                    />
                    <Text style={styles.insightText}>BACK TO EDITOR</Text>
                </TouchableOpacity>
            </View>
        );

    }
    /**
     * content 
     * layout of homescreen
     */
    renderImageContent = () => {
        return (
            <TouchableWithoutFeedback
            >
                <View
                    style={styles.contentStyle}
                >
                    <Image
                        source={require('../imgs/leaf.png')}
                    />
                    <Text style={styles.textTapInContent}>Tap anywhere to open photo</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    /**
     * ScrollView
     * include: a list of image
     */
    renderInsightDetail = () => {
        return (
            <Animated.View
                style={[
                    styles.insightView,
                    { top: this.state.insightAnimatedValue }
                ]}
            >
                <TouchableWithoutFeedback
                    onPress={this.returnHomeScreen}
                >
                    <View
                        style={styles.viewTopInsightDetail}
                    />
                </TouchableWithoutFeedback>

                <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.insightViewCardTop}>
                        <Text style={styles.insightViewCardTopText}>Insights</Text>
                    </View>
                    <View style={styles.imageCardContainer}>
                        <Image
                            style={styles.imageCard}
                            source={require('../imgs/image1.jpg')}
                        >
                            <View style={styles.insightViewInImage}>
                                <View style={styles.textInImageCard}>
                                    <Text style={styles.titleStyle}>Những bước đầu tiên</Text>
                                    <Text style={styles.subTitleStyle}>Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed</Text>
                                </View>
                                <View style={styles.iconRightImageCard}>
                                    <Text style={styles.textRightIcon}>1 m</Text>
                                    <Ionicons
                                        name='ios-school'
                                        size={25}
                                        color='#fff'
                                    />
                                </View>
                            </View>
                        </Image>
                    </View>

                    <View style={styles.imageCardContainer}>
                        <Image
                            style={styles.imageCard}
                            source={require('../imgs/image2.jpg')}
                        >
                            <View style={styles.insightViewInImage}>
                                <View style={styles.textInImageCard}>
                                    <Text style={styles.titleStyle}>Những bước đầu tiên</Text>
                                    <Text style={styles.subTitleStyle}>Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed</Text>
                                </View>
                                <View style={styles.iconRightImageCard}>
                                    <Text style={styles.textRightIcon}>1 m</Text>
                                    <Ionicons
                                        name='ios-school'
                                        size={25}
                                        color='#fff'
                                    />
                                </View>
                            </View>
                        </Image>
                    </View>

                    <View style={styles.imageCardContainer}>
                        <Image
                            style={styles.imageCard}
                            source={require('../imgs/image3.jpg')}
                        >
                            <View style={styles.insightViewInImage}>
                                <View style={styles.textInImageCard}>
                                    <Text style={styles.titleStyle}>Những bước đầu tiên</Text>
                                    <Text style={styles.subTitleStyle}>Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed</Text>
                                </View>
                                <View style={styles.iconRightImageCard}>
                                    <Text style={styles.textRightIcon}>1 m</Text>
                                    <Ionicons
                                        name='ios-school'
                                        size={25}
                                        color='#fff'
                                    />
                                </View>
                            </View>
                        </Image>
                    </View>

                    <View style={styles.imageCardContainer}>
                        <Image
                            style={styles.imageCard}
                            source={require('../imgs/image4.jpg')}
                        >
                            <View style={styles.insightViewInImage}>
                                <View style={styles.textInImageCard}>
                                    <Text style={styles.titleStyle}>Những bước đầu tiên</Text>
                                    <Text style={styles.subTitleStyle}>Trải nghiệm chuyến đi khứ hồi ngắn qua Snapseed</Text>
                                </View>
                                <View style={styles.iconRightImageCard}>
                                    <Text style={styles.textRightIcon}>1 m</Text>
                                    <Ionicons
                                        name='ios-school'
                                        size={25}
                                        color='#fff'
                                    />
                                </View>
                            </View>
                        </Image>
                    </View>
                </ScrollView>
            </Animated.View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                {this.renderImageContent()}
                {this.renderInsightDetail()}
                {this.renderFooter()}
            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#2A2A2A'
    },
    navBar: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    openTextStyle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    optionalTextStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '800',
    },
    btnOpen: {
        width: 100,
        height: 60,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnOptional: {
        width: 100,
        height: 60,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: 20
    },
    footerContainer: {
        position: 'absolute',
        width: screenWidth,
        bottom: 0,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnInsignt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    insightText: {
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
        color: '#fff'
    },
    contentStyle: {
        height: screenHeight - 60 - 60 - 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTapInContent: {
        fontSize: 20,
        color: '#fff'
    },
    scrollViewStyle: {
        backgroundColor: '#fff'
    },
    viewTopInsightDetail: {
        height: 100,
        backgroundColor: 'transparent'
    },
    insightView: {
        position: 'absolute',
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        bottom: 60,
    },
    insightViewInImage: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: screenWidth,
        height: 240,
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom: 10
    },
    imageCardContainer: {
        height: 240,
        marginBottom: 5,
        width: screenWidth
    },
    imageCard: {
        width: screenWidth,
        height: 240
    },
    textInImageCard: {
        width: 0.75 * (screenWidth - 10 - 10),
        marginLeft: 10
    },
    iconRightImageCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    insightViewCardTop: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    insightViewCardTopText: {
        fontSize: 20,
        color: '#4C4C4C',
        fontWeight: '500'
    },
    titleStyle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10
    },
    subTitleStyle: {
        fontSize: 16,
        color: '#fff'
    },
    textRightIcon: {
        color: '#fff',
        marginRight: 5
    }
};

export default HomeScreen;
