import React, {Component} from 'react';

class Timeline extends Component {
    render() {
        return (
            // <div className="">

            // </div>
            < div className = "ui container" >
                <div className="pres-timeline" id="this-timeline">
                    <div className="periods-container">
                        <section className="period-single" period="period1">
                            <h4 className="year">181x-181x</h4>
                            <h2 className="title">1 Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                                doloremque, laboriosam officia facere eligendi quam reiciendis, rem explicabo
                                dolores tenetur libero minus, facilis quibusdam. Consectetur amet beatae fuga,
                                architecto magnam.</p>
                        </section>
                        <section className="period-single" period="period2">
                            <h4 className="year">182x-182x</h4>
                            <h2 className="title">2 Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                                doloremque, laboriosam officia facere eligendi quam reiciendis, rem explicabo
                                dolores tenetur libero minus, facilis quibusdam. Consectetur amet beatae fuga,
                                architecto magnam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                                doloremque, laboriosam officia facere eligendi quam reiciendis, rem explicabo
                                dolores tenetur libero minus, facilis quibusdam. Consectetur amet beatae fuga,
                                architecto magnam.</p>
                        </section>
                        <section className="period-single" period="period3">
                            <h4 className="year">183x-183x</h4>
                            <h2 className="title">3 Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                                doloremque, laboriosam officia facere eligendi quam reiciendis, rem explicabo
                                dolores tenetur libero minus, facilis quibusdam. Consectetur amet beatae fuga,
                                architecto magnam.</p>
                        </section>
                        <div className="btn-back"></div>
                        <div className="btn-next"></div>
                    </div>

                    <div className="timeline-container">
                        <div className="timeline"></div>

                        <div className="btn-back">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h30v30H0z"/><path
                                fill="#D8D8D8"
                                fill-rule="evenodd"
                                d="M11.828 15l7.89-7.89-2.83-2.828L6.283 14.89l.11.11-.11.11L16.89 25.72l2.828-2.83"/></svg>
                        </div>
                        <div className="btn-next">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h30v30H0z"/><path
                                fill="#D8D8D8"
                                fill-rule="evenodd"
                                d="M18.172 14.718l-7.89-7.89L13.112 4l10.606 10.607-.11.11.11.11-10.608 10.61-2.828-2.83 7.89-7.89"/></svg>
                        </div>
                    </div>

                    <div className="cards-container">
                        <section className="card-single active" period="period1">
                            <h4 className="year">1816</h4>
                            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
                            <div className="content">
                                <img
                                    src="https://ununsplash.imgix.net/photo-1421284621639-884f4129b61d?fit=crop&fm=jpg&h=700&q=75&w=1050"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vitae sint
                                    dolore, officia esse! A recusandae nemo illum rem eos iusto repellendus,
                                    voluptatibus tempora nulla voluptatem officia inventore ea modi.</p>
                            </div>
                        </section>
                        <section className="card-single" period="period1">
                            <h4 className="year">1816</h4>
                            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
                            <div className="content">
                                <img
                                    src="https://ununsplash.imgix.net/photo-1421284621639-884f4129b61d?fit=crop&fm=jpg&h=700&q=75&w=1050"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vitae sint
                                    dolore, officia esse! A recusandae nemo illum rem eos iusto repellendus,
                                    voluptatibus tempora nulla voluptatem officia inventore ea modi.</p>
                            </div>
                        </section>
                        <section className="card-single" period="period2">
                            <h4 className="year">1816</h4>
                            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A tempora
                                    blanditiis ut voluptas nisi labore quos iste totam obcaecati modi rerum iusto,
                                    voluptate odio commodi ratione amet illum dicta accusamus, ipsum ea vero neque
                                    enim, recusandae dignissimos? Quae ea aspernatur dolor atque, ipsum repellendus.
                                    Repudiandae culpa magnam, doloribus exercitationem illo impedit quasi officia,
                                    veniam vero molestiae sunt dolorem, excepturi ullam dicta sed amet provident ut
                                    soluta pariatur magni! Fugiat eveniet suscipit praesentium culpa aperiam ab
                                    nulla, exercitationem atque quod, labore, qui quaerat nihil nam laborum aliquam!
                                    Nesciunt dignissimos eaque impedit ex, architecto minima ad, temporibus rem
                                    possimus consequatur doloremque, fuga?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vitae sint
                                    dolore, officia esse! A recusandae nemo illum rem eos iusto repellendus,
                                    voluptatibus tempora nulla voluptatem officia inventore ea modi.</p>
                            </div>
                        </section>
                        <section className="card-single" period="period1">
                            <h4 className="year">1816</h4>
                            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vitae sint
                                    dolore, officia esse! A recusandae nemo illum rem eos iusto repellendus,
                                    voluptatibus tempora nulla voluptatem officia inventore ea modi.</p>
                            </div>
                        </section>
                        <section className="card-single" period="period3">
                            <h4 className="year">1816</h4>
                            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
                            <div className="content">
                                <img
                                    src="https://ununsplash.imgix.net/photo-1421284621639-884f4129b61d?fit=crop&fm=jpg&h=700&q=75&w=1050"
                                    alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vitae sint
                                    dolore, officia esse! A recusandae nemo illum rem eos iusto repellendus,
                                    voluptatibus tempora nulla voluptatem officia inventore ea modi.</p>
                            </div>
                        </section>
                        <section className = "card-single" period = "period3" > 
                            <h4 className="year">1816</h4> 
                            <h2 className = "title" > Lorem ipsum dolor sit amet. </h2>
                            <div className="content">
                                <img src="https://ununsplash.imgix.net/photo-1421284621639-884f4129b61d?fit=crop&fm=jpg&h=700&q=75&w=1050"
                                alt = "" /> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vitae sint dolore, officia esse! A recusandae nemo illum rem eos iusto repellendus,voluptatibus tempora nulla voluptatem officia inventore ea modi.</p> 
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;