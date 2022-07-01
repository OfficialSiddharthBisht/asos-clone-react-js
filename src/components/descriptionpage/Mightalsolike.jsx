import styled from "styled-components";
const MightLike=styled.div`
 width:67%;
 margin:auto;
 margin-top:20px;
`;
 const Maincontainer=styled.div`
  display:grid;
  grid-template-columns:repeat(5,1fr);
  gap:10px;
 `;
 const H1=styled.div`
   font-size:18px;
   font-weight:750;
   letter-spacing:.8px;
   line-height:24px;
   color:#2d2d2d;
   text-transform:uppercase;
   font:inherit
   margin-bottom:20px;
 `;
const MightAlsoLike=()=>{
    return (
        <MightLike>
          <H1 style={{marginBottom:"20px"}}>You Might Also Like</H1>
          <Maincontainer>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-skinny-stretch-cord-trousers-in-black/201088154-1-black?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£37.00</p>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>ASOS DESIGN</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-slim-cord-trousers-in-warm-grey/201515727-1-nacreousclouds?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£32.00</p>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>ASOS DESIGN</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/topman-tapered-cord-trousers-with-elasticated-waist-band-in-blue/200987161-1-lightblue?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£17.50 (-50%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£37.00</s>
                <p style={{paddingTop:"4px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"16px",color:"#2d2d2d"}}>Topman</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-slim-trousers-in-purple-cord-with-acid-wash/201565603-1-elderberry?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£37.00</p>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>ASOS DESIGN</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-skater-trousers-in-diagonal-cut-cord-in-charcoal/201048130-1-darkshadow?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto"/>
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£23.25 (-44%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£41.93</s>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>Asos Design</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/topman-relaxed-cord-jogger-trousers-in-stone/200369546-1-stone?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£19.25 (-45%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£35.00</s>
                <p style={{paddingTop:"4px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"16px",color:"#2d2d2d"}}>Topman</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-baggy-cord-trousers-in-green/200459434-1-forestfog?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£13.75 (-59%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£34.00</s>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>Asos Design</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-skater-fit-trousers-in-diagonal-cut-cord-in-beige/200837230-1-goat?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£19.00 (-54%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£41.93</s>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>Asos Design</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/topman-relaxed-cord-jogger-trousers-in-navy/200369328-1-navy?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£35.00</p>
                <p style={{paddingTop:"4px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"16px",color:"#2d2d2d"}}>Topman</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-skinny-stretch-cord-trousers-in-khaki/201175389-1-vetiver?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£37.00</p>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>ASOS DESIGN</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-skater-fit-cord-trousers-in-beige/201583460-1-fog?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£24.00 (-40%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£40.00</s>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>Asos Design</p>
            </div>
            <div style={{width:"190px",height:"auto"}}>
                <img src="https://images.asos-media.com/products/topman-relaxed-cord-co-ord-trousers-with-elasticated-waistband-in-off-white/200987209-1-offwhite?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£35.00</p>
                <p style={{paddingTop:"4px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"16px",color:"#2d2d2d"}}>Topman</p>
            </div>
            <div style={{width:"190px",height:"auto"}}>
                <img src="https://images.asos-media.com/products/asos-design-carpenter-wide-leg-trousers-in-khaki-cord/202092012-1-smokeyolive?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto"/>
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£42.00</p>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>ASOS DESIGN</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-oversized-tapered-cord-trousers-in-rope-effect-cord/200794143-1-beige?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£20.00 (-54%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£40.00</s>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>Asos Design</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-skinny-fit-cargo-trousers-in-stretch-cord-in-charcoal/200837358-1-darkshadow?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto"/>
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£42.00</p>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>ASOS DESIGN</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/topman-skinny-cord-jogger-trousers-in-black/200340161-1-black?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£24.00 (-20%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£30.00</s>
                <p style={{paddingTop:"4px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"16px",color:"#2d2d2d"}}>Topman</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/topman-skinny-cord-multi-pocket-cargo-trousers-in-khaki/200369489-1-khaki?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£45.00</p>
                <p style={{paddingTop:"4px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"16px",color:"#2d2d2d"}}>Topman</p>
            </div>
            <div style={{width:"190px",height:"auto",lineHeight:"0px"}}>
                <img src="https://images.asos-media.com/products/asos-design-baggy-cord-trousers-in-charcoal/200602778-1-rabbit?$n_320w$&wid=317&fit=constrain" alt="" width="100%" height="auto" />
                <p style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#d01345"}}>£13.75 (-59%)</p>
                <s style={{fontSize:"14px",fontWeight:"bold",letterSpacing:".8px",lineHeight:"20px",color:"#2d2d2d"}}>£34.00</s>
                <p style={{maxHeight:"unset",paddingTop:"2px",fontSize:"12px",fontWeight:"normal",letterSpacing:".8px",lineHeight:"0px",color:"#2d2d2d"}}>Asos Design</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Maincontainer>
        </MightLike>
    )
}
export {MightAlsoLike}