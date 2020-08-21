import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'


class About extends Component {
  render() {
    return(
      <div>
        <h1 className="aboutheader">About Page</h1>
        <Grid className="aboutme-grid">

        <Cell col={4}>
          <h4>Born and raised in Boston, MA. My whole education I was never certain on what I wanted to be when I grew up. I had ideas of becoming a sports commentator, but that never was something I really liked. I found myself going straight to a full-time job after high school. The jobs I had were both stressful and eye opening for me. I later found a job where I can see grow and make a difference. Eventually, I had to stop and rethink my whole career again.  

          <h4 />  
            

          While working, I graduated from Bunker Hill Community College with an Associates in Information Technology. Technology was always something I was interested in. I remember my siblings buying a Compaq laptop. I was fortunate to have older siblings because they would always buy new things. Being the youngest, this would benefit me, while they worked I would play with the laptop. 
            
          <h4 />

          One day during lunch, one of my co-workers brought up the program General Assembly. I didn't think anything of it at the time until I visited the website. I never thought about doing a boot camp prior so I was spectical of it. I filled out a form then got to speak to someone from the recuiter department. I was immediately interested and this is where I am today.

        
            
          </h4>
          

        </Cell>
    </Grid>
        
        </div>
    )
  }
}

export default About;
