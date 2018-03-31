var Event = require('../models/event');

// Display list of all BookInstances.
exports.event_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Event list');
};

// Display detail page for a specific BookInstance.
exports.event_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Event detail: ' + req.params.eventId);
};

// Handle BookInstance create on POST.
exports.event_create = function(req, res) {
    res.send('NOT IMPLEMENTED: Event create POST');
};
