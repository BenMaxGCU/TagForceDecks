migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // remove
  collection.schema.removeField("am6vddrn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "am6vddrn",
    "name": "monsters",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
