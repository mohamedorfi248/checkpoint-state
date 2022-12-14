import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.me = {
            fullname: 'mohamed',
            email: 'mohamed248@gmail.com',
            age: '19',
            img: 'https://media.istockphoto.com/id/1253379531/vector/young-cartoon-boy-smiling-wearing-braces.jpg?s=612x612&w=0&k=20&c=fynjG5VKc71mHegQiiYBUg8iZk0iBuNX8aROq4zdNcA=',
        };
        this.state={count : 0}
    }
    componentDidMount(){
        setInterval(() => {
        this.setState(prevState=>({
            count: prevState.count + 1
        })) 
            }, 1000)
    }
render(){
    return (
    <div>
        <h2>{this.me.fullname}</h2>
        <h2>{this.me.email}</h2>
        <h2>{this.me.age}</h2>
        <h2>{this.state.count}</h2>
        <img src={this.me.img} alt='img'/>
    </div>
    )
}}