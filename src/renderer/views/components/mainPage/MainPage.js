import React from 'react';
import './Mainpage.scss';
import axios from 'axios';

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

    // 获取图片的数据
    this.getImgList()
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

  getImgList() {
    axios.get('http://127.0.0.1:7001/getImgs').then(res => {
      console.log(34, res)
    })
  }


  changeImg(val, key) {
    console.log(val, key)
    this.setState({
      url: val.url
    }, () => {console.log(this.state.mainImg)})
  }
}

export default App;
