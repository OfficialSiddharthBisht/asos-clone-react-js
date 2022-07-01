import './footer.css'

export default function Footer(){
    return (
        <div>
            <div className="container-fluid text">
                <div className='container'>'
                <div className='row text_row'>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='text1'>
                            <li className='head mb-2'>HELP & INFORMATION</li>
                            <li className='mb-2'> <a href="">Help</a> </li>
                            <li className='mb-2'> <a href="">Track order</a> </li>
                            <li className='mb-2'><a href="">Delivery & returns</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='text1'>
                            <li className='head mb-2'>ABOUT ASOS</li>
                            <li className='mb-2'><a href="">About us</a></li>
                            <li className='mb-2'><a href="">Careers at ASOS</a></li>
                            <li className='mb-2'><a href="">Corporate responsibility</a></li>
                            <li className='mb-2'><a href="">Investors' site</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='text1'>
                            <li className='head mb-2'>MORE FROM ASOS</li>
                            <li className='mb-2'><a href="">Mobile and ASOS apps</a></li>
                            <li className='mb-2'><a href="">ASOS Marketplace</a></li>
                            <li className='mb-2'><a href="">Gift vouchers</a></li>
                            <li className='mb-2'><a href="">Black Friday</a></li>
                            <li className='mb-2'><a href="">ASOSxThrift+</a></li>

                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 col-md-3 col-sm-6'>
                        <ul className='text1'>
                            <li className='head mb-2'>SHOPPING FROM:</li>
                            <li> <span className='border-end border-dark'>You're in<img src="https://bit.ly/3tJ6TdC" className='ms-2 me-2' style={{ width: "15px", height: "15px", borderRadius: "50%", verticalAlign: "middle" }} alt="" /></span>  <span>CHANGE</span> </li>
                        </ul>
                    </div>

                </div>
                </div>
                <div className='bottom_'>
                    <div className='container d-flex justify-content-between pt-2'>
                        <div className='bottomx'>
                            <p>© 2022</p>
                        </div>
                        <div>
                            <p className='bottomx'>Privacy & Cookies | Ts&Cs | Accessibility</p>
                        </div>
                    </div>
                </div>
                <div className='bottomy'>
                    <p>ASOS</p>
                </div>

            </div>
        </div>
    )
}