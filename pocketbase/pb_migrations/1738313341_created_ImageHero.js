/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4axe7qwaup9b827",
    "created": "2025-01-31 08:49:01.730Z",
    "updated": "2025-01-31 08:49:01.730Z",
    "name": "ImageHero",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hn4tryuj",
        "name": "Image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4axe7qwaup9b827");

  return dao.deleteCollection(collection);
})
