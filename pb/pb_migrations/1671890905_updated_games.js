migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2is2iicsglrqovm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjvq1tsx",
    "name": "releaseDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2is2iicsglrqovm")

  // remove
  collection.schema.removeField("cjvq1tsx")

  return dao.saveCollection(collection)
})
