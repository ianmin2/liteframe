const isPresent = ( object, paramsArray ) => {
        
	let retval = true;

	let process = function( ){
		
	    let keys = Object.keys(object)
	
	    paramsArray.forEach(function(param) {
		if( keys.indexOf(param) == -1 ){
			retval = false; 
		}
	    }, this);
	    
	    return retval;
	    
	}

	if( !Array.isArray(paramsArray) ){

	    paramsArray = (typeof(paramsArray) == "string") ?  paramsArray.split(",") : undefined;

	    if ( !paramsArray ){
		return false;
	    }else{
		return process();
	    }

	}else{          

	    return process();

	}

}

let is_present = isPresent; 

module.exports = {isPresent,is_present};
