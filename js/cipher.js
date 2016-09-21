function Cipher(){};   //密码器对象
Cipher.prototype = {
    constructor:cipher,
    rando:function(m){
        var num = '';
        var getrandomarray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for(var i = 0; i < m; i++) {
            var val = parseInt(Math.random()*35, 10);
            if(i === 0 && val === 0) {
                i--;
                continue;
            }
            num += getrandomarray[val];
        }
        return num;
    },
    md5:function(string){
        return md5(string);
    },
    getRSAkey:function(){   //该代码只会生成pkcs1,可能只有php中可以解开
        var crypt = new JSEncrypt();
        var pairkey = {
            public_key:crypt.getPublicKey(),
            private_key:crypt.getPrivateKey()
        }
        return pairkey;
    },
    RSAencrypt:function(publickey,string){
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(publickey,'10001');
        var encrypted = encrypt.encrypt(string);
        return encrypted;
    },
    RSAdecrypt:function(privatekey,string){
        var decrypt = new JSEncrypt();
        decrypt.setPrivateKey(privatekey,'10001');
        var uncrypted = decrypt.decrypt(string);
        return uncrypted;
    },
    AESencrypt:function(key,string){ 
        var iv  = CryptoJS.enc.Latin1.parse(key);  
        var encrypted = CryptoJS.AES.encrypt(string,iv,{iv:iv,mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});  
        var result = encrypted.toString();
        return result;    
    },
    AESdecrypt:function(key,string){
        var iv  = CryptoJS.enc.Latin1.parse(key); 
        var decrypted = CryptoJS.AES.decrypt(string,iv,{iv:iv,mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});  
        var result = decrypted.toString(CryptoJS.enc.Utf8);
        return result; 
    }
}