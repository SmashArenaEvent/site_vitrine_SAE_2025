/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4axe7qwaup9b827",
    "created": "2025-02-09 18:17:55.984Z",
    "updated": "2025-02-09 18:17:55.984Z",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4axe7qwaup9b827");

  return dao.deleteCollection(collection);
})
