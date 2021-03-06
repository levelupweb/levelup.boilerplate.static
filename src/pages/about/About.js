import React from "react";
import { Helmet } from "react-helmet";
import "./about.css";

const About = props => {
	return (
		<div className="page-about page">
			<Helmet>
        <title>About This Boilerplate</title>
        <meta name="description" content="About Boilerplate" />
    		<meta name="keywords" content="react, express, es6, javascript, webpack" />
    		<meta name="author" content="Levelup Web" />
  			<meta name="robots" content="index, follow" />
  			<meta name="revisit-after" content="1 days" />
  			<meta property="og:type" content="website" />
    		<meta property="og:site_name" content="Levelup Static Boilerplate" />
    		<meta property="og:title" content="Levelup Boilerplate" />
    		<meta property="og:description" content="This is an exprensive boilerplate for creating rich sites" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="about-us">
					<h5 className="super title">
						About This Boilerplate
					</h5>
					<p className="description">What's this?</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					An boilerplate for creating static web applicatios. Based on create-react-app. This boilerplate includes:
				</p>
			</div>
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Default CSS Theme
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							React
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							ES6
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Nice folder structure
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Npm scripts for your workflow
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							Gulp
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<i className="fa fa-check"></i>
						</div>
						<div className="content">
							ESLint
						</div>
					</div>
				</div>
			</div>
			<div className="block">
				<p className="primary">
					Start Editing this project with this page. If you want to become an contributor or read some instructions, follow these links:	
				</p>
			</div>
			<div className="block">
				<div className="button-group">
					<a href="https://github.com/kv9991/levelup.boilerplate.static" className="button">Github <i className="fa fa-github"></i></a>
					<button className="button disabled">Story Book (Soon) <i className="fa fa-book"></i></button>
				</div>	
			</div>
		</div>
	)
}

export default About;
