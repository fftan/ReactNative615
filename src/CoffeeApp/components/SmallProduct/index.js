import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

// Stylesheets
import styles from './styles';

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  containerStyle: PropTypes.instanceOf(Object),
  imageStyle: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
}

const defaultProps = {
  containerStyle: styles.containerStyle,
  imageStyle: styles.imageStyle,
  textStyle: styles.textStyle,
}

const SmallProduct = (props) => {
  const {
    name,
    imageUrl,
    textStyle,
    imageStyle,
    containerStyle,
  } = props;
  return (
    <View style={containerStyle}>
      <Image source={imageUrl} style={imageStyle} />
      <Text style={textStyle}>{name}</Text>
    </View>
  )
}

SmallProduct.propTypes = propTypes;
SmallProduct.defaultProps = defaultProps;

export default SmallProduct;