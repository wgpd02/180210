module.exports = function (request, response, controllerName) {
    this.request  = request;
    this.response = response;
    this.viewPath = controllerName + "/";
    
    // /member/login
	this.login = function () {
	    this.response.render(this.viewPath + "login.html", 
	        { why: "", id: "",  password: "" }
	    );
	}

    // login.html  <form ... data-ajax="false">...</form>
	this.post_login = function () {
	    if (this.request.body.txtID != "" && this.request.body.txtPassword != "") {  // correct!
	        request.session.userId = this.request.body.txtID;
	        response.redirect("/home/index");
	        return;
	    }

	    this.response.render(this.viewPath + "login.html", 
	        { why: message, 
	          password: this.request.body.txtPassword,  // value="<%= password %>"
	          id: this.request.body.txtID
	        }
	    );
	}
	
    // /member/logout
	this.logout = function () {
		delete request.session.userId;
		response.redirect("/home/index");
	}

}
