import React from 'react'
import Quote from './quote'
import Buttons from './buttons'
import './Main.css';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            quote: '',
            author : ''
        }
    }

    componentDidMount(){
        this.updateState()
    }

    updateState = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
             //   console.log(data)
                this.setState({
                    quote: data.content,
                    author: data.author
                })
               // console.log(this.state.author)
            }) 
    }

    generateQuote = () => {
        this.updateState()
        this.rollBg()
    }

    newGradient = () => {
        var c1 = {
            r: Math.floor(255),
            g: Math.floor(35+Math.random()*220),
            b: Math.floor(Math.random()*55)
        };
        var c2 = {
            r: Math.floor(255),
            g: Math.floor(35+Math.random()*220),
            b: Math.floor(Math.random()*85)
          };
        c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
        c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
        const obj = {
            'c1' : c1.rgb,
            'c2' : c2.rgb
        }
        return obj
       // return 'linear-gradient(to right, '+c1.rgb+', '+c2.rgb+')';
    }

    rollBg = () => {
        var body = document.querySelector('.app');
        var head = document.querySelector('.quote-txt h1')
        var auth = document.querySelector('.quote-txt p')
        const value = this.newGradient();
        setTimeout(()=> {
            body.style.background = `linear-gradient(to right, ${value.c1}, ${value.c2}`;
            head.style.color = value.c1;
            auth.style.color = value.c2;
        },500)
        
    }

    render(){
        return (
            <div className="wrapper">
                <Quote text={this.state.quote} authorName={this.state.author}/>
                <Buttons handleClick={this.generateQuote} text={this.state.quote} authorName={this.state.author}/>
            </div>
        )
    }
}

export default Main