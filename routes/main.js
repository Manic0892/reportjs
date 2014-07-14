// # main
// All "miscellaneous" or "main" routes that are not devoted to a specific function.  Currently just includes handling of /, aka the homepage.

module.exports = function(app,db) {
	
	app.get(base + '/', function(req,res) {
		res.send('ReportJS');
	});
	
	app.get(base + '/report', function(req,res) {
		res.send('Report an issue.');
	});
	
	app.post(base + '/report', function(req,res) {
		res.send('Report an issue with prefilled information.');
	});
	
	app.post(base + '/report/submit', function(req,res) {
		res.send('Finalizing submitted issue.');
	});
}