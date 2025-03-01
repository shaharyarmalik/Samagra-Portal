import React from 'react'

export default function Slider() {
    return (
        <>
            <section id="img-slide">
                <div>
                    <div className="container">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner" style={{ marginTop: '45px' }}>
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={0}
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={1}
                                        aria-label="Slide 2"
                                    />
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={2}
                                        aria-label="Slide 3"
                                    />
                                </div>
                                <div className="carousel-item active">
                                    <img src="Slide1.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="Slide2.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="Slide3.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="Slide4.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
