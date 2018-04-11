"use strict";
exports.__esModule = true;
exports.ADD_FEED = "feed/addFeed";
exports.actionCreators = {
    addFeed: function (title, feedUrl, updateInterval) {
        return {
            type: exports.ADD_FEED,
            payload: {
                title: title,
                feedUrl: feedUrl,
                updateInterval: updateInterval
            }
        };
    }
};
exports.initialState = { feeds: [] };
exports.reducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case exports.ADD_FEED: {
            return {
                feeds: state.feeds.concat([action.payload])
            };
        }
        default: {
            return state;
        }
    }
};
