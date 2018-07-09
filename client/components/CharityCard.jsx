import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreInfo from './MoreInfo';

const styles = {
  card: {
    maxWidth: 345,
    height: 600,
  },
  media: {
    height: 120,
    paddingTop: '56.25%', // 16:9
  },
};

class CharityCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleLearnMoreClick() {
    console.log('you clicked learn more');

    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return(
      <div className="charity-card">
        <div className="charity-card card">
              <Card className={this.props.classes.card}>
              <CardMedia
                className={this.props.classes.media}
                image={this.props.photo}
                title="Charity Name"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {this.props.charity.charityName}
                </Typography>
                <Typography component="p">
                  {this.props.charity.donationUrl}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" onClick={() => this.handleLearnMoreClick()}>
                  {this.state.clicked && 
                    <MoreInfo show={this.state.clicked} charity={this.props.charity}/>
                  }
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(CharityCard);
