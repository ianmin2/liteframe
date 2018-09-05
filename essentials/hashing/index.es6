exports.crypt = { 

	//SHA256 HYBRID ENCRYPT A STRING
	sha256h :  				(string,key="498w8dq89fer8t5y65y8h8hh:gr.,,mknkjloiup32yuyuidfjch@#@3254%$&R&^") => crypto.createHmac( 'SHA256', key ).update(str(string)).digest('base64')
	
	//MD5 ENCRYPT A STRING
	,md5 :  				(string) => crypto.createHash('md5').update( str(string) ).digest('hex')

	//SHA1 ENCRYPT A STRING
	,sha1 : 				(string) => crypto.createHash('sha1').update( str(string) ).digest('hex')

	//SHA256 ENCRTPT A STRING
	,sha256 : 				(string) => crypto.createHash('sha256').update( str(string) ).digest('hex')

	//BASE64 ENCODE A STRING
	,base64_encode : (			string) => new Buffer.from(str(string)).toString('base64')

	//BASE64 DECODE A STRING
	,base64_decode : 		(string) => new Buffer.from( new Buffer.from(str(string),'base64').toString('hex'), 'hex').toString('utf8')

	//GENERATE A CHECKSUM OF A BUFFER
	,checksum : ( stream ) => {
		
		return new Promise((resolve,reject)=>{

			let shaSum = crypto.createHash('md5');
			
			stream.on('data', ( data )  => {
				shaSum.update( data );
			});
			
			stream.on('end', () => {
				shaSum.digest('hex');
				resolve(shaSum);
	
			});
			
			stream.on('error', reject);

		});
		
	}

};