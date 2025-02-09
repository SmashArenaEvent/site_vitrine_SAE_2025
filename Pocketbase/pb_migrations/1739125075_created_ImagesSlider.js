/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4yk46tb6z50q6x1",
    "created": "2025-02-09 18:17:55.985Z",
    "updated": "2025-02-09 18:17:55.985Z",
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
  const collection = dao.findCollectionByNameOrId("4yk46tb6z50q6x1");

  return dao.deleteCollection(collection);
})
