import React from 'react';

class Sidebar extends React.Component {
	render() {
		return (
			<div>
				<div>
					<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
					<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
					<div className="text-center">
						<div className="author-img" style={{backgroundImage: 'url(images/profile.jpeg)'}} />
							<h1 id="colorlib-logo"><a href="index.html">Shivam Pratap Singh</a></h1>
							<span classname="email"><i classname="icon-mail" /> shivam9ronaldo7@gamil.com</span>
							<br/>
							<span classname="number"><i classname="icon-phone" />+91 9145431593</span>						
						</div>
						<p></p>
						<p></p>
						<p></p>
						<nav id="colorlib-main-menu" role="navigation" className="navbar">
							<div id="navbar" className="collapse">
								<ul>
									<li className="active"><a href="#" data-nav-section="home">Home</a></li>
									<li><a href="#" data-nav-section="about">About</a></li>
									{/*<li><a href="#" data-nav-section="expertise">Expertise</a></li>*/}
									<li><a href="#" data-nav-section="skills">My Skills</a></li>
									<li><a href="#" data-nav-section="education">Education</a></li>
									<li><a href="#" data-nav-section="experience">Experience</a></li>
									{/*<li><a href="#" data-nav-section="timeline">Work</a></li>*/}
									{/*<li><a href="#" data-nav-section="timeline">Blog</a></li>*/}
									<li><a href="#" data-nav-section="contact">Contact</a></li>
								</ul>
							</div>
						</nav>
						<nav id="colorlib-main-menu">
							<ul>
								<li><a href="https://www.facebook.com/shivam.p.singh.31" target="_blank"><i className="icon-facebook2" /></a></li>
								<li><a href="https://twitter.com/shivam9ronaldo7" target="_blank"><i className="icon-twitter2" /></a></li>
								<li><a href="https://www.instagram.com/shivam9ronaldo7/" target="_blank"><i className="icon-instagram" /></a></li>
								<li><a href="https://www.linkedin.com/in/shivam-singh-b11223a8/" target="_blank"><i className="icon-linkedin2" /></a></li>
								<li><a href="https://github.com/shivam9ronaldo7" target="_blank"><i className="icon-github"></i></a></li>
								{/*<li><a href="" target="_blank"><i className="icon-blogger2"></i></a></li>*/}
							</ul>
						</nav>
						<div className="colorlib-footer">
							<p><small>
								Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
								Thanks <a href="https://colorlib.com" target="_blank">Colorlib</a> for inspiration 
							</small></p>
						</div>
					</aside>
				</div>
			</div>
		)
	}
}

export default Sidebar;
