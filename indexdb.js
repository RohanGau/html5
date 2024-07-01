const request = indexedDB.open("myIndexDB", 1);
    request.onerror = function(event){
      console.log("error" + event.target.errorCode);
    }

    request.onsuccess = function(event) {
      var db = event.target.result;
      console.log("db :", db);
    }
    console.log("Hello world")
