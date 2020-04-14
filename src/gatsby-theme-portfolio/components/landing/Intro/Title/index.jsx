import React from "react";
import styled from 'styled-components';
import { TitleWrapper } from '../styles';



export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.isDeleting = false;
        this.period = 2000;
        this.allTitles = this.props.allTitles ;
        this.currentTitle = this.allTitles[0];
        this.txt = '';
        this.showTypeEffect = this.showTypeEffect.bind(this);        
        this.state = {
            typeTitle: this.props.titleText
        };
    }

    componentDidMount(){
        this.showTypeEffect();
    }

    showTypeEffect(){
        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            this.txt = this.currentTitle.substring(0, this.txt.length - 1);
        } else {
            this.txt = this.currentTitle.substring(0, this.txt.length + 1);
        }

              

        if (!this.isDeleting && this.txt === this.currentTitle) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.currentTitle = this.allTitles[ (this.allTitles.indexOf(this.currentTitle)+1) % this.allTitles.length];
        }

        this.setState({typeTitle:this.txt});  

        setTimeout(function() {
            that.showTypeEffect();
        }, delta);
    }

    render() {
        return (
            <TitleWrapper>
                <h2>{this.state.typeTitle}<span style={{fontSize:"1.5em"}}>|</span></h2>
            </TitleWrapper>
        );
    }
}