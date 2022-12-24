migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2is2iicsglrqovm")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2is2iicsglrqovm")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
