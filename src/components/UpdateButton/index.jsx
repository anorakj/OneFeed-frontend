import { Button } from 'antd';
import React, { Component } from 'react';
import { updateAll } from '@/services/update';

class UpdateButton extends Component {
  state = {
    updating: false,
  };

  update = () => {
    this.setState(() => {
      return {
        updating: true,
      };
    });

    updateAll().then(() => {
      this.setState(() => {
        return {
          updating: false,
        };
      });
      window.location.reload(false);
    });
  };

  render() {
    const { updating } = this.state;
    return (
      <Button type="primary" loading={updating} onClick={() => this.update()}>
        Update Now!
      </Button>
    );
  }
}

export default UpdateButton;
