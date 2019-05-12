import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Education from './components/education'
import WorkExperience from './components/workexperience'
import Contact from './components/contact'

class App extends React.Component {
  render() {
    return (
      <div id="colorlib-page">
        <div className="container-wrap">
         	<Sidebar></Sidebar>
			<div id="colorlib-main">
				<Introduction></Introduction>
				<About></About>
				<Skills></Skills>
				<Education></Education>
				<WorkExperience></WorkExperience>
				<Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
