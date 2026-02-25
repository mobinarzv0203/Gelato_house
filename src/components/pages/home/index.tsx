import type { JSX } from 'react'
import { AcceptanceBanner } from '../../base/acceptanceBanner'
import { Slider } from '../../base/slider'


const HomePage:React.FC = (): JSX.Element => {
  return (
    <div>
        <AcceptanceBanner />
        <Slider 
          slidesPerView={1} 
          slides={[
            {id: 1, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/a4jetfag.3ne.jpg", alt: "Gelato"},
            {id: 2, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/c4cp1uni.dc4.jpg", alt: "gelato"}
          ]}/>
    </div>
  )
}

export default HomePage