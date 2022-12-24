migrate((db) => {
  const collection = new Collection({
    "id": "2is2iicsglrqovm",
    "created": "2022-12-23 21:39:33.412Z",
    "updated": "2022-12-23 21:39:33.412Z",
    "name": "games",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qzv8mo0c",
        "name": "gameTitle",
        "type": "text",
        "required": true,
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2is2iicsglrqovm");

  return dao.deleteCollection(collection);
})
