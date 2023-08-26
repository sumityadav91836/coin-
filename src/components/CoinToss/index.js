import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const images = {
      headImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      taliImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    }
    const imageResult = tossResult === 0 ? images.headImage : images.taliImage

    this.setState({
      coinImage: imageResult,
    })

    const headTailCount =
      tossResult === 0
        ? this.setState(prevState => ({
            headsCount: prevState.headsCount + 1,
          }))
        : this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
  }

  render() {
    const {coinImage, headsCount, tailsCount} = this.state

    return (
      <div className="app-container">
        <div className="coin-toss-card">
          <h1 className="app-title">Coin Toss Game</h1>
          <p className="game-des">Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" className="coin-image" />
          <button type="button" onClick={this.tossCoin} className="toss-btn">
            Toss Coin
          </button>
          <ul className="result-container">
            <li className="list-item">Total: {headsCount + tailsCount}</li>
            <li className="list-item">Heads: {headsCount}</li>
            <li className="list-item">Tails: {tailsCount}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
