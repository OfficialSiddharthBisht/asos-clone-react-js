import React from 'react'
import '../Men/home.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Home = () => {
  const data = [
    {
      imgUrl:"https://images.asos-media.com/products/asos-design-plunge-neck-fluffy-mini-dress-in-hot-pink/201624497-1-hotpink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title: "Dresses"
    },
    {
      imgUrl:"https://images.asos-media.com/products/threadbare-cut-out-front-crop-top-in-orange/202048146-1-orange?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Tops"
    },
    {
      imgUrl:"https://images.asos-media.com/products/asos-design-wide-fit-haven-padded-toe-thong-heeled-sandals-in-green/200732619-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title: "Shoes"
    },
    {
      imgUrl:"https://images.asos-media.com/products/topshop-paperbag-waist-shorts-in-animal/202466210-1-animal?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Shorts & Trousers"
    },
    {
      imgUrl:"https://images.asos-media.com/products/asos-design-recycled-frame-chunky-square-sunglasses-with-colour-block-bevel/201734940-1-multi?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Accessories"
    },
    {
      imgUrl:"https://images.asos-media.com/products/nike-pro-training-zip-front-crop-top-in-blue/201526374-1-blue?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Sports Brands"
    },
    {
      imgUrl:"https://images.asos-media.com/products/love-other-things-towelling-triangle-bikini-with-heart-ring-detail-in-purple/202616760-1-purple?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title: "Swim Wear"
    },
  ]
  const slideLeft = () => {
    var slider = document.getElementById('itemList');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('itemList');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div id='header'>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png" alt='headPic' />
        <span>
            <h1>EXTRA 20% OFF!</h1>
            <h1>(ALREADY UP TO 80% OFF)</h1>
            <p>With Code: SALEYAY</p>
        </span>
        <div style={{display:"flex"}}>
        <MdChevronLeft className='sliderButton' onClick={slideLeft} size={50} />
        <div id="itemList">
            {data.map((item) => (
            <div className='sliderImg'>
              <img
              src={item.imgUrl}
              alt='/'
            />{item.title}
            </div>
          ))}
          </div>
          <MdChevronRight className='sliderButton' onClick={slideRight} size={50} />
        </div>
        <button className='button'>VIEW ALL</button>
        <div style={{fontSize:"12px"}} >Sale items only. See website banner for Ts&Cs. Selected marked products excluded from promo.</div>
      </div>

      <div id="middle">
        <div><img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/20/hero/gbl/mob_hero_640x692.jpg" alt='midImg' /></div>
        <div id='midButDiv'><h2 className='midH2'><span>SHOP ASOS DESIGN</span></h2></div>
        <div id='midButDiv'><h1 className='midH1'>It's soft girl szn</h1></div>
      </div>
      <div id='middle2'>
        <img style={{marginTop:"10px"}} src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png" alt='mid2Img' />
        <h1>THE BEST (& LOWEST) SALE DISCOUNT</h1>
        <h1>UP TO 80% OFF ALREADY</h1>
      </div>

      <div id="bottom">
        <div><img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/20/moments/ww_occasion_dresses_party_in_provence_moment_870x1110.jpg" alt='mid3Img' />
           <h2>PARTY LOOKS</h2>
           <p>You? Extra?</p>
        </div>
        <div><img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/20/moments/ww_casual_summer_crochet_festigal_moment_870x1110.jpg" alt="bottom2" />
           <h2>MAINSTAGE FITS</h2>
           <p>27/7 Festival vibes</p>
        </div>
        <div><img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/20/moments/wwfbrevolutionmoment870x1110.jpg" alt="bottom3" />
           <h2>Swim Stuff</h2>
           <p>Shore-Fire Wins</p>
        </div>
        <div><img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/20/moments/wwfbrevolutionmoment870x1110.jpg" alt="bottom4" />
           <h2>REVOLUTION</h2>
           <p>Head: turned</p>
        </div>
        </div>
        <div id='bottom2'>
          <div><img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/20/moments/ww_asos_luxe_moment_boarder_870x1110.jpg" alt="bottom2pic1" />
          <h1>ASOS LUXE</h1>
          <p>Moment-makers</p>
          <button>SHOP ASOS LUXE</button>
          </div>
          <div>
            <img src="https://content.asos-media.com/-/media/homepages/ww/2022/june/20/moments/ww_collusion_moment_boarder_870x1110.jpg"  alt='bottom2pic2'/>
          <h1>COLLUSION</h1>
          <p>Grunge girl summer</p>
          <button className='button'>SHOP THE BRAND</button>
          </div>
        </div>

      
      <div id='footer'>
          <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride---banner-1---2022/uk/pride_hp_p1_final_dt_1258_150-v2-new.png" alt="footer" />
        </div>
    </>
  )
}

export default Home
