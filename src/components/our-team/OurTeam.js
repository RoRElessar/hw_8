import React, { Component } from 'react'
import './OurTeam.scss'
import superManImage from '../../assets/images/our-team/clark kent.jpg'
import greenArrowImage from '../../assets/images/our-team/oliver-queen.jpg'
import flashImage from '../../assets/images/our-team/barry-allen.jpg'
import batmanImage from '../../assets/images/our-team/bruce-wayne.jpg'

class OurTeam extends Component {

  constructor (props) {
    super(props);
    this.state = {
      teamMembers: [
        {
          id: 1,
          name: 'Clark Kent',
          image: superManImage,
          description: 'Superman is a famous comic book character. He is possibly the first modern superhero character.',
          socialNetworks: ['Facebook', 'Twitter']
        },
        {
          id: 2,
          name: 'Oliver Queen',
          image: greenArrowImage,
          description: 'Green Arrow is a fictional superhero who appears in comic books published by DC Comics.',
          socialNetworks: ['Facebook', 'Behance']
        },
        {
          id: 3,
          name: 'Barry Allen',
          image: flashImage,
          description: 'Flash is the name of several superheroes appearing in American comic books.',
          socialNetworks: ['Facebook', 'Twitter', 'Dribble']
        },
        {
          id: 4,
          name: 'Bruce Wayne',
          image: batmanImage,
          description: 'Batman is a fictional superhero appearing in American comic books published by DC Comics.',
          socialNetworks: ['Twitter']
        },
      ],
      activeTeamMember: {
        id: 1,
        name: 'Clark Kent',
        image: superManImage,
        description: 'Superman is a famous comic book character. He is possibly the first modern superhero character.',
        socialNetworks: ['Facebook', 'Twitter']
      },
    }
  }

  componentDidMount() {
    const members = document.getElementsByClassName('member')

    for (let i = 0; i < members.length; i++) {
      members[i].addEventListener('click', function () {
        this.setState({activeTeamMember: this.state.teamMembers[i]})
      }.bind(this))
    }
  }

  socialNetworks = () => {
    let socialNetworks = []
    this.state.activeTeamMember.socialNetworks.forEach(function (el, index) {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      socialNetworks.push(<a key={index} href="#">{el}</a>)
    })
    return socialNetworks
  }

  teamMembers = () => {
    let teamMembers = []
    this.state.teamMembers.forEach(function (member, index) {
      teamMembers.push(
        <div key={index} className="col-lg-3 col-md-3 col-sm-3 col-3">
          <div className="member"
               style={{backgroundImage: `url('${member.image}')`}}>
            <div className="member-name">{member.name}</div>
          </div>
        </div>
      )
    })
    return teamMembers
  }

  render () {
    return (
      <div className="app-container">
        <section className="our-team">
          <h2>Meet our team</h2>
          <p className="our-team-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam deserunt dolores exercitationem explicabo
            fuga iusto labore laboriosam modi, neque nihil nisi numquam quia quidem quod sapiente tenetur veniam vitae!
          </p>

          <div className="team-section">
            <div className="row no-gutters">
              <div className="col-lg-3">
                <div className="active-team-member"
                     style={{backgroundImage: `url('${this.state.activeTeamMember.image}')`}}/>
              </div>
              <div className="col-lg-8">
                <div className="info-section">
                  <p className="team-member-name">{this.state.activeTeamMember.name}</p>
                  <p className="team-member-description">{this.state.activeTeamMember.description}</p>
                  <div id="social-networks"
                       className="team-member-social-networks">{this.socialNetworks()}</div>
                </div>
                <div className="all-members">
                  <div className="row">{this.teamMembers()}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default OurTeam
