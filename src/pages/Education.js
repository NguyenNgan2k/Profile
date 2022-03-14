import { GiCutDiamond, GiLockedFortress, GiRocket } from 'react-icons/gi'
function Education() {
    return (
        <>
            <div class="card-box">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section-title">
                            <h2>education</h2>
                            <div class="title-border"></div>

                        </div>
                    </div>
                </div>
                <div class="timeline-section">
                    <div class="timeline-items">
                    <div class="timeline-item">
                            <div class="timeline-dot"><GiCutDiamond className='fb' /></div>
                            <div class="timeline-date">2006-2010</div>
                            <div class="timeline-content">
                                <h4>Thong Kenh primary school</h4>
                                <p>Address: Thong Kenh, Gia loc, Hai Duong</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"><GiCutDiamond className='fb' /></div>
                            <div class="timeline-date">2011-2015</div>
                            <div class="timeline-content">
                                <h4>Thong Kenh secondary school</h4>
                                <p>Address: Thong Kenh, Gia loc, Hai Duong</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"><GiLockedFortress className="fb" /></div>
                            <div class="timeline-date">2016-2018</div>
                            <div class="timeline-content">
                                <h4>Doan Thuong high school</h4>
                                <p>Address: Thong Kenh, Gia loc, Hai Duong</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"><GiRocket className='fb' /></div>
                            <div class="timeline-date">2019-2022</div>
                            <div class="timeline-content">
                                <h4>Ha Noi University of Industry</h4>
                                <p> Address:: No. 298 Cau Dien Street, Bac Tu Liem District, Hanoi<br /></p>
                                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Education