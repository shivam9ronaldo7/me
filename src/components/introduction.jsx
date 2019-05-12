import React from 'react';

class Introduction extends React.Component {
	render() {
		return (
			<div>
				<section id="colorlib-hero" className="js-fullheight" data-section="home">
					<div className="flexslider js-fullheight">
						<ul className="slides">
							<li style={{backgroundImage: 'url(images/cover.jpeg)'}}>
								<div className="overlay" />
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
											<div className="slider-text-inner js-fullheight">
												<div className="desc">
													<h1>Hi! <br />I'm Shivam</h1>
													<p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1C48S15yHQZgds34TMHEfZRlXRJKaUtAf/view?usp=sharing" target="_blank">View CV<i className="icon-download4" /></a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li style={{backgroundImage: 'url(images/cover.jpeg)'}}>
								<div className="overlay" />
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
											<div className="slider-text-inner">
												<div className="desc">
													<h1>I love playing<br /> XBOX !!</h1>
													<p><a className="btn btn-primary btn-learn" href="https://github.com/shivam9ronaldo7" target="_blank">View Projects <i className="icon-briefcase3" /></a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		)
	}	
}

export default Introduction;