exports.status = function(req, resp) {
	resp.json({"id":"mock", "status": "ok"});
}

exports.index = function(req, resp) {
	resp.json({"message" : "service works and up"});
}