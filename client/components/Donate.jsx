import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  card: {
    'font-size': 25,
    'font-family': 'lato'
  },
};

class Donate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick(event) {
    this.setState({ 
      anchorEl: event.target
    });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }


  render() {
    const { anchorEl } = this.state;

    return(
      <div>
      <Button
        className={this.props.classes.card}
        aria-owns={anchorEl ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={(e) => this.handleClick(e)}
      >
        DONATE
      </Button>
    </div>
    );
  }
}

export default withStyles(styles)(Donate);