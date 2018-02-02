//@ -- Dropped mailgun IN favor of the more robust nodemailer module
Object.assign(global, { mail : require("nodemailer") });

console.log( "\n✔".succ + "  Email Sending Essentials loaded. ".info );