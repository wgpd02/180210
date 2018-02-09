module.exports = function (request, response, controllerName) {
    this.request  = request;
    this.response = response;
    this.viewPath = controllerName + "/";
    
    // /home/index
	this.index = function () {
	    this.response.render(this.viewPath + "index.html", 
	        { userId: request.session.userId }
	    );
	}

	// /home/member
	this.member = function () {
		if (!request.session.userId) {
			response.redirect("/member/login");
			return;
		}
		
	    this.response.render(this.viewPath + "member.html", 
	        { userId: request.session.userId }
	    );
	}
	// copy member.html content
	// update url path  /js/...  /home/index,  /member/login, /home/member

}
