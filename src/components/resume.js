import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
           

            <h2 style={{paddingTop: '2em'}}>Eric Arias</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A software engineer that is driven with passion and dedication towards success. My key skills in organization and details are proven to be a great asset to any team. Utilizing programming languages, such as HTML/CSS, Javascript, React, Ruby, and Python, I’m able to help companies achieve their overall design goals.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>241 boylston st. Brookline, MA. 02445</p>
            <h5>Phone</h5>
            <p>(781) 588 - 3958</p>
            <h5>Email</h5>
            <p>eric.ariasv@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2018}
              schoolName="Bunker Hill Community College"
              schoolDescription=""
               />

              <Education
              startYear={2020}
              endYear={2020}
              schoolName="General Assembly Immersive Program"
              schoolDescription=""
               />


                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={'August ' + 2020}
              jobName="General Assembly Immersive"
              jobDescription="•  Build working applications with various programs such as Javascript, React, HTML/CSS, etc.
              •  Excellent written and verbal communication skills
              •  Highly adaptable, flexible professional who embraces teamwork, but also enjoys working independently.
              •  Collaborated with a team to build an application using MongoDB, React, and Javascript.
              "
              />

              <Experience
                startYear={2019}
                endYear={'current'}
                jobName="LevelUp/Grubhub Enterprise Support Specialist"
                jobDescription="• Collaborate to identify and implement solutions to technical requests from users and merchants.
                • Maintain up-to-date and comprehensive knowledge of the product
                • Role in LevelUp/Grubhub Partnerships support team technical error and user requests through branded channels (Yelp and Playfull), ensuring a seamless experience for users and merchants.
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />
                       <Skills
                      skill="Ruby on Rails"
                      progress={40}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
