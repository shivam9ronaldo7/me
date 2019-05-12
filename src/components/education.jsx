import React from 'react'

class Education extends React.Component {
	render(){
		return (
			<section className="colorlib-education" data-section="education">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Education</span>
							<h2 className="colorlib-heading animate-box">Education</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div className="fancy-collapse-panel">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div className="panel panel-default">
										<div className="panel-heading" role="tab" id="headingTwo">
											<h4 className="panel-title">
												<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">B.Tech in Electronics and Communication Engineering
												</a>
											</h4>
										</div>
										<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
											<div className="panel-body">
												<p>Bachelor of Technology from TKR College of Engg & Tech, Electronics & Communication Engineering June, 2015 with an aggregate of 64.57%</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" role="tab" id="headingThree">
											<h4 className="panel-title">
												<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Senior Secondary in MPC
												</a>
											</h4>
										</div>
										<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
											<div className="panel-body">
												<p>Intermediate from Kendriya Vidyalaya Kanchanbagh, March, 2011 with an aggregate of 81.8%</p>	
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" role="tab" id="headingFour">
											<h4 className="panel-title">
												<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Secondary in Science
												</a>
											</h4>
										</div>
										<div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
											<div className="panel-body">
												<p>Kendriya Vidyalaya Kanchanbagh, March, 2009 with an aggregate of 80.4%</p>	
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Education;		