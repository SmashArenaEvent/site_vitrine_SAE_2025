/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4yk46tb6z50q6x1",
    "created": "2025-01-31 08:48:27.107Z",
    "updated": "2025-01-31 08:48:27.107Z",
    "name": "ImagesSlider",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nhe3lzjn",
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
  const collection = dao.findCollectionByNameOrId("4yk46tb6z50q6x1");

  return dao.deleteCollection(collection);
})
