import React, { Component } from 'react';
import { addFavorites, deleteFavorites } from '@/services/favorite';
import { StarOutlined, StarFilled } from '@ant-design/icons';

class FavoriteButton extends Component {
  state = {
    isFavorite: this.props.isFavorite,
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      isFavorite: props.isFavorite,
    });
  }

  add = () => {
    this.setState({ isFavorite: 1 });
    addFavorites({ message_id: this.props.message_id });
  };

  delete = () => {
    this.setState({ isFavorite: 0 });
    deleteFavorites({ message_id: this.props.message_id });
  };

  render() {
    const { isFavorite } = this.state;
    let button;
    if (isFavorite) {
      button = <StarFilled onClick={this.delete} />;
    } else {
      button = <StarOutlined onClick={this.add} />;
    }
    return <span>{button}</span>;
  }
}

export default FavoriteButton;
