/**
    BASIC IMPORTS
**/

    //** NATIVE MODULES **/
    exports.os                  = require("os");
    exports.fs                  = require("fs");
    exports.url 	            = require("url");	
    exports.http                = require("http");
    exports.path                = require('path');
    exports.https               = require("https");    
    exports.crypto              = require("crypto");
    exports.readline 	        = require('readline');
    exports.child_process       = require('child_process');
    exports.exec                = exports.child_process.exec;
    
    //** UTILITY MODULES**//
    exports.c                   = require("colors");
    exports.fse                 = require("fs-extra");
    
    exports.fcm		        	= require("node-gcm");
    
    exports.zip                 = require("adm-zip");
    exports.targz               = require("tar"); 
    exports.compression         = require("compression");
    // exports.oppressor           = require("oppressor");
    // exports.busboy              = require("connect-busboy");
    exports.request             = require("request");
    exports.qs                  = require("querystring");
    exports.axios               = require("axios");
    exports.request_promise     = require("request-promise");

    // exports.xml2json            = require("simple-xml2json");

    //@ Store the path to the user directory
    exports.home                = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE);
    
    //** UTILITY CONFIGURATION
    exports.cs                  = exports.c.setTheme({ 
                                    success :'green',
                                    err :'red', 
                                    info:'blue', 
                                    gray:'gray', 
                                    yell:'yellow',
                                    succ: 'green'
                                });

    //** DATABASE MODULES

    //@ Sequielize for simplified ['mysql','postgresql','mssql','sqlite'] connection
    exports.sequelize    = exports.Sequelize       = require("sequelize");


    //** SERVER HANDLING MODULES
    exports.bodyParser          = require("body-parser");
    exports.express             = require("express");
    exports.multer              = require("multer");
    exports.socket	            = require("socket.io");
    exports.ejs                 = require("ejs");
    // exports.useragent           = require("superagent");
    exports.wagner              = require("wagner-core");

    //** AUTHENTICATION MODULES
    exports.passport         = require("passport");
    let passport_jwt         = require("passport-jwt");
    passport_jwt.ExtractJwt.fromAuthHeader   = () =>
    {
        return passport_jwt.ExtractJwt.fromHeader("authorization");
    }
    exports.passport_jwt     = passport_jwt; 
    exports.nJwt             = require("njwt");
    exports.jwt              = require("jsonwebtoken");
   
/**
    EO - BASIC IMPORTS
**/

    //---------------------------------------------------------------//
