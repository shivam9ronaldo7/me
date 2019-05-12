import React from 'react'

class WorkExperience extends React.Component {
	render(){
		return (
			<section className="colorlib-experience" data-section="experience">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Experience</span>
							<h2 className="colorlib-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="timeline-centered">
								<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
									<div className="timeline-entry-inner">
										<div className="timeline-icon color-1">
											<i className="icon-pen2" />
										</div>
										<div className="timeline-label">
											<h2><a href="#">Automation Engineer</a> <span>January 2019 - Till date</span></h2>
											<p><strong>PROJECT: ETL Testing using ROBOT Framework</strong></p>
											<p><strong>Organization: CYBAGE Software</strong></p>
											<p><strong>Client: Retail Solutions</strong></p>
											<ul>
												<li>Automating ETL business flows using ROBOT framework, validating data integrity and business flows.</li>
												<li>Extensively used SQL queries for data validation and backend testing.</li>
												<li>Involvement in Preparation of Test Procedures, Test Scenarios, Cases and Test Data.</li>
												<li>Uploading the test scripts/project on the Bitbucket.</li>
												<li>Played role in creation and testing of designed scalable, reusable, and low maintenance ETL automation suites.</li>
												<li>Involved in Regression Testing using built automation scripts.</li>
											</ul>
											<p>Tools: Vertica DB, Oracle DB, MSSQL Server, Python, ROBOT, Selenium WebDriver 2.0, Bitbucket, JIRA & Jenkins</p>
										</div>
									</div>
								</article>
								<article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
									<div className="timeline-entry-inner">
										<div className="timeline-icon color-2">
											<i className="icon-pen2" />
										</div>
										<div className="timeline-label">
											<h2><a href="#">Automation Engineer</a> <span>February 2017 - December 2018</span></h2>
											<p><strong>PROJECT: HSBCnet Commercial Banking – Automation Testing using BDD Framework</strong></p>
											<p><strong>Organization: Capgemini India Pvt. Ltd.</strong></p>
											<p><strong>Client: HSBC</strong></p>
											<ul>
												<li>Writing Selenium automation script on framework built on Java, Selenium, JBehave, Serenity and Maven.</li>
												<li>Involvement in Preparation of Test Procedures, Test Scenarios, Cases and Test Data.</li>
												<li>Uploading the test scripts/project on the Git.</li>
												<li>Taking daily calls and project meetings with all the concerned teams.</li>
												<li>Involved in Regression Testing using built automation scripts.</li>
												<li>Product Verification Testing (PVT) prior to go live.</li>
											</ul>
											<p><strong>Tools: Selenium WebDriver 2.0, JBehave, Maven, GITHUB, JIRA, Serenity & Jenkins</strong></p>
										</div>
									</div>
								</article>
								<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
									<div className="timeline-entry-inner">
										<div className="timeline-icon color-3">
											<i className="icon-pen2" />
										</div>
										<div className="timeline-label">
											<h2><a href="#">Automation Engineer</a> <span>March 2016 - June 2017</span></h2>
											<p><strong>PROJECT: HSBCnet Automation Testing using OPTIK Framework</strong></p>
											<p><strong>Organization: Capgemini India Pvt. Ltd.</strong></p>
											<p><strong>Client: HSBC</strong></p>
											<ul>
												<li>Automating front end test cases using OPTIK framework.</li>
												<li>SWIFT Messages and End to End Testing of Payments with different Back Office Systems.</li>
												<li>Testing payments using different file formats viz. MT103, XML V2, and XMLV3 etc.</li>
												<li>Creating automation test scripts using XPaths and OPTIK framework.</li>
												<li>Execution of test scripts on Selenium Grid.</li>
												<li>Defect logging and tracking using HP QC.</li>
												<li>Regression testing using the Test Scripts during regression window prior to each release.</li>
												<li>Maintenance and modification of the automation test scripts using OPTIK framework.</li>
											</ul>
											<p><strong>Tools: Selenium & HP ALM</strong></p>
											<p><strong>Framework: OPTIK(Built on Selenium Webdriver & Grid)</strong></p>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default WorkExperience;