import React, { Component } from "react";
import Logo from '../images/emiga-logo.png';

class Navbar extends Component {
    render() {

      return (
        <nav className="navbar navbar-light bg-light" id="navbar">
        		<div className="container p-0">
              <a href="/" title="Go to main">
                <img className="text-hide" title="emiga.tech" src={Logo} width="32" height="32" alt="emiga-tech logo"/>
              </a>

        		  <form id="search-bar">
        			   <input id="search" type="search" name="q" placeholder="Search..." required="on" className="form-control"/>
        		  </form>

        			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#emiga_navbar" aria-controls="emiga_navbar" aria-expanded="false" aria-label="Toggle navigation">
        				<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32px" height="32px"><path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/></svg>
        			</button>

        			 <div className="collapse navbar-collapse navbar-container border mt-3" id="emiga_navbar">
        			   	<ul className="navbar-nav pt-2 pb-2 container">
        			      <li className="nav-item">
        			        <a className="nav-link" href="/privacy-policy" title="Go to Privacy Policy" rel="noopener noreferrer" target="_blank">Privacy Policy
                          <svg className="pr-2 pl-2" fill="#dee2e6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="16px" height="16px"><path d="M 12.3125 0 C 10.425781 0.00390625 10.566406 0.507813 11.5625 1.5 L 14.78125 4.71875 L 9.25 10.25 C 8.105469 11.394531 8.105469 13.230469 9.25 14.375 L 11.6875 16.78125 C 12.832031 17.921875 14.667969 17.925781 15.8125 16.78125 L 21.34375 11.28125 L 24.5 14.4375 C 25.601563 15.539063 26 15.574219 26 13.6875 L 26 3.40625 C 26 -0.03125 26.035156 0 22.59375 0 Z M 4.875 5 C 2.183594 5 0 7.183594 0 9.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 16.125 26 C 18.816406 26 21 23.816406 21 21.125 L 21 14.75 L 18 17.75 L 18 21.125 C 18 22.160156 17.160156 23 16.125 23 L 4.875 23 C 3.839844 23 3 22.160156 3 21.125 L 3 9.875 C 3 8.839844 3.839844 8 4.875 8 L 8.3125 8 L 11.3125 5 Z"/></svg></a>
        			      </li>
        			      <li className="nav-item">
        			        <a className="nav-link" href="/terms-and-conditions"  title="Go to Terms and Conditions" rel="noopener noreferrer" target="_blank">Terms and Conditions
                          <svg className="pr-2 pl-2" fill="#dee2e6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="16px" height="16px"><path d="M 12.3125 0 C 10.425781 0.00390625 10.566406 0.507813 11.5625 1.5 L 14.78125 4.71875 L 9.25 10.25 C 8.105469 11.394531 8.105469 13.230469 9.25 14.375 L 11.6875 16.78125 C 12.832031 17.921875 14.667969 17.925781 15.8125 16.78125 L 21.34375 11.28125 L 24.5 14.4375 C 25.601563 15.539063 26 15.574219 26 13.6875 L 26 3.40625 C 26 -0.03125 26.035156 0 22.59375 0 Z M 4.875 5 C 2.183594 5 0 7.183594 0 9.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 16.125 26 C 18.816406 26 21 23.816406 21 21.125 L 21 14.75 L 18 17.75 L 18 21.125 C 18 22.160156 17.160156 23 16.125 23 L 4.875 23 C 3.839844 23 3 22.160156 3 21.125 L 3 9.875 C 3 8.839844 3.839844 8 4.875 8 L 8.3125 8 L 11.3125 5 Z"/></svg></a>
        			      </li>
        			      <li className="nav-item">
        			        <a className="pr-2 pl-2" className="nav-link" href="https://emiga.tech/apk/emiga.tech.apk" title="Download Android APK" rel="noopener noreferrer" target="_blank"><b>Download (Android)</b></a>
        			      </li>
        			  	</ul>
        			 </div>
        		</div>
        	</nav>
      );
    }
}


export default Navbar;
