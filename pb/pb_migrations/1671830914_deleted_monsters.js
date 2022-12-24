migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6xod0kkzx4lgcx3");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6xod0kkzx4lgcx3",
    "created": "2022-12-23 21:25:48.728Z",
    "updated": "2022-12-23 21:25:48.728Z",
    "name": "monsters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tepq63ys",
        "name": "cardTitle",
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
        "id": "s5vgrhdn",
        "name": "cardDescription",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1000,
          "pattern": ""
        }
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
})
