import React, { Component } from 'react';
import '../css/Mcontent.css'
import upload from '../img/upload.png'

class Pcontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '呈点网络官方网站',
      moduleName: '',
      question: 'bug',
      time: '一般',
      description: '',
      myArr: []
    };
    this.sub = this.sub.bind(this);
    this.name = this.name.bind(this);
    this.question = this.question.bind(this);
    this.time = this.time.bind(this);
    this.moduleName = this.moduleName.bind(this);
    this.description = this.description.bind(this);
    this.upImg = this.upImg.bind(this);
    this.sub = this.sub.bind(this);
  }
  name(e) {
    this.setState({
      name: e.target.value
    });
  }
  moduleName(e) {
    this.setState({
      moduleName: e.target.value
    })
  }
  question(e) {
    this.setState({
      question: e.target.value
    })
  }
  time(e) {
    this.setState({
      time: e.target.value
    })
  }
  description(e) {
    this.setState({
      description: e.target.value
    })
  }
  upImg(obj) {
    var imgFile = document.querySelector('.selectImg').files[0];
    var img = new Image();
    var fr = new FileReader();
    fr.onload = function () {
        // upWrap
        var upWrap = document.createElement("div");
        upWrap.setAttribute('class', 'upWrap');
        upWrap.style.float = 'left';
        upWrap.style.marginRight = 10 + 'px';
        upWrap.style.position = 'relative';
        // imgWrap
        var imgWrap = document.createElement("div");
        imgWrap.setAttribute('class', 'imgWrap upedImg');
        imgWrap.innerHTML = 'X 删除';
        imgWrap.onclick=function () {
          var obj = this.parentNode.parentNode;
          obj.removeChild(upWrap);
        }
        // img
        var imgItem = document.createElement("img");
        imgItem.setAttribute('src', fr.result);
        imgItem.setAttribute('class', 'img');        
        imgItem.style.width = 150 + 'px';
        // 创建树
        upWrap.appendChild(imgWrap);
        upWrap.appendChild(imgItem);

        document.querySelector('.imgOnloadWrap').appendChild(upWrap);
    }
    fr.readAsDataURL(imgFile);
    this.setState({
      myArr: [imgFile,...this.state.myArr]
    })
  }
  sub() {
    var path = 'https://www.ethedot.com/api/test';
    var ele = document.querySelector(".selectImg")
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    for (var i = 0, f; f = this.state.myArr[i]; i++) {
      formData.append('files[]', f);
    }
    formData.append('name', this.state.name)
    formData.append('moduleName', this.state.moduleName)
    formData.append('question', this.state.question)
    formData.append('time', this.state.time)
    formData.append('description', this.state.description)
    
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if(xhr.responseText == 1){
                  alert('提交成功!')
                }
            } else {
              alert('提交失败！')
            }
        }
    }
    xhr.open('POST', path, true);
    xhr.send(formData);
  }
  render() {
    const {moduleName} = this.state.moduleName;    
    const {question} = this.state.question;
    const {time} = this.state.time;
    const {name} = this.state.name;
    const {description} = this.state.description;
    return (
      <div className="Mcontent">
        <div className="mcontent">
          <div className="content">
            <div className='project'>
              <div className="label">项目名称</div>
              <div className="cproject">
                <select value={name} onChange={this.name}>
                  <option value="呈点网络官方网站">呈点网络官方网站</option>
                  <option value="rd">rd</option>
                  <option value="洪福微信">洪福微信</option>
                  <option value="微商农家微信">微商农家微信</option>
                  <option value="生物人">生物人</option>
                </select>
              </div>
            </div>
            <div className='module'>
              <div className="label">模块名称</div>
              <div className="cmodule">
                <input placeholder="请输入模块名称" value={moduleName} onChange={this.moduleName}/>
              </div>
            </div>
            <div className='question'>
              <div className="label">问题类型</div>
              <div className="cquestion">
                <select value={question} onChange={this.question}>
                  <option value="bug">bug</option>
                  <option value="样式">样式</option>
                  <option value="其他">其他</option>
                </select>
              </div>
            </div>
            <div className='time'>
              <div className="label">紧急程度</div>
              <div className="ctime">
                <select value={time} onChange={this.time}>
                  <option value="一般">一般</option>
                  <option value="紧急">紧急</option>
                  <option value="严重">严重</option>
                </select>
              </div>
            </div>
            <div className='description'>
              <div className="label">问题描述</div>
              <div className="cdescription">
                <textarea value={description} onChange={this.description}>
                </textarea>
              </div>
            </div>
            <div className='picture'>
              <div className="cpicture">
                <div className="wrapper">
                  <div className="imgOnloadWrap"></div>
                    <div className="upImg">
                        <div className="upLoad">
                          <div className="img"><img src={upload}/></div>
                          <p>上传照片</p>
                        </div>
                        <div className="fileWrap">
                            <input className="selectImg" type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" onChange={this.upImg} />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="sub" onClick={this.sub}>完成并上传</button>
      </div>
    );
  }
}

export default Pcontent;
