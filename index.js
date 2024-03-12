const genId1 = require('wbtq_xid');
const genId2 = require('nbna_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|JNJoLwdKqC|' + genId2()).digest('base64');
}


module.exports = generateKey;
