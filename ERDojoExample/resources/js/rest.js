/**
 * @author probert
 */

var baseUrl = "/cgi-bin/WebObjects/RESTExample.woa/-6006/ra/";

function fetchCompanies(targetNode){
	targetNode = targetNode.parentNode;
    var xhrArgs = {
        url: baseUrl + "Company.json",
        handleAs: "json",
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML : "Companies we fetched :"}), targetNode);
			var list = dojo.place(dojo.create('ul', {}), targetNode);
            for (var i = 0; i < data.length; i++) {
                dojo.place(dojo.create('li', { innerHTML: data[i].name }), list);                
            }
        },
        error: function(error){
            targetNode.innerHTML = "An unexpected error occurred: " + error;
        }
    }
    var deferred = dojo.xhrGet(xhrArgs);
}

function fetchPerson(targetNode){
	targetNode = targetNode.parentNode;
    var xhrArgs = {
        url: baseUrl + "Person/1.json",
        handleAs: "json",
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML : "Person :"}), targetNode);
			var list = dojo.place(dojo.create('ul', {}), targetNode);
            dojo.place(dojo.create('li', { innerHTML: "Name : " + data.name }), list);
            dojo.place(dojo.create('li', { innerHTML: "Company : " + data.company.name }), list);
            dojo.place(dojo.create('li', { innerHTML: "Current time : " + data.derivedCurrentTime }), list);
			if (data.pets != null) {
				dojo.place(dojo.create('li', { innerHTML: "Pets : " }), list);
				var petsList = dojo.place(dojo.create('ul', {}), list);
				for (var i = 0; i < data.pets.length; i++) {
					dojo.place(dojo.create('li', { innerHTML: data.pets[i].name }), petsList);       
				}
			}
        },
        error: function(error){
            targetNode.innerHTML = "An unexpected error occurred: " + error;
        }
    }
    var deferred = dojo.xhrGet(xhrArgs);
}

function updatePersonName(targetNode){
	var myData = { "name" : "Updated Name" };
    var xhrArgs = {
        url: baseUrl + "Person/1.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "Property updated"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPut(xhrArgs);
}

function updatePersonEmployer(targetNode){
	var myData = { "company": { "type":'Company', "id":2 } };
    var xhrArgs = {
        url: baseUrl + "Person/1.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "Property updated"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPut(xhrArgs);
}

function createNewPerson(targetNode){
	var myData = { "name" :'Andrew Schrag' };
    var xhrArgs = {
        url: baseUrl + "Person.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "New person created!"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPost(xhrArgs);
}

function createNewPersonWithEmployer(targetNode){
	var myData = { "name":'Andrew Schrag', "company": { "type":'Company', id:1 } };
    var xhrArgs = {
        url: baseUrl + "Person.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "New person created!"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPost(xhrArgs);
}

function createNewPersonWithNewEmployer(targetNode){
	var myData = { "name":'Andrew Schrag', "company": { "type":'Company', "name":'New Company' } };
    var xhrArgs = {
        url: baseUrl + "Person.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "New person created!"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPost(xhrArgs);
}

function updateLockedRelationship(targetNode){
	var myData = { "company": { "type":'Company', id:1, "name":'mDimension Technology' } };
    var xhrArgs = {
        url: baseUrl + "Person/1/lockedUpdate.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "Relationship updated"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPut(xhrArgs);
}

function changeLockedRelationship(targetNode){
	var myData = { "company": { "type":'Company', "id":2 } };
    var xhrArgs = {
        url: baseUrl + "Person/1/lockedUpdate.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "Relationship updated"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPut(xhrArgs);
}

function erxKeyFilter(targetNode){
	var myData = { "company": { "type":'Company', "id":1, "name":'Microsoft' } };
    var xhrArgs = {
        url: baseUrl + "Person/1/securityUpate.json",
		putData: dojo.toJson(myData),
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "Property updated"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrPut(xhrArgs);
}

function deleteCompany(targetNode){
    var xhrArgs = {
        url: baseUrl + "Company/2.plist",
        handleAs: "json",
		headers: { "Content-Type": "application/json"},
        load: function(data){
			dojo.place(dojo.create('p', { innerHTML: "Property updated"}), targetNode);
        },
        error: function(error){
            dojo.place(dojo.create('p', { innerHTML: "An unexpected error occurred: " + error }), targetNode);
        }
    }
    var deferred = dojo.xhrDelete(xhrArgs);
}