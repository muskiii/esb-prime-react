import React, { Component } from 'react';

export default class Sec4 extends Component {


	render() {
		return (
			<section id="contact">
     		   <div className="container">
       		    	<div className="row">
	    		        <div className="col-lg-8 col-lg-offset-2 text-center">
	                  		<h2 className="section-heading">Let's Get In Touch!</h2>
	                   		<hr className="primary"/>
	                    	<p>Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
	               		</div>
	              		<div className="col-lg-4 col-lg-offset-2 text-center">
	                    	<i className="fa fa-phone fa-3x sr-contact"></i>
	                    	<p>123-456-6789</p>
	                	</div>
	                	<div className="col-lg-4 text-center">
	                    	<i className="fa fa-envelope-o fa-3x sr-contact"></i>
	                    	<p><a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a></p>
	                	</div>
            		</div>
        		</div>
    		</section>
		);    
	}
}
