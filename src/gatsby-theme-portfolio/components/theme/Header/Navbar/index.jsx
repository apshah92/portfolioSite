import React from "react";
import ReactDOM from 'react-dom'
import { Link } from "gatsby";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import NavbarLinks from "gatsby-theme-portfolio/src/components/theme/Header/NavbarLinks";
import { Wrapper, NavWrapper } from "./styles";

export default  class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.navref = React.createRef();
    this.makeNavSticky = this.makeNavSticky.bind(this);
    this.state = {
      navClasses : ""
    };
  }

  componentDidMount(){
    window.addEventListener("scroll",this.makeNavSticky);
  }

  makeNavSticky(){
    var navOffsets = ReactDOM.findDOMNode(this).getBoundingClientRect();
    console.log(navOffsets);
    if(window.pageYOffset > navOffsets['top']){
      this.setState({navClasses:"sticky"});
    }else {
      this.setState({navClasses:""});
    }
  }

  render(){
    return (<Wrapper className={this.state.navClasses} ref={this.navref}>
      <NavWrapper as={Container} >
        <h3><Link to="/">Home</Link></h3>
        <NavbarLinks desktop />
      </NavWrapper>
    </Wrapper>);
  }
}