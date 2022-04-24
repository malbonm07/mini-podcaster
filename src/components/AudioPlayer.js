import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import SoundOn from '../assets/images/sound-medium.svg';
import SoundOff from '../assets/images/sound-off.svg';
import {spin} from '../styles/keyframes';

const AudioWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  border-radius: 6px;
  user-select: none;
  -webkit-user-select: none;
  background-color: #424242;
  box-sizing: border-box;
  svg, img {
      display: block;
  }
`;

const Controls = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  span {
    cursor: default;
    font-weight: bold;
  }
`;

const VolumenIcon = styled.div`
  margin-left: 14px;
  img {
      width: 16px;
      height: 16px;
      color: #fff;
  }
`;

const Slider = styled.div`
  flex-grow: 1;
  background-color: #0B0B0B;
  cursor: pointer;
  position: relative;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 2px;
  height: 4px;
`;

const Progress = styled.div`
  background-color: ${theme.primary};
  border-radius: inherit;
  position: absolute;
  pointer-events: none;
  width: 0;
  height: 100%;
  div {
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background-color: ${theme.primary};
    position: absolute;
    pointer-events: all;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.32);
  }
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/loading.png);
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${spin} 0.4s linear infinite;
`;

const PauseButton = styled.div`
    position: relative;
    width: 18px;
    height: 22px;
    cursor: pointer;
    svg{
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -9px;
    }
`;

class AppAudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: React.createRef(),
      loaded: false,
      playing: false,
      currentTime: '00:00',
      totalTime: '00:00',
      percent: '0%',
      draggableClasses: ['pin'],
      currentlyDragged: null,
      volume: 1
    }
  }
  togglePlay() {
    if (this.state.audio.current.paused) {
        this.state.audio.current.play();
        this.setState({playing: true})
    } else {
        this.state.audio.current.pause();
        this.setState({playing: false})
    }
  }
  toggleVolume() {
    if(this.state.volume) {
      this.state.audio.current.volume = 0;
      this.setState({volume: 0})
    }
    else {
      this.state.audio.current.volume = 1;
      this.setState({volume: 1})
    }
  }
  formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return min + ':' + ((sec < 10) ? ('0' + sec) : sec); 
  }
  timeUpdate(){
    let current = this.state.audio.current.currentTime;
    let percent = (current / this.state.audio.current.duration) * 100;

    this.setState({percent: `${percent}%`, currentTime: this.formatTime(current)})
  }
  ended(){
    this.state.audio.audio.current.currentTime = 0;
    this.setState({playing: false})
  }
  canPlay() {
    this.setState({loaded: true, volume: 1})
  }
  loadedMetaData() {
    const totalTime = this.formatTime(this.state.audio.current.duration)
    this.setState({totalTime})
  }

  render() {

    return (
      <AudioWrapper>
        {this.state.loaded ? 
        <PauseButton onClick={() => this.togglePlay()}>
          {this.state.playing ? 
          <svg key="pause" x="0px" y="0px" viewBox="0 0 18 20" style={{width: '18px', height: '20px', marginTop: '-10px'}}>
              <path fill="#FFFFFF" d="M17.1,20c0.49,0,0.9-0.43,0.9-0.96V0.96C18,0.43,17.6,0,17.1,0h-5.39c-0.49,0-0.9,0.43-0.9,0.96v18.07c0,0.53,0.4,0.96,0.9,0.96H17.1z M17.1,20"/>
              <path fill="#FFFFFF" d="M6.29,20c0.49,0,0.9-0.43,0.9-0.96V0.96C7.19,0.43,6.78,0,6.29,0H0.9C0.4,0,0,0.43,0,0.96v18.07C0,19.57,0.4,20,0.9,20H6.29z M6.29,20"/>
          </svg> : 
          <svg key="play" x="0px" y="0px" viewBox="0 0 18 22" style={{width: '18px', height: '22px', marginTop: '-11px'}}>
              <path fill="#FFFFFF" d="M17.45,10.01L1.61,0.14c-0.65-0.4-1.46,0.11-1.46,0.91V20.8c0,0.81,0.81,1.32,1.46,0.91l15.84-9.87C18.1,11.43,18.1,10.41,17.45,10.01L17.45,10.01z M17.45,10.01"/>
          </svg>}
      </PauseButton> : 
      <div>
          <Spinner></Spinner>
      </div>}
      <Controls>
          <Slider data-direction="horizontal">
            <Progress style={{width: this.state.percent}}>
            </Progress>
          </Slider>
          <span className="current-time">{ this.state.currentTime }</span>
          <VolumenIcon onClick={() => this.toggleVolume()}>
            {this.state.volume ? <img src={SoundOn} alt="volume"></img> : <img src={SoundOff} alt="sound-off"></img>}
          </VolumenIcon>
      </Controls>
        <audio ref={this.state.audio} src={this.props.audioSrc} onLoadedMetadata={() => this.loadedMetaData()} onCanPlay={() => this.canPlay()} onTimeUpdate={() => this.timeUpdate()} onEnded={() => this.ended()}></audio>
      </AudioWrapper>
    );
  }
}

export default AppAudioPlayer