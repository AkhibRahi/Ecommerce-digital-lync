import React, { useState } from 'react'
import { useEffect } from 'react';
import { API } from '../../utils/constants';
import APIHOC from '../../HOCs/APIHOC/APIHOC';



function Search(props) {

  const [search, setSearch] = useState([]);

  const searchProducList = () =>{
    let searchBar = search.map(product =>{
      return <div key={product.productId} className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">

                        <img className="pic-1" src={product.imageURL} style={{ width: '154px', height: '201px' }} />
                        {/* <img className="pic-2" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" /> */}

                        {/* <ul className="social">
                           <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                           <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                           <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                       </ul> */}
                        {/* <span className="product-new-label">Sale</span>
                       <span className="product-discount-label">20%</span> */}
                    </div>
                    <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star disable"></li>
                    </ul>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{product.name}</a></h3>
                        <div className="price">Rs.{product.price}
                            {/* <span>$20.00</span> */}
                        </div>
                        {/* <a className="add-to-cart" href="">+ Add To Cart</a> */}
                    </div>
                </div>
            </div>
    })
    return searchBar;
  }

  useEffect(() => {
    getProductsList();
}, [])

const getProductsList = () => {
    props.getRequest(API.listProducts).then(
        response => {
            console.log("response", response.data);
            setSearch(response.data);
        },
        error => {
            console.log("error", error);
        }
    )
}

  return (
    <div>
      <div className='container'>
        <div className='row'>
          {searchProducList()}
        </div>
      </div>

    </div>
  )
}

export default APIHOC(Search,null)