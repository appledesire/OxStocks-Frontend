import React , { Fragment, useEffect, useState } from 'react';
import '../../../assets/css/home/news/news.scss';
import { Link } from 'react-router-dom';
import Nav from '../../include/Nav';
import Resbtn from '../../include/Resbtn';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNews } from '../../../actions/news';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

const News = ({ getNews, news: {news} }) => {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const body = document.querySelector('#root');
            body.scrollIntoView({
                behavior: 'smooth'
            }, 500)
    }, []);

    useEffect(() => {
        getNews(currentPage);
        getTotalNewsCount();
    }, [getNews, currentPage]);

    const [totalCount, setTotalCount] = useState(1); 

    const getTotalNewsCount = async () => {
        console.log("asdfasdf");
        const res = await axios.post('/api/news/getTotalNewsCount');
        console.log("11111111111111111111111111");
        console.log(res, 'asdfadsfasdf');
        setTotalCount(res.data);
    }


    const panginator = (
        <div className='d-flex justify-content-between align-item-center'>
            <button className='btn btn-primary' onClick={() => { if(currentPage > 10) { setCurrentPage(currentPage - 10); getNews(currentPage);  } }} style={{"cursor": "pointer"}}>Previous Page</button>
            <p className='m-0' style={{"color": "white"}}>{currentPage} - { currentPage + 10 < totalCount ? currentPage + 10 : totalCount} / {totalCount}</p>
            <button className='btn btn-primary' onClick={() => {  if(currentPage < totalCount - 10 ) { setCurrentPage(currentPage + 10); getNews(currentPage); }  }} style={{"cursor": "pointer"}}>Next Page</button>
        </div>
    )

    return (
        <Fragment>
            <div className="aboutus_section_1">
                <div className="container">
                    <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                        <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "20%", left: "0" }} /></Link>
                        <Nav />
                    </div>
                    <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                        <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                        {/* <Link to="" className="nav-link navbar_rightbox" href="#" >
                        &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                            
                        </Link> */}
                        <Resbtn />
                    </div>
                <div className="row aboutus_link_tab">
                    <p className="aboutus_link_title">News</p>
                    <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">News</span></p>
                </div>
                </div>
            </div>
            <div className="news_section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12 box">
                            <p className="title1">All Ox Stock News</p>

                            {
                                Object.keys(news).length > 0 ? (
                                    news.map((item) => (
                                        <Row className='box_news'>
                                            <Col lg="3" md="3" sm="5" xs="12">
                                                <Link to={`/news/${item._id}`}>
                                                <img className="img-fluid" src={item.image} style={{"width": "100%"}} alt=""/></Link>     
                                            </Col>
                                            <Col lg="9" md="9" sm="7" xs="12">
                                                <Link to={`/news/${item._id}`}>
                                                <p className="title3">{item.title}</p>
                                                <p className="title2">{ new Date(item.date).getDate() + " " + (new Date(item.date).getMonth() +1) + " " + new Date(item.date).getFullYear() }</p>
                                                <p className="title4">Read More</p></Link> 
                                            </Col>
                                        </Row>

                                        // <div className="box_news">
                                        //     <div>
                                        //         <img className="img-fluid" src={item.image} style={{"width": "150px"}} alt=""/>
                                        //     </div>
                                        //     <div>
                                        //         <p className="title3">{item.title}</p>
                                        //         {/* <p className="title2">{item.comment.substring(0, 60)}...</p> */}
                                        //         <p className="title2">{ new Date(item.date).getDate() + " " + (new Date(item.date).getMonth() +1) + " " + new Date(item.date).getFullYear() }</p>
                                        //         <Link to={`/news/${item._id}`}><p className="title4">Read More</p></Link> 
                                        //     </div>
                                        // </div>
                                    ))
                                ) : (<></>)
                            }
                            {panginator}


                        </div>
                        <div className="col-xl-4 col-md-5 col-sm-12 box2">
                            <p className="title1">RECENT NEWS</p>
                            
                            {Object.keys(news).length > 0 ? (
                                news.slice(0,3).map((item) => (
                                    <div className="box_recent" key={item._id}>
                                        <div>
                                            <img src="assets/img/oxnews/news.png" width="50" alt=""/>
                                        </div>
                                        <div>
                                            <Link to={`/news/${item._id}`}><p className="title3">{item.title}</p></Link>
                                            <p className="title2">{ new Date(item.date).getDate() + " " + (new Date(item.date).getMonth() +1) + " " + new Date(item.date).getFullYear() }</p>
                                        </div>
                                    </div>
                                ))
                            ) : (<></>) }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
    
}

News.propTypes = {
    getNews: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    news: state.news,
});

export default connect(mapStateToProps, { getNews })(
    News
);
