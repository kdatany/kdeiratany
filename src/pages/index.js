import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';
import WTT from '../images/WTT.png';
import TETA from '../images/teta.png';
import POWER from '../images/powerautomate.jpg';
import UPWORK from '../images/upwork.jpg';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 400px;
    width: 100%;
    height: auto;
    margin: 0 auto 40px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 100%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

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

class Homepage extends React.Component {
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

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Kamal Deiratany" className="avatar" />
            <t.H1 primary align="center">
              Kamal Deiratany
            </t.H1>
            <t.LargeP align="center" max45>
              Technology Consultant - Social Entrepreneur - Developer
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          {
            <Content>
              <t.H2 primary align="center" bold>
                About me
              </t.H2>
              <t.P align="center" max70 className="who-desc">
                I am an entrepreneur & developer with an emphasis in Microsoft Power Platform tools automation and
                development. In 2016 I started my career as a User Experience Engineer leading the roll out of Office
                365 to over 40,000 employees in a Fortune 20 company. After that I moved to development and founded my
                first startup where I continued working on automation projects using Power Automate and other Office 365
                Power Services. After improving my technical skills, I went back to become a full time Microsoft
                Engineer helping clients with existing Office 365 licenses automate using Power Automte. Let's not
                forget, I'm a graduate of THE Ohio State University.
              </t.P>
              <t.H2 primary align="center" bold className="portfolio">
                Portfolio
              </t.H2>
            </Content>
          }
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={UPWORK} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Consluting and Productivity</t.H2>
                <t.P>
                  I'm an IT and Productivity consultant with over 4 years working with Startups, small, and large
                  business. I help clients become more productive in their daily tasks and operations.
                </t.P>
                <t.P>Upwork is the main platform I use where clients connect with me to help with projects.</t.P>
                <t.P>
                  Send me a work proposal via Upwork (
                  <LinkButton
                    primary
                    bold
                    className="link"
                    as="a"
                    target="_blank"
                    href="https://www.upwork.com/ab/flservices/cl/public/org/1294052489068167169"
                  >
                    Direct contract).
                  </LinkButton>
                </t.P>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Development and Automation</t.H2>
                <t.P>
                  I'm now focusing on working with Power Platform tools, delivering projects for a fortune 20 company
                  and other clients on Upwork. I also build business applications using Power Apps and visualize data
                  using PowerBI.{' '}
                </t.P>
                <t.P>
                  One of my most recent projects is building an inventory management system for a startup. I used
                  SharePoint Lists for data repository, Forms to request inventory, and Power Automate flows running in
                  between to keep everything updated. Saved my clients over $50k in purchasing a software.{' '}
                </t.P>
                {/* <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                  Lorem ipsum
                </LinkButton> */}
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={POWER} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={TETA} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Teta Pita</t.H2>
                <t.P>
                  A new family owned catering business founded in early 2020 in the Columbus area. Instead of taking
                  orders over the phone, this website helped Teta Pita scale to allow online ordering.{' '}
                </t.P>
                <t.P> </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://tetapita.com">
                  Visit TetaPita.com
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          {
            <Block>
              <BlockContent>
                <DivWrapper>
                  <t.H2 bold>Wild Tiger Tees</t.H2>
                  <t.P>
                    <a href="https://socialventurescbus.com/marketplace/wild-tiger-tees/">Wild Tiger Tees </a>
                    was started at a GiveBackHack event back in 2018 with the goal of employing youth facing
                    homelessness in the Columbus area.
                  </t.P>
                  {/* <t.P>Dolor sit amet</t.P> */}
                  <LinkButton primary bold className="link" as="a" target="_blank" href="https://wildtigertees.com">
                    Website
                  </LinkButton>
                </DivWrapper>
                <DivWrapper>
                  <ItemImage src={WTT} alt="WildTigerTees" />
                </DivWrapper>
              </BlockContent>
            </Block>
          }
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Fancy working with me? Contact me for more info! </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
