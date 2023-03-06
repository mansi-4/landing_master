import React from 'react'
import Footer from './footer';
import Menu from './menu';
import { Link } from 'react-router-dom'

function Blog(){
    return(
        <div>
            <Menu/>
             <main>
                <div className="page-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_1.jpg" alt="" />
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Business Management?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_2.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Assets Management?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_3.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Code of Conduct Business?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_1.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Business Management?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_2.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Assets Management?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_3.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Code of Conduct Business?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_1.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Business Management?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_2.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Assets Management?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog">
                        <div className="header">
                            <div className="avatar">
                            <img src="assets/img/person/person_3.jpg" alt=""/>
                            </div>
                            <div className="entry-footer">
                            <div className="post-author">Sam Newman</div>
                            <a href="#" className="post-date">23 Apr 2020</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="post-title"><Link to="/blogsingle">What is Code of Conduct Business?</Link></div>
                            <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                        <div className="footer">
                            <Link to="/blogsingle">Read More <span className="mai-chevron-forward text-sm"></span></Link>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 mt-5">
                        <nav aria-label="Page Navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                        </nav>
                    </div>

                    </div>
            
                </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Blog;