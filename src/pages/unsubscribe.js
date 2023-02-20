import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import HireMePopup1 from '../components/HireMePopup.1.js';
import HireMePopup2 from '../components/HireMePopup.2.js';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import { HireMe } from '../components/Button.js';
import { graphql } from 'gatsby';

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 300px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;
const AboutMeWrapper2 = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 300px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

class AboutMe extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };
  state = {
    openHireMePopup2: false
  };

  handleRequestDemoClose2 = () => {
    this.setState({
      openHireMePopup2: false
    });
  };

  openContactPopup2 = () => {
    this.setState({
      openHireMePopup2: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { openHireMePopup2 } = this.state;
    const { data } = this.props;
    return (
      <AboutMeWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
            <t.H1 green align="center">
              Are you sure you want to unsubscribe?
            </t.H1>
            <t.H2 green align="center">
              Here's what you will be missing out on
            </t.H2>
            <li>Lots of sarcasm</li>
            <li>and fun</li>
            <li>I will make fun of myself and you</li>
            <li>I'm secretly a celebraty - at work.</li>
            <li>100 times more fun in person</li>
            <li>A traveller who can work from home and travel</li>
            <li>Really good wine</li>
            <li>A local guide</li>
            <li>Seeking higher education</li>
            <li>Diverse</li>
            <li>Has his life together, no debt, no stress</li>
            <li>I will wait with you for the Lyft</li>
            <li>Has covid antibodies</li>
            <li>CrossFit > OTF JK I will try OTF and do better than you</li>
            <li>Great with pets</li>
            <li>Doen't care much about the buckeyes</li>
            <li>He tries too hard</li>
            <li>It's worth a try, I promise you won't regret it. :)</li>
          </AboveFold>
          {/* <Content>
            <Img fluid={data.avatarAbout.childImageSharp.fluid} alt="Prank" className="avatar" />
          </Content> */}
          <AboveFold>
            <HireMe large onClick={this.openContactPopup} book>
              Okay I changed my mind
            </HireMe>
            <HireMePopup1 open={openHireMePopup} handleClose={this.handleRequestDemoClose} />

            <Layout theme="white" openContactPopup2={this.openContactPopup2}>
              <WorkWithMe>
                <t.H1 green>Get in touch with me</t.H1>
                <t.LargeP>Fancy working with me? Contact me for more info! </t.LargeP>
                <HireMe onClick={this.openContactPopup2} book>
                  I still want to unsubscribe
                </HireMe>
              </WorkWithMe>
            </Layout>
          </AboveFold>
        </Layout>
      </AboutMeWrapper>
    );
  }
}
class AboutMe2 extends React.Component {}
export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "punked.JPG" }) {
      ...fluidImage
    }
  }
`;
