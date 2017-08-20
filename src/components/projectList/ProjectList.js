import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project.js';
import './projects.css';

const renderProjects = projects => 
	projects.map((project) => 
		<Project project={project} />
	)

const ProjectList = props => 
	<div className="projects">
		{renderProjects(props.projects)}
	</div>


ProjectList.propTypes = {
	preview: PropTypes.bool,
	projects: PropTypes.array
}

export default ProjectList
