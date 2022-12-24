migrate((db) => {
  const collection = new Collection({
    "id": "49uxnvdayn5ut2r",
    "created": "2022-12-23 21:22:32.914Z",
    "updated": "2022-12-23 21:22:32.914Z",
    "name": "decks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "amahjnkl",
        "name": "deckTitle",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "senobtnf",
        "name": "associatedGame",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "am6vddrn",
        "name": "monsters",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "fdd2aiaq",
        "name": "spells",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "x8q3trlw",
        "name": "traps",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ucxonzzj",
        "name": "extraDeck",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r");

  return dao.deleteCollection(collection);
})
