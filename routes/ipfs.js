exports.status = (req, resp) => {
	resp.json({"id":"mock", "status": "ok"});
}

exports.index = (req, resp) => {
	resp.json({"message" : "service works and up"});
}