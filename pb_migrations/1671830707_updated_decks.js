migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49uxnvdayn5ut2r")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
