var { MailListener } = require("mail-listener6");

// here goes your email connection configuration
var mailListener = new MailListener({
    username: "dhruvpatel.2694+2@gmail.com",
    password: "eyjahswcepxzsuao",
    host: "imap.gmail.com",
    port: 993, // imap port 
    tls: true,
    connTimeout: 10000,
    authTimeout: 5000,
    debug: null,
    tlsOptions: { rejectUnauthorized: false },
    mailbox: "INBOX", // mailbox to monitor 
    searchFilter: ["UNSEEN"], // the search filter being used after an IDLE notification has been retrieved 
    markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
    fetchUnreadOnStart: false, // use it only if you want to get all unread email on lib start. Default is `false`, 
    // mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib. 
    attachments: true, // download attachments as they are encountered to the project directory 
    attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 
});

mailListener.start();

mailListener.on("server:connected", function () {
    console.log("Mail listener initialized");
});

mailListener.on("error", function (err) {
    console.log(err);
});

mailListener.on("server:disconnected", function () {
    console.log("Mail Listener disconnected!");
});

mailListener.on("mail", function (mail, seqno) {
    console.log(mail.subject);
    console.log(seqno);
});

// mailListener.on("body", function (body, seqno) {
//     console.log(body);
//     console.log(seqno);
// });