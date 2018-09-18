const isPresent = ( object, paramsArray ) => {
       
    let process = () => {

        const keys = Object.keys(object);

        return ( paramsArray.filter(p_val => keys.indexOf(p_val)!= -1).length ) ? true : false ;

    };


    if( !Array.isArray(paramsArray) )
    {

	    paramsArray = (typeof(paramsArray) == "string") ?  paramsArray.split(",") : undefined;

        if ( !paramsArray )
        {
		    return false;
        }
        else
        {
		    return process();
	    }

    }
    else
    {  
	    return process();
	}

}

let is_present = _IS_PRESENT = isPresent; 

module.exports = {isPresent,is_present,_IS_PRESENT};