'use strict';

const Promise = require('bluebird');
const Axios = require('axios');

var url = 'http://kbms.archisdiningrat.net/api';
var key = 'F9WN8kj6gO13qL8L5lu0HP1uvH1A2P0u';

exports.handler = (event, context, callback) => {
        
        Promise.coroutine(function*() {
            try{
                let response = yield Axios.get(url+'/anggota', {
                    params: {
                        apikey: key,
                        page:event.page
                    }
                });
                
                callback(null,response.data);
                
            }catch(err){
                callback(err,null);
            }
        })();
};    
    
module.exports = exports;