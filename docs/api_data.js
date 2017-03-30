define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "login",
    "group": "Autenticacao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username/login do utilizador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "volum/routes/auth.js",
    "groupTitle": "Autenticacao"
  },
  {
    "type": "post",
    "url": "/create",
    "title": "Registar",
    "name": "register",
    "group": "Autenticacao",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username/login do utilizador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "JPEG",
            "optional": true,
            "field": "photo",
            "description": "<p>foto de perfil</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "volum/routes/auth.js",
    "groupTitle": "Autenticacao"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "volum/docs/main.js",
    "group": "C__Users_Pedro_desktop_volum_docs_main_js",
    "groupTitle": "C__Users_Pedro_desktop_volum_docs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/search",
    "title": "Pesquisar",
    "group": "Geral",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Termo a pesquisar</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "volum/index.js",
    "groupTitle": "Geral",
    "name": "GetSearch"
  },
  {
    "type": "get",
    "url": "/profile/:id",
    "title": "Retornar Perfil",
    "name": "getProfile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do user</p>"
          }
        ]
      }
    },
    "group": "Perfil",
    "version": "0.0.0",
    "filename": "volum/routes/users.js",
    "groupTitle": "Perfil"
  },
  {
    "type": "post",
    "url": "/vols/:id/comments",
    "title": "Comentar Voluntariado",
    "name": "commentVol",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "volum/routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/:id/comments",
    "title": "Apagar Voluntariado",
    "name": "deleteVol",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID do Vol</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "volum/routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/:id/comments",
    "title": "Retornar Comentários",
    "name": "getVolComments",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "volum/routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols",
    "title": "Inserir Voluntariado",
    "name": "insertVol",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Voluntariado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Descrição do Voluntariado</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "volum/routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols",
    "title": "Listar todos os voluntariados",
    "name": "listVols",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "volum/routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/:id/comments",
    "title": "Recuperar Voluntariado",
    "name": "undeleteVol",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID do Vol</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "volum/routes/vols.js",
    "groupTitle": "Voluntariados"
  }
] });
