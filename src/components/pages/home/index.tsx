import type { JSX } from 'react'
import { AcceptanceBanner } from '../../base/acceptanceBanner'
import { ImageSlider } from '../../base/imageSlider'
import Container from '../../base/contaier'



export const HomePage:React.FC = (): JSX.Element => {
  return (
    <>
      <AcceptanceBanner />
      <Container>
          <ImageSlider 
            slidesPerView={1} 
            slides={[
              {id: 1, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/a4jetfag.3ne.jpg", alt: "Gelato"},
              {id: 2, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/c4cp1uni.dc4.jpg", alt: "gelato"},
              {id: 3, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/2n5znich.xll.jpg", alt: "gelato"},
              {id: 4, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/beeasqh5.l1u.jpg", alt: "gelato"},
              {id: 5, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/bjxinin1.dsp.jpg", alt: "gelato"},
              {id: 6, src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/tk5gtgor.czb.jpg", alt: "gelato"},
            ]}/>
      </Container>
    </>
  )
}