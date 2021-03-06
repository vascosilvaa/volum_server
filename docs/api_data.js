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
    "filename": "./routes/auth.js",
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
    "filename": "./routes/auth.js",
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
    "filename": "./desktop/volum/main.js",
    "group": "C__Users_Pedro_desktop_volum_desktop_volum_main_js",
    "groupTitle": "C__Users_Pedro_desktop_volum_desktop_volum_main_js",
    "name": ""
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
    "filename": "./docs/main.js",
    "group": "C__Users_Pedro_desktop_volum_docs_main_js",
    "groupTitle": "C__Users_Pedro_desktop_volum_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/chat/:id",
    "title": "Mandar Mensagem",
    "name": "createConv",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do user (url)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_user",
            "description": "<p>ID do user (body)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem (body)</p>"
          }
        ]
      }
    },
    "group": "Chat",
    "version": "0.0.0",
    "filename": "./routes/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/chat/:id",
    "title": "Criar Conversa",
    "name": "createConv",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do user (url)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_user",
            "description": "<p>ID do user (body)</p>"
          }
        ]
      }
    },
    "group": "Chat",
    "version": "0.0.0",
    "filename": "./routes/chat.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/chat/:id",
    "title": "Listar Conversas",
    "name": "getConversations",
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
    "group": "Chat",
    "version": "0.0.0",
    "filename": "./routes/chat.js",
    "groupTitle": "Chat"
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
    "filename": "./index.js",
    "groupTitle": "Geral",
    "name": "GetSearch"
  },
  {
    "type": "get",
    "url": "/notifications/:id/not-read/count",
    "title": "Contagem das notificações não lidas",
    "name": "listNotificationCount",
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
    "group": "Notifications",
    "version": "0.0.0",
    "filename": "./routes/notifications.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "get",
    "url": "/vols",
    "title": "Listar todas as notificações",
    "name": "listNotifications",
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
    "group": "Notifications",
    "version": "0.0.0",
    "filename": "./routes/notifications.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "get",
    "url": "/notifications/:id/requests/not-read/count",
    "title": "Contagem dos pedidos não lidos",
    "name": "listRequestCount",
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
    "group": "Notifications",
    "version": "0.0.0",
    "filename": "./routes/notifications.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "post",
    "url": "/vols",
    "title": "Contagem dos pedidos não lidos",
    "name": "listRequestCount",
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
    "group": "Notifications",
    "version": "0.0.0",
    "filename": "./routes/notifications.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "post",
    "url": "/vols",
    "title": "Contagem dos pedidos não lidos",
    "name": "listRequestCount",
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
    "group": "Notifications",
    "version": "0.0.0",
    "filename": "./routes/notifications.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "get",
    "url": "/notifications/:id/requests",
    "title": "Listar todos os Pedidos",
    "name": "listRequests",
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
    "group": "Notifications",
    "version": "0.0.0",
    "filename": "./routes/notifications.js",
    "groupTitle": "Notifications"
  },
  {
    "type": "get",
    "url": "/profile/:id",
    "title": "Retornar os meus Vols",
    "name": "getMyVols",
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
    "filename": "./routes/users.js",
    "groupTitle": "Perfil"
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
    "filename": "./routes/users.js",
    "groupTitle": "Perfil"
  },
  {
    "type": "get",
    "url": "/profile/:id",
    "title": "Retornar Vols em que participei",
    "name": "getVols",
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
    "filename": "./routes/users.js",
    "groupTitle": "Perfil"
  },
  {
    "type": "get",
    "url": "/profile/:id/follow",
    "title": "Seguir",
    "name": "getVols",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do user</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_user",
            "description": "<p>ID do user 2</p>"
          }
        ]
      }
    },
    "group": "Perfil",
    "version": "0.0.0",
    "filename": "./routes/users.js",
    "groupTitle": "Perfil"
  },
  {
    "type": "get",
    "url": "/vols/:id/applies/aceitar",
    "title": "Aceitar User",
    "name": "accept",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do vol</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_user",
            "description": "<p>ID do user</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/:id/apply",
    "title": "Candidatar a Voluntariado",
    "name": "apply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_user",
            "description": "<p>ID do user</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/:id/checkState",
    "title": "Verifica o estado do vol para o user especifico",
    "name": "checkState",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do vol</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_user",
            "description": "<p>ID do user</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/:id/comment",
    "title": "Comentar Voluntariado",
    "name": "commentVol",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>id do vol ( url)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "id_user",
            "description": "<p>id_user ( body)</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "message",
            "description": "<p>message (body)</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
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
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/:id/dislike",
    "title": "dislike",
    "name": "dislike",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do vol</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/:id/applies/confirmed",
    "title": "Listar Candidatos",
    "name": "getCandidates",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/:id/applies/confirmed",
    "title": "Listar Confirmados",
    "name": "getConfirmed",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/:id/comments",
    "title": "Retornar Comentários",
    "name": "getVolComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>id_vol</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/:id/like",
    "title": "Like",
    "name": "like",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do vol</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/:id/likes/count",
    "title": "Count dos lIkes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do vol</p>"
          }
        ]
      }
    },
    "name": "listLikeCount",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/:id/likes/count",
    "title": "Listar quem fez like",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do vol</p>"
          }
        ]
      }
    },
    "name": "listLikes",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/:id",
    "title": "Listar Especifico",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>ID do vol</p>"
          }
        ]
      }
    },
    "name": "listVol",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols",
    "title": "Listar todos os voluntariados",
    "name": "listVols",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "get",
    "url": "/vols/categories'",
    "title": "Listar Categorias",
    "name": "listVols",
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  },
  {
    "type": "post",
    "url": "/vols/",
    "title": "Novo Voluntariado",
    "name": "newVol",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>nome</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "desc",
            "description": "<p>Descriçao</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "photo_1",
            "description": "<p>Descriçao</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "long",
            "description": "<p>Longitude</p>"
          }
        ]
      }
    },
    "group": "Voluntariados",
    "version": "0.0.0",
    "filename": "./routes/vols.js",
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
    "filename": "./routes/vols.js",
    "groupTitle": "Voluntariados"
  }
] });
