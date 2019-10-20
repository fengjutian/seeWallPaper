import React from 'react';
import './Mainpage.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        {
          url: require("../../assets/i_1.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_2.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_3.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_4.png"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_5.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_1.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_2.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_3.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_4.png"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_5.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_1.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_2.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_3.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_4.png"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_5.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_1.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_2.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_3.jpg"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_4.png"),
          title: 'xxx'
        },
        {
          url: require("../../assets/i_5.jpg"),
          title: 'xxx'
        }
      ],
      mainImg: {
        url: null,
        title: 'xxx'
      }
    }
  }

  componentDidMount() {
    this.setState({
      mainImg: {
        ...this.state.mainImg,
        url: this.state.imgList[0].url
      }
    })
  }

  render(){
    return (
      <section className="main-page">
        <section className='main-left-box'>
          <div className='img-all-box'>
            {
              this.state.imgList.map((item, key) => {
                return (
                  <div className='single-img-box' key={key}
                    onClick={this.changeImg.bind(this, item, key)}>
                    <div className='single-box-head' >
                      <img src={item.url}  alt=""/>
                    </div>
                    <div className='single-box-bottom'></div>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className='main-right-box'>
          <img src={this.state.mainImg.url}  alt=""/>
        </section>
      </section>
    )
  }

  changeImg(val, key) {
    console.log(val, key)
    this.setState({
      url: val.url
    }, () => {console.log(this.state.mainImg)})
  }
}

export default App;
