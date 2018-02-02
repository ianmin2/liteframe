//!BASIC VALIDATION METHODS

//** VALIDATE EMAIL ADDRESSES
exports.isEmail  = exports.is_email = ( prospective_email ) => mailRegex.test( prospective_email );
    
//*VALIDATE TELEPHONE NUMBERS
exports.isTelephone = exports.is_telephone = ( prospective_telephone ) => telRegex.test(prospective_telephone);
    
//** VALIDATE USERNAMES
exports.isUsername= exports.is_username = ( prospective_username ) => userRegex.test( prospective_username );
    
//** VALIDATE PASSWORDS
exports.isPassword = exports.is_password = ( prospective_password ) => passRegex.test( prospective_password );