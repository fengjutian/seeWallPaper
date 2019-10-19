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


    console.log('this.state', this.state)
  }

  render(){
    return (
      <section className="main-page">
        <section className='main-left-box'>
          <div className='img-all-box'>
            {
              this.state.imgList.map((item, key) => {
                return (
                  <div className='single-img-box'>
                    <div className='single-box-head'>
                      <img src={item.url} key={key} alt=""/>
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
}

export default App;
