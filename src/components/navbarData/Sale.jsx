import Styled from "styled-components";
import React from "react";

const StyledDiv = Styled.div`
      width : 90%;
      height : 600px;
      background-color : white;
      position : absolute;
      top : 110px;
      left : 30px;
      z-index : 50;


      &>div:nth-child(1){
          display : flex;
          justify-content : space-between;
          margin : 30px 20px;
          font-weight : 600;
          text-decoration : underline;
 
          &>div{
              width : 25%;
          }

         &>div:nth-child(1){
              width : 32%;
         }
      }

      &>div:nth-child(2){
        display : flex;
         margin : auto;
         margin : 0px 20px;
        justify-content : space-between;

          &>div{
              width : 20%;
          }
        &>div:nth-child(1){
              display : grid;
              grid-template-columns : repeat(2 , 1fr);
              gap : 10px 20px;
              text-align : left;
              width : 34%;
              
              &>div{
                  cursor : pointer;
                  text-align : left;
              }
              &>div:hover{
                  color : skyblue;
              }
        }

        &>div:nth-child(2){
            &>div{
                cursor : pointer;
                padding : 10px;
                text-align: left
            }
            &>div:hover{
                color : skyblue;
            }
              
        }

        &>div:nth-child(3){
            &>div{
                cursor : pointer;
                padding : 10px;
                text-align: left
            }
            &>div:hover{
                color : skyblue;
            }
              
        }
    }
`

export const SaleData = () =>{
      const [flag , setFlag] = React.useState(false)
  const sale = {  
     
        category: [
            {
               id: 1,
                category : "SHOP BY PRODUCT"
            },
  
            {
              id : 2,
               category: "SHOP BY EDIT"
           },
  
           {
            id : 3,
             category : "SHOP SALE BY BODY FIT"
         }
  
        ],
  
        shopByProduct:[  
          {
            id: 1,
             title : "SALE View all"
          },
          {
            id : 2,
             title : "SALE New lines added"
          },
          {
            id: 3,
             title : "SALE Tops"
          },
          {
            id : 4,
             title: "SALE Shorts"
          },
          {
            id : 5,
             title: "SALE Swimwear"
          },
          {
            id: 6,
             title : "SALE Flat Sandals"
          },
          {
            id: 7,
             title: "SALE Flat Sandals"
          },
          {
            id : 8,
             title : "SALE Accessories"
          },
          {
            id : 9,
             title : "SALE Activewear"
          },
           {
            id : 10,
             title : "SALE Bags & Purses"
          },
          {
            id : 11,
             title : "SALE Coats & Jackets"
          },
          {
            id: 12,
             title : "SALE Designer brands"
          },
          {
             id: 13,
             title : "SALE Dresses"
          },
          {
            id : 14,
             title : "SALE Face + Body"
          },
          {
            id : 15,
            title : "SALE Hoodies & Sweatshirts"
          },
          {
            id : 16,
             title : "SALE Jeans"
          },
          {
            id : 17,
             title : "SALE Jewellery & Watches"
          },
          {
            id : 18,
             title : "SALE Jumpers & Cardigans"
          },
          {
            id : 19,
             title : "SALE Jumpsuits & Playsuits"
          },
          {
            id : 20,
             title : "SALE Lingerie & Nightwear"
          },
          {
            id : 21,
             title : "SALE Loungewear"
          },
          {
            id : 22,
             title : "SALE Shoes"
          },
          {
            id : 23,
            title : "SALE Skirts"
          },
          {
            id : 24,
             title: "SALE Socks & Tights"
          },
          {
            id: 25,
             title : "SALE Sunglasses"
          },
          {
            id : 26,
             title : "SALE Trainers"
          },
          {
            id : 27,
             title : "SALE Trousers & Leggings"
          },
          {
            id: 28,
             title : "A-Z of brands"
          }
  
        ],
  
        shopByEdit : [
            {
              id : 1,
               title : "Biggest deals"
            },
            {
              id : 2,
               title : "Sale under £15"
            },
            {
              id: 3,
             title : "Summer sale"
            },
            {
              id : 4,
               title : "Last chance to buy"
            },
            {
              id : 5,
               title : "Bestsellers"
            },
            {
              id : 6,
               title : "Dresses under £20"
            },
            {
              id: 7,
               title : "Tops under £15"
            },
            {
              id: 8,
               title : "Bottoms under £20"
            }
        ],
  
        shopSaleByBodyFit : [
                {
                    id : 1,
                     imageUrl : "https://images.asos-media.com/products/threadbare-plus-josephine-roll-neck-frill-sleeve-jumper-in-ginger-spice/24501694-1-gingerspice?$n_320w$&wid=317&fit=constrain",
                      title : "Asos Curve & Plus"
                },
                {
                      id : 2,
                        imageUrl : "https://images.asos-media.com/products/cottonon-maternity-training-teetop-vest-in-black/23317336-1-black?$n_320w$&wid=317&fit=constrain",
                        title : "Maternity"
                },
                {
                     id : 3,
                      imageUrl: "https://images.asos-media.com/products/stradivarius-petite-mom-fit-vintage-jean-in-light-wash/200954553-1-blue?$n_320w$&wid=317&fit=constrain",
                      title : "Petite"
                },
  
                {
                    id : 4,
                     imageUrl : "https://images.asos-media.com/products/flounce-tall-narrow-ribbed-leggings-with-side-split-in-black/23427950-1-black?$n_320w$&wid=317&fit=constrain",
                      title : "Toll"
                }
           
        ]
  
  
  
      }

       return(
            <StyledDiv flag = {flag} onMouseLeave = {() => setFlag(true)}>
                      <div>
                             {
                                sale.category.map((ele) =>(
                                    <div key = {ele.id}>{ele.category}</div>
                                ))
                             }
                      </div>
                    <div>
                      <div>
                              {
                                   sale.shopByProduct.map((ele) => (
                                      <div key = {ele.id}>{ele.title}</div>
                                   ))
                              }
                      </div>
                      <div>
                              {
                                   sale.shopByEdit.map((ele) => (
                                      <div key = {ele.id}>{ele.title}</div>
                                   ))
                              }
                      </div>
                      <div>
                             {
                                   sale.shopSaleByBodyFit.map((ele) => (
                                      <div key = {ele.id}>
                    
                                            {ele.title}
                                      </div>
                                   ))
                              }

                      </div>
                    </div>
            </StyledDiv>
       )

}