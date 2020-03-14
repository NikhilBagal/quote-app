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
    }

    render(){
        return (
            <div className="wrapper">
                <Quote text={this.state.quote} authorName={this.state.author}/>
                <Buttons handleClick={this.generateQuote} text={this.state.quote}/>
            </div>
        )
    }
}

export default Main