migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // remove
  collection.schema.removeField("fdd2aiaq")

  // remove
  collection.schema.removeField("x8q3trlw")

  // remove
  collection.schema.removeField("ucxonzzj")

  // remove
  collection.schema.removeField("g8kmztzp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "giditdxu",
    "name": "deckContents",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdd2aiaq",
    "name": "spells",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8q3trlw",
    "name": "traps",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ucxonzzj",
    "name": "extraDeck",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

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

  // remove
  collection.schema.removeField("giditdxu")

  return dao.saveCollection(collection)
})
