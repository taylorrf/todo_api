define({ "api": [  {    "type": "all requests",    "url": "api/",    "title": "API Authentication",    "name": "Authenticate",    "group": "Authentication",    "description": "<p>User authentication is required for all requests.</p> <p>To identify an user, you should provide the 'firebase_key' key on all headers.</p> <p>Please, always provide an valid 'firebase_key' key to get a successful response.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "firebase_key",            "description": "<p>Unique Key provided by firebase.google.com service.</p>"          }        ]      },      "examples": [        {          "title": "Header-Example:",          "content": "{\n  \"firebase_key\": \"123123123\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "todo_api/routes/users.js",    "groupTitle": "Authentication"  },  {    "type": "put",    "url": "api/item/:id/checked",    "title": "Check an Item",    "name": "CheckItem",    "group": "Item",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of an Item.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "todo_api/routes/items.js",    "groupTitle": "Item"  },  {    "type": "post",    "url": "api/item/",    "title": "Create a new Item",    "name": "CreateItem",    "group": "Item",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Item Description.</p>"          },          {            "group": "Parameter",            "type": "Integer",            "optional": false,            "field": "list_id",            "description": "<p>ID of the List related with the Item</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"description\": \"to do\",\n  \"list_id\": \"1\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n   {\n     \"id\":\"1\",\n     \"type\":\"items\",\n     \"attributes\":\n       {\n         \"description\":\"new to-do\",\n         \"list_id\":1,\n         \"checked\":false,\n         \"createdAt\":\"2016-10-20T19:36:58.751Z\",\n         \"updatedAt\":\"2016-10-20T19:36:58.751Z\"\n       }\n   }\n   ]\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "todo_api/routes/items.js",    "groupTitle": "Item"  },  {    "type": "delete",    "url": "api/item/:id",    "title": "Delete an Item",    "name": "DeleteItem",    "group": "Item",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of an Item.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "todo_api/routes/items.js",    "groupTitle": "Item"  },  {    "type": "get",    "url": "api/items/:id",    "title": "Get all Items from a List",    "name": "GetItems",    "group": "Item",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of a List.</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://localhost:3000/api/items/2",        "type": "curl"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Description of the Item.</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "checked",            "description": "<p>Item was already done? True/False</p>"          },          {            "group": "Success 200",            "type": "Integer",            "optional": false,            "field": "list_id",            "description": "<p>ID of the List related with the Item</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "createdAt",            "description": "<p>Date when the Item was created</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of the last Item update</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n   {\n     \"id\":\"1\",\n     \"type\":\"items\",\n     \"attributes\":\n       {\n         \"description\":\"to be done\",\n         \"list_id\":1,\n         \"checked\":false,\n         \"createdAt\":\"2016-10-20T19:36:58.751Z\",\n         \"updatedAt\":\"2016-10-20T19:36:58.751Z\"\n       }\n   }\n   ]\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "todo_api/routes/items.js",    "groupTitle": "Item"  },  {    "type": "post",    "url": "api/list/",    "title": "Create a new List",    "name": "CreateList",    "group": "Lists",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>List title.</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"title\": \"to do\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Integer",            "optional": false,            "field": "id",            "description": "<p>List ID</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Title of the List.</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "createdAt",            "description": "<p>Date when the List was created</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of the last List update</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n   {\n     \"id\":\"1\",\n     \"type\":\"lists\",\n     \"attributes\":\n       {\n         \"title\":\"new awesome list\",\n         \"createdAt\":\"2016-10-20T19:36:58.751Z\",\n         \"updatedAt\":\"2016-10-20T19:36:58.751Z\"\n       }\n   }\n   ]\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "todo_api/routes/lists.js",    "groupTitle": "Lists"  },  {    "type": "delete",    "url": "api/list/:id",    "title": "Delete a List",    "name": "DeleteList",    "group": "Lists",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID of the List.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "todo_api/routes/lists.js",    "groupTitle": "Lists"  },  {    "type": "get",    "url": "api/lists",    "title": "Get all Lists",    "name": "GetLists",    "group": "Lists",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Integer",            "optional": false,            "field": "id",            "description": "<p>List ID</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Title of the List.</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "createdAt",            "description": "<p>Date when the List was created</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "updatedAt",            "description": "<p>Date of the last List update</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": \"1\",\n      \"type\": \"lists\",\n      \"attributes\": {\n        \"title\": \"Decluttering\",\n        \"createdAt\": \"2016-10-20T16:40:43.878Z\",\n        \"updatedAt\": \"2016-10-20T16:40:43.878Z\"\n      }\n    },\n    {\n      \"id\": \"2\",\n      \"type\": \"lists\",\n      \"attributes\": {\n        \"title\": \"Kids school\",\n        \"createdAt\": \"2016-10-20T16:43:01.269Z\",\n        \"updatedAt\": \"2016-10-20T16:43:01.269Z\"\n      }\n    }\n  ]\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "todo_api/routes/lists.js",    "groupTitle": "Lists"  },  {    "type": "post",    "url": "user",    "title": "Create a new User",    "name": "CreateUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firebase_key",            "description": "<p>Unique Key provided by firebase.google.com service.</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"firebase_key\": \"123123123\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n {\n   \"data\": {\n     \"id\": \"4\",\n     \"type\": \"users\",\n     \"attributes\": {\n       \"firebase_key\": \"123123123\",\n       \"updatedAt\": \"2016-10-20T22:53:14.430Z\",\n       \"createdAt\": \"2016-10-20T22:53:14.430Z\"\n     }\n   }\n }",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "todo_api/routes/users.js",    "groupTitle": "User"  }] });
