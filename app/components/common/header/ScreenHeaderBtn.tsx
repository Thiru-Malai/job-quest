import React from 'react'
import { TouchableOpacity, Image} from 'react-native'
import styles from './screenheader.style';

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
    return (
        <TouchableOpacity style={styles(dimension).btnContainer} onPress={handlePress}>
            <Image source={iconUrl} resizeMode='cover' style={styles(dimension).btnImg} />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn;