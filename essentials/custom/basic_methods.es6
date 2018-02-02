
//**  MONTHS ARRAY
exports.monthArray = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//** VALIDATE WHETHER TWO GIVEN VALUES MATCH
exports.matches = ( val1, val2 ) => ( val1 === val2 );
    
//** TRANFORM NUMBER TO MONTH
exports.num2month = ( month_number ) => ( !isNaN(month_number) && (month_number <= monthArray.length) ) ? exports.monthArray[month_number] : "Invalid Month" ;
exports.getMonthName     = exports.num2month;
    
//** REMOVE DUPLICATES FROM ARRAY
exports.isUnique =  (array_ ) => {

    var ret_array = new Array();

    for (var a = array_.length - 1; a >= 0; a--) {

        for (var b = array_.length - 1; b >= 0; b--) {

            if(array_[a] == array_[b] && a != b){

                delete array_[b];

            }

        };

        if(array_[a] != undefined)

            ret_array.push(array_[a]);

    };

    return ret_array.reverse();

};
    
//** COUNT OCCURANCES IN AN ARRAY
exports.count = ( val, obj ) => {

    var cnt = 0;

    for( v in obj ){
        if( val === obj[v] ){
            cnt +=1;
        }
    }
    return cnt;

};

//** CONDITIONALLY TRANSFORM TO STRING
exports.str = ( obj ) => ( typeof(obj) === "object" ) ? JSON.stringify(obj) : obj ;

//** CONDITIONALLY TRANSFORM TO JSON
exports.json = ( obj ) => ( typeof(obj) === 'object' ) ? obj : JSON.parse( obj );

//** CLONE AN OBJECT
exports.clone = (obj) => JSON.parse( JSON.stringify( obj ) );
