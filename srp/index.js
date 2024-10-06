"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reportGenerator_1 = require("./reportGenerator");
var emailSender_1 = require("./emailSender");
var reportGen = new reportGenerator_1.ReportGenerator();
var emailSender = new emailSender_1.EmailSender();
var report = reportGen.generateReport("This is the data.");
emailSender.sendEmail("user@example.com", report);
