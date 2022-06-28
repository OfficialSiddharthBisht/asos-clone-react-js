import React from 'react'
import './home.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Home = () => {
  const data = [
    {
      imgUrl:"https://images.asos-media.com/products/asos-design-sandals-in-olive/201370900-2?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title: "Shoe"
    },
    {
      imgUrl:"https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-white-with-photographic-back-print/201154126-1-white?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Tops"
    },
    {
      imgUrl:"https://images.asos-media.com/products/adidas-training-earth-shades-aeroready-panelled-long-sleeve-half-zip-sweat-in-grey/201104836-1-grey?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title: "Sports Brands"
    },
    {
      imgUrl:"https://images.asos-media.com/products/bando-regular-fit-jersey-suit-jacket-in-stone/202183594-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Taloring"
    },
    {
      imgUrl:"https://images.asos-media.com/products/asos-actual-oversized-hoodie-with-logo-front-print-in-rose/201355721-1-rosepink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Hoodies & Sweatshirts"
    },
    {
      imgUrl:"https://images.asos-media.com/products/puma-downtown-colourblock-shorts-in-pink-exclusive-to-asos/24307413-3?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
      title:"Shoes & Trousers"
    },
    {
      imgUrl:"https://images.asos-media.com/products/south-beach-tie-dye-swim-shorts-with-bonded-zip-in-pink/201557375-1-pink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" ,
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
        <div><img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/20/hero/gbl/mw_2_hero_1258x600.jpg" alt='midImg' /></div>
        <div id='midButDiv'><h2 className='midH2'><span>SHOP ASOS DESIGN</span></h2></div>
        <div id='midButDiv'><h1 className='midH1'>Riptide Vibe</h1></div>
      </div>
      <div id='middle2'>
        <img style={{marginTop:"10px"}} src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png" alt='mid2Img' />
        <h1>THE BEST (& LOWEST) SALE DISCOUNT</h1>
        <h1>UP TO 80% OFF ALREADY</h1>
      </div>

      <div id="bottom">
        <div><img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/20/moments/mw_nike_running_moment_870x1110.jpg" alt="bottom1" />
           <h2>NIKE RUNNING</h2>
           <p>Sweat in the Swoosh</p>
        </div>
        <div><img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/20/moments/mw_asos_design_crotchet_moment_870x1110.jpg" alt="bottom2" />
           <h2>ASOS DESIGN CROCHET</h2>
           <p>Top-tier texture</p>
        </div>
        <div><img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/20/moments/mw_asos_design_summer_preppy_moment_870x1110.jpg" alt="bottom3" />
           <h2>PREPPY SUMMER STYLE</h2>
           <p>Via ASOS DESIGN</p>
        </div>
        <div><img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/20/moments/mw_asos_design_neutrals_moment_870x1110.jpg" alt="bottom4" />
           <h2>ASOS DESIGN NEUTRAL</h2>
           <p>Go-with-everything garms</p>
        </div>
        </div>
        <div id='bottom2'>
          <div><img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/20/moments/mw_wedding_ft_noak_moment_boarder_870x1110.jpg" alt="bottom2pic1" />
          <h1>WEDDING SUIT FT. NOAK</h1>
          <p>Best-dressed guest</p>
          <button>SHOP THE BRAND</button>
          </div>
          <div>
            <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/20/moments/mw_topman_moment_boarder_870x1110.jpg" alt="bottom2pic2" />
          <h1>TOPMAN</h1>
          <p>Bestseller status</p>
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
