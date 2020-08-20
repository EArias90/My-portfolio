import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">


          {/* Project 1 */}


          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Soccer Collection</CardTitle>
            <CardText>
            User’s will be able to create an account and open ‘packs’ that will give them random players from a league they chosen (BPL. La Liga, Series A, etc.) They will then have the ability to edit the player’s stats.
            </CardText>
            <CardActions border>
              <a href="https://github.com/EArias90/soccer-collection" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Travel Journal</CardTitle>
            <CardText>
            This app is built for people who travel and would like to share their experiences with their friends/family/etc. Users will be able to load enteries and also gives them a template to where they visited.            </CardText>
            <CardActions border>
            <a href="https://github.com/EArias90/seir-project-2" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Card Matching Game: Futbol Edition</CardTitle>
            <CardText>
            The objective is to pick a card and find its match. If the matching card is not selected then both cards will flip back to the original state. Once all cards are paired correctly the game will end.
            </CardText>
            <CardActions border>
            <a href="https://github.com/EArias90/EArias90.github.io" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>

        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
