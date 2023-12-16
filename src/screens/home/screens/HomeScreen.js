import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Modal,
    Pressable,
    ScrollView, TouchableOpacity
} from 'react-native';

const product = [
    {
        name: 'Sweater 1',
        productImage: require('~/assets/images/sweater.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Shoes',
        productImage: require('~/assets/images/shoes.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sneaker',
        productImage: require('~/assets/images/sneaker.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sweater 2',
        productImage: require('~/assets/images/sweater_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sneaker 2',
        productImage: require('~/assets/images/sneaker_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Trouser',
        productImage: require('~/assets/images/trouser.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Trouser 2',
        productImage: require('~/assets/images/trouser_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Hat',
        productImage: require('~/assets/images/hat.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Sweater 3',
        productImage: require('~/assets/images/sweater_3.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
    {
        name: 'Shoes 2',
        productImage: require('~/assets/images/shoes_2.png'),
        likeImage: require('~/assets/images/heart-image.png'),
        newTagText: 'New',
        newPrice: 'New Price',
        oldPrice: 'Old Price',
        longTitle: 'This product is very good',
        buyImage: require('~/assets/images/buy.png'),
        buyText: 'Buy'
    },
]

const colors = {
    gray: 'gray',
    black: '#000',
    white: 'white',
    red: 'red',
    lightGray: '#C8C8C8'
}


export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchProduct, setSearchProduct] = useState('');
    const [showInput, setShowInput] = useState(false);

    const filterProduct = product.filter(item => {
        return item.name.toLowerCase().includes(searchProduct.toLowerCase())
    })

    return (
        <ScrollView style={styles.mainBlock}>
            <View style={styles.centeredView}>
                <View style={styles.inputBlock}>
                    {showInput && (
                        <TextInput
                            style={styles.inputText}
                            placeholder='Search...'
                            onChangeText={(text) => setSearchProduct(text)}
                            value={searchProduct}/>
                    )}
                    <Pressable onPress={() => setShowInput(!showInput)}>
                        <Image style={styles.inputSearchImage} source={
                            require('~/assets/images/search.png')
                        }/>
                    </Pressable>
                    <Pressable
                        style={[styles.button]}
                        onPress={() => setModalVisible(true)}>
                        <Image style={styles.inputBlockLikeProduct} source={
                            require('~/assets/images/heart-image.png')
                        }>
                        </Image>
                    </Pressable>
                </View>
            </View>
            {filterProduct.map((product, index) => {
                return (
                    <View style={styles.main} key={index}>
                        <View style={styles.photo}>
                            <View style={styles.mainPhoto}>
                                <Image
                                    style={styles.productImage}
                                    source={product.productImage}>
                                </Image>
                                <View style={styles.newTag}>
                                    <Text style={{
                                        fontSize: 9,
                                        textTransform: 'uppercase'
                                    }}>{product.newTagText}</Text>
                                </View>
                            </View>
                            <View style={styles.content}>
                                <View style={styles.text}>
                                    <Text style={styles.productName}>
                                        {product.name}
                                    </Text>
                                    <Image style={styles.likeProduct} source={
                                        product.likeImage
                                    }>
                                    </Image>
                                </View>
                                <View style={styles.price}>
                                    <Text style={styles.newPrice}>
                                        {product.newPrice}
                                    </Text>
                                    <Text style={styles.oldPrice}>
                                        {product.oldPrice}
                                    </Text>
                                </View>
                                <View style={styles.end}>
                                    <Text style={styles.longTitle} numberOfLines={1}>
                                        {product.longTitle}
                                    </Text>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={styles.buyProduct}>
                                            {product.buyText}
                                        </Text>
                                        <Image style={styles.buyImage} source={
                                            product.buyImage
                                        }>

                                        </Image>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <Pressable
                    style={styles.modalContainer}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.modalContent}>
                        <Pressable
                            style={[styles.button]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.footerMenu}>
                        <Image source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauS4QRTIwWc1joALjONNFzgzLV1HKZwi4e38xHjxylYSfVBcfwj3jQyBNC_oDZGnoaag&usqp=CAU'
                        }}
                               style={styles.footerImage}
                        />
                        <Text>Menu</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Promotions')}>
                    <View style={styles.footerMenu}>
                        <Image source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/372/372754.png'
                        }}
                        style={styles.footerImage}
                        />
                        <Text>Promotions</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.footerMenu}>
                    <Image source={{
                        uri: 'data:image/png;base64,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'
                    }}
                    style={styles.footerImage}
                    />
                    <Text>Cart</Text>
                </View>
                <View style={styles.footerMenu}>
                    <Image source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDX9iVe5feo96lMsFQWlJCmzYtXfmTlSKKw&usqp=CAU'
                    }}
                    style={styles.footerImage}
                    />
                    <Text>My Orders</Text>
                </View>
                <View style={styles.footerMenu}>
                    <Image source={{
                        uri: 'data:image/png;base64,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'
                    }}
                    style={styles.footerImage}
                    />
                    <Text>Settings</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainBlock: {
        width: '100%',
    },
    mainPhoto: {
        width: 150,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photo: {
        // flex: 1,
        alignItems: 'center',
        width: '90%',
        height: 140,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.gray,
        flexDirection: 'row',
        marginTop: 20,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        // flexDirection: 'row'
    },
    main: {
        width: '100%',
        alignItems: 'center'
    },
    productImage: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: colors.gray,
        resizeMode: 'contain',
        position: 'relative'
    },
    newTag: {
        position: 'absolute',
        top: -3,
        right: 12,
        width: 30,
        height: 30,
        backgroundColor: colors.white,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.gray,
        borderWidth: '1px',
    },
    content: {
        width: 234,
        height: 100,
        justifyContent: 'space-between'
    },
    text: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    productName: {
        fontSize: 17
    },
    likeProduct: {
        width: 30,
        height: 30
    },
    price: {
        width: '100%',
        flexDirection: 'row'
    },
    newPrice: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 18
    },
    oldPrice: {
        fontSize: 17,
        textDecorationLine: 'line-through',
        marginLeft: 20
    },
    end: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    longTitle: {
        width: 140,
        fontSize: 17,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    buyProduct: {
        fontSize: 17,
        marginRight: 3
    },
    buyImage: {
        width: 20,
        height: 20,
        marginRight: 25
    },
    inputBlock: {
        width: '100%',
        height: 70,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    inputText: {
        width: 290,
        height: 35,
        color: colors.red,
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.lightGray,
        marginLeft: 22,
        paddingLeft: 25,
        borderRadius: 5,
        marginRight: 15
    },
    inputBlockLikeProduct: {
        width: 30,
        height: 30,
        marginRight: 22
    },
    inputSearchImage: {
        width: 23,
        height: 23,
        marginRight: 10
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
    },
    modalContent: {
        width: '100%',
        height: 350,
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    textStyle: {
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 70,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    footer: {
        width: '100%',
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerMenu: {
        marginLeft: 17,
        marginRight: 17,
        alignItems: 'center'
    },
    footerImage: {
        width: 25,
        height: 25,
        marginBottom: 4,
    },
})
