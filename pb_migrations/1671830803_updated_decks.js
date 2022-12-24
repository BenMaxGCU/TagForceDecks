migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g8kmztzp",
    "name": "monster",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "6xod0kkzx4lgcx3",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // remove
  collection.schema.removeField("g8kmztzp")

  return dao.saveCollection(collection)
})
