import React from 'react'
import Clock from './clock'

class About extends React.Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-12">
								<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
									<div className="col-md-12">
										<div className="about-desc">
											<span className="heading-meta">About Us</span>
											<h2 className="colorlib-heading">Who Am I?</h2>
											<p>I am a grad student from TKR-Hyderabad with ECE as my major. Currently working in Cybage.I love playing football or playing any outdoor game, btw I play Xbox also so if you want to challenge me in FIFA your welcome. Apart from all this sometimes I even exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years</p>
											<p>I really don't know what to add more.</p>
											<p>“Get busy living or get busy dying.”-Stephen King</p>					
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
										<div className="services color-1">
											<span className="icon2"><i className="icon-bulb" /></span>
											<h3>Selenium</h3>
										</div>
									</div>
									<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
										<div className="services color-2">
											<span className="icon2"><i className="icon-globe-outline" /></span>
											<h3>Core JAVA</h3>
										</div>
									</div>
									<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
										<div className="services color-3">
											<span className="icon2"><i className="icon-data" /></span>
											<h3>SQL</h3>
										</div>
									</div>
									<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
										<div className="services color-4">
											<span className="icon2"><i className="icon-phone3" /></span>
											<h3>React</h3>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
										<div className="hire">
											<Clock></Clock>
											<a href="#" className="btn-hire">Hire me</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*<section class="colorlib-services" data-section="expertise">
					<div class="colorlib-narrow-content">
						<div class="row">
							<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span class="heading-meta">What I do?</span>
								<h2 class="colorlib-heading">Here are some of my expertise</h2>
							</div>
						</div>
						<div class="row row-pt-md">
							<div class="col-md-4 text-center animate-box">
								<div class="services color-1">
									<span class="icon">
										<i class="icon-bulb"></i>
									</span>
									<div class="desc">
										<h3>Innovative Ideas</h3>
										<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 text-center animate-box">
								<div class="services color-2">
									<span class="icon">
										<i class="icon-data"></i>
									</span>
									<div class="desc">
										<h3>Software</h3>
										<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
									</div>
								</div>
							</div>
								<div class="col-md-4 text-center animate-box">
									<div class="services color-3">
										<span class="icon">
											<i class="icon-phone3"></i>
										</span>
										<div class="desc">
											<h3>Application</h3>
											<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
										</div>
									</div>
								</div>
								<div class="col-md-4 text-center animate-box">
									<div class="services color-4">
										<span class="icon">
											<i class="icon-layers2"></i>
										</span>
										<div class="desc">
											<h3>Graphic Design</h3>
											<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
										</div>
									</div>
								</div>
								<div class="col-md-4 text-center animate-box">
									<div class="services color-5">
										<span class="icon">
											<i class="icon-data"></i>
										</span>
										<div class="desc">
											<h3>Software</h3>
											<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
										</div>
									</div>
								</div>
								<div class="col-md-4 text-center animate-box">
									<div class="services color-6">
										<span class="icon">
											<i class="icon-phone3"></i>
										</span>
									<div class="desc">
										<h3>Application</h3>
										<p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>*/}
				<div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/bg_1.jpg)'}} data-stellar-background-ratio="0.5">
					<div className="overlay" />
						<div className="colorlib-narrow-content">
							<div className="row">
								<span className="colorlib-counter-label">Page Last Updated On</span>
							</div>
							<div className="row">
								<div className="col-md-3 text-center animate-box">
									<span className="colorlib-counter js-counter" data-from={0} data-to={2300} data-speed={5000} data-refresh-interval={50} />
									<span className="colorlib-counter-label">Time</span>
								</div>
							<div className="col-md-3 text-center animate-box">
								<span className="colorlib-counter js-counter" data-from={0} data-to={11} data-speed={5000} data-refresh-interval={50} />
								<span className="colorlib-counter-label">Day</span>
							</div>
							<div className="col-md-3 text-center animate-box">
								<span className="colorlib-counter js-counter" data-from={0} data-to={5} data-speed={5000} data-refresh-interval={50} />
								<span className="colorlib-counter-label">Month</span>
							</div>
							<div className="col-md-3 text-center animate-box">
								<span className="colorlib-counter js-counter" data-from={0} data-to={2019} data-speed={5000} data-refresh-interval={50} />
								<span className="colorlib-counter-label">Year</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;