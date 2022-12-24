migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // remove
  collection.schema.removeField("senobtnf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l0gqjv56",
    "name": "associatedGame",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "2is2iicsglrqovm",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("l0gqjv56")

  return dao.saveCollection(collection)
})
