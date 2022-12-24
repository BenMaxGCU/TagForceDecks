migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4edwknci",
    "name": "deckCreator",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // remove
  collection.schema.removeField("4edwknci")

  return dao.saveCollection(collection)
})
