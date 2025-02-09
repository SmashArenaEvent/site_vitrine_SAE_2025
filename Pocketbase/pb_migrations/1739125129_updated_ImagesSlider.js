/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4yk46tb6z50q6x1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wixhoe0r",
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
  const collection = dao.findCollectionByNameOrId("4yk46tb6z50q6x1")

  // remove
  collection.schema.removeField("wixhoe0r")

  return dao.saveCollection(collection)
})
