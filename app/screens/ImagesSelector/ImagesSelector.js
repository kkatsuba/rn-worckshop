import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, Dimensions } from 'react-native';
import { Spinner } from 'native-base';
import { LOADING_IMAGES_COUNT, IMAGES_PER_ROW, GRID_SEPARATOR } from '../../utils/constants';
import { getLocalImages } from '../../actions/images';
import SelectableImage from '../../components/SelectableImage';

class ImagesSelector extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool,
    cursor: PropTypes.string,
    images: PropTypes.array,
    hasNext: PropTypes.bool,
    navigation: PropTypes.any
  };

  state = {
    edit: false
  }

  componentDidMount() {
    const { dispatch, cursor } = this.props;
    dispatch(getLocalImages(cursor, LOADING_IMAGES_COUNT));
  }

  onEndReached = () => {
    const { dispatch, hasNext, cursor, isFetching } = this.props;
    if (!isFetching && hasNext) {
      dispatch(getLocalImages(cursor, LOADING_IMAGES_COUNT));
    }
  }

  onLongPress = () => {
    console.log('onlong press')
    this.setState({ edit: true });
  }

  render() {
    const { width } = Dimensions.get('window');
    const cellSize = (width / IMAGES_PER_ROW) - GRID_SEPARATOR;

    console.log(this.state.edit);
    return (
      <React.Fragment>
        <FlatList
          data={this.props.images}
          keyExtractor={item => item.node.image.uri}
          numColumns={IMAGES_PER_ROW}
          onEndReachedThreshold={1}
          onEndReached={this.onEndReached}
          columnWrapperStyle={styles.columnWrapperStyle}
          removeClippedSubview
          renderItem={({ item }) => (
            <SelectableImage
              uri={item.node.image.uri}
              size={cellSize}
              onLongPress={this.onLongPress}
              selectable={this.state.edit}
            />
          )}
        />
        {this.props.isFetching && <Spinner />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.localImages
});

const styles = {
  columnWrapperStyle: {
    marginHorizontal: -GRID_SEPARATOR,
    marginVertical: GRID_SEPARATOR / 2
  }
};


export default connect(mapStateToProps)(ImagesSelector);
