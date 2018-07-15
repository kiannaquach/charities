import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreInfo from './MoreInfo';
import Share from './Share';

const styles = {
  card: {
    maxWidth: 360,
    height: 600,
    padding: 0,
  },
  media: {
    height: 120,
    paddingTop: '56.25%', // 16:9
    paddingBottom: 0
  },
};

class CharityCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      heart: false,
      share: false,
    };
  }

  handleLearnMoreClick() {
    console.log('you clicked learn more');

    this.setState({
      clicked: !this.state.clicked
    });
  }

  handleLikes() {
    this.setState({
      heart: !this.state.heart
    })
  }

  handleShare() {
    this.setState({
      share: !this.state.share
    }, () => {console.log(this.state.share)});
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
                <Typography gutterBottom variant="headline" component="h2" style={{fontSize: '12pt'}}>
                  {this.props.charity.charityName}
                </Typography>
                <Typography component="p" style={{fontSize: '6.60pt'}}>
                  {this.props.charity.donationUrl}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{padding: 0, fontSize: '8pt'}} onClick={() => {this.handleShare();}}>
                  {this.state.share && 
                    <Share show={this.state.share} charity={this.props.charity} />
                  }
                  Share
                </Button>
                <Button size="small" color="primary" style={{padding: 0, fontSize: '8pt'}} onClick={() => this.handleLearnMoreClick()}>
                  {this.state.clicked && 
                    <MoreInfo show={this.state.clicked} charity={this.props.charity}/>
                  }
                  Learn More
                </Button>
                <Button size="small" style={{padding: 0, fontSize: '8pt'}} color="primary">
                  Donate
                </Button>
                <Button size="small" style={{padding: 0, fontSize: '8pt'}} color="primary" onClick={() => {this.handleLikes();}}>
                  {!this.state.heart ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>}
                </Button>
              </CardActions>
            </Card>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(CharityCard);
