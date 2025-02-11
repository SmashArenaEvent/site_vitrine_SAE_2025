/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4axe7qwaup9b827")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ws6ynivx",
    "name": "Name",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("4axe7qwaup9b827")

  // remove
  collection.schema.removeField("ws6ynivx")

  return dao.saveCollection(collection)
})
