import React, { Component } from 'react';
import manhoodie from '../images/manhoodie.jpg';
import '../css/Home.css'
import girl from '../images/girl.jpg';
class Home extends Component {
    // const Component = React.createClass({
    //     iframe: function () {
    //       return {
    //         __html: this.props.iframe
    //       }
    //     },
      
    //     render: function() {
    //       return (
    //         <div>
    //           <div dangerouslySetInnerHTML={ this.iframe() } />
    //         </div>
    //       );
    //     }
    //   });
    //   const iframe= 'iframe src="https://me.me/embed/i/19676997" width="500" height="593" frameBorder="0" class="meme-embed" style="max-width:100%;margin:0 auto;" allowFullScreen></iframe><p>via <a href="https://me.me">MEME</a></p>'
    // <Component iframe={iframe} />,
    // document.getElementById('container')

    state ={
        show: false ,
        likeCount: "",

     }

 changeColor(){
    this.setState({black: !this.state.black})
 }

    showModal = (e) => {
        this.setState({show: true})
    }

    matched = () => {
        if(!this.state.show){
             return null;
        } 
        else {
           return <div>
                You have been matched!
                const style = document.querySelector(.profilepic)
                <i class="twa twa-heart"></i><i class="twa twa-heart"></i><i class="twa twa-heart"></i><i class="twa twa-heart"></i><i class="twa twa-heart"></i><i class="twa twa-heart"></i><i class="twa twa-heart"></i>
            </div>
        }

    }

    render() {
        return (
            <div className="home">
                <div class = "profilepic">
                <h1>Sylvia Ortiz</h1>
                <p>Age: 24</p>
                <p>Likes dogs</p>
                <div classsName="fake">
                    <span>
                        {/* <img src={smanhoodie} alt="fire"></img> */}
                    </span>
                        <img src={girl} alt="female"></img>
                    <br/>
                    <button onClick ={e => {this.showModal()}}>Like </button> 
                    <div>
                        {this.matched()}
                    </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Home;