import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { GRID_SEPARATOR } from '../utils/constants';

export default class SelectableImage extends Component {
  static propTypes = {
    uri: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    onLongPress: PropTypes.func,
    selectable: PropTypes.bool
  }

  state = {
    selected: false
  }

  onItemPress = () => {
    console.log('selected')
    this.setState((prevState) => ({
      selected: prevState.selected
    }));
  }

  render() {
    const { uri, size, onLongPress, selectable } = this.props;

    // console.log(selectable);
    return (
      <TouchableOpacity onLongPress={onLongPress} delayLongPress={200} onPress={this.onItemPress}>
        <Image
          source={{ uri }}
          style={[styles.itemStyle(size), selectable ? {borderColor: 'red',
          borderWidth: 2} : {} ]}/>
      </TouchableOpacity>
    );
  }
}

const styles = {
  itemStyle: (cellSize) => ({
    width: cellSize,
    height: cellSize,
    marginHorizontal: GRID_SEPARATOR,
    resizeMode: 'cover'
  }),
  selected: {
    border: 2,
    borderColor: 'red'
  }
};
