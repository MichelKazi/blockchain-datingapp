import React, { Component } from 'react';
import manhoodie from '../images/manhoodie.jpg';
// import '../css/Home.css'
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
    handleClick = (event) => {

    }


    render() {
        return (
            <div>
                Pictures of Fake People
            <div className="twofakes">
            <span>
                <img src={manhoodie} alt="fire"></img>
            </span>
                <img src={girl} alt="female"></img>
           
            <button onClick ={this.handleClick}>Like </button> 
            </div> 
            </div>
        );
    }
}

export default Home;