import React, { Component } from 'react';


class Card extends Component{
    constructor(props){
        super(props);
        this.state={
    
        }
    }
   

    render(){
        return (
            <section classNameName='container-lg' >
                <div classNameName='d-flex flex-row text-center '>
                        <h3 id='ttx1'  classNameName=''>이달의 추천</h3>
                        <div className="card-grop row row-cols-1 row-cols-md-4 d-flex justify-content-center">
                            <div className="card ">
                                <img src="./review/p1.jpg" className="card-img-top mt-2" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">[서울/경기 새해 특가]</h5>
                                <p className="card-text">*아반떼&레이 월 렌트 특가*</p>
                                </div>
                            </div>
                            <div className="card ">
                                <img src="./review/p2.jpg" className="card-img-top mt-2" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">[서울/경기 새해 특가]</h5>
                                <p className="card-text">*스포티지 1주, 2주, 월 렌트 특가*</p>
                                </div>
                            </div>
                            <div className="card ">
                                <img src="./review/p3.jpg" className="card-img-top mt-2" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">[레이 캠핑카]낭만여행♥</h5>
                                <p className="card-text">경주에서 함께하는커플캠핑도 카모아에서</p>
                                </div>
                            </div>
                        </div>
                        <h3 id='ttx' classNameName=''>추천 여행지</h3>    
                        <div className='card-grop row row-cols-1 row-cols-md-4 d-flex justify-content-center '>
                            <div className="card ">
                                <img src="./gallery/p1.jpg" className="card-img-top mt-2" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">서울</h5>
                                <p className="card-text">매력적인 도시여행</p>
                                </div>
                            </div>
                            <div className="card ">
                                <img src="./gallery/p2.jpg" className="card-img-top mt-2" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">여수</h5>
                                <p className="card-text">감성충전 밤바다</p>
                                </div>
                            </div>
                            <div className="card ">
                                <img src="./gallery/p3.jpg" className="card-img-top mt-2" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">강릉</h5>
                                <p className="card-text">그리운 바다 도시</p>
                                </div>
                            </div>
                        </div> 
                        
                </div>
            </section>
            )
    }
 
}

export default Card;
