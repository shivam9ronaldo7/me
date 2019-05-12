import React from 'react'

class Skills extends React.Component {
	render(){
		return (
			<section className="colorlib-skills" data-section="skills">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Specialty</span>
							<h2 className="colorlib-heading animate-box">My Skills</h2>
						</div>
					</div>
					<div className="row">
						{/*<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<p>Below are my programming skills.</p>
						</div>*/}
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>Core JAVA</h3>
								<div className="progress">
									<div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
										<span>80%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>Selenium</h3>
								<div className="progress">
									<div className="progress-bar color-2" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
										<span>80%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>HTML5</h3>
								<div className="progress">
									<div className="progress-bar color-3" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
										<span>60%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>CSS3</h3>
								<div className="progress">
									<div className="progress-bar color-4" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
										<span>60%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="progress-wrap">
								<h3>Maven</h3>
								<div className="progress">
									<div className="progress-bar color-5" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
										<span>50%</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div className="progress-wrap">
								<h3>React</h3>
								<div className="progress">
									<div className="progress-bar color-6" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}>
										<span>20%</span>
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

export default Skills;		