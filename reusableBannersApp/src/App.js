import './App.css'
import BannerCard from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <ul>
    <BannerCard cardProps={bannerCardsList[0]} key={bannerCardsList[0].id} />
    <BannerCard cardProps={bannerCardsList[1]} key={bannerCardsList[1].id} />
    <BannerCard cardProps={bannerCardsList[2]} key={bannerCardsList[2].id} />
  </ul>
)

export default App
