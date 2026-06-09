import { tableClient } from "../config/azureTable.js";

const PARTITION_KEY = "whatsnew";

async function getAllEntities() {
  const results = [];

  for await (const entity of tableClient.listEntities()) {
    if (entity.partitionKey === PARTITION_KEY) {
      results.push(entity);
    }
  }

  return results.sort(
    (a, b) => Number(a.id) - Number(b.id)
  );
}

async function reIndex() {
  const entities = await getAllEntities();

  for (const entity of entities) {
    await tableClient.deleteEntity(
      PARTITION_KEY,
      entity.rowKey
    );
  }

  for (let i = 0; i < entities.length; i++) {
    const id = i + 1;

    await tableClient.createEntity({
      partitionKey: PARTITION_KEY,
      rowKey: String(id),
      id,
      Title: entities[i].Title,
      link: entities[i].link || ""
    });
  }
}

export async function getWhatsNew(req, res) {
  try {
    const entities = await getAllEntities();

    const response = entities.map((item) => ({
      id: item.id,
      title: item.Title,
      link: item.link || null
    }));

    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function createWhatsNew(req, res) {
  try {
    const { title, link } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required"
      });
    }

    const entities = await getAllEntities();

    const nextId = entities.length + 1;

    const entity = {
      partitionKey: PARTITION_KEY,
      rowKey: String(nextId),
      id: nextId,
      Title: title,
      link: link || ""
    };

    await tableClient.createEntity(entity);

    res.status(201).json(entity);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateWhatsNew(req, res) {
  try {
    const { id } = req.params;

    const { title, link } = req.body;

    const entity = {
      partitionKey: PARTITION_KEY,
      rowKey: String(id),
      id: Number(id),
      Title: title,
      link: link || ""
    };

    await tableClient.updateEntity(
      entity,
      "Merge"
    );

    res.json({
      message: "Updated successfully"
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteWhatsNew(req, res) {
  try {
    const { id } = req.params;

    await tableClient.deleteEntity(
      PARTITION_KEY,
      String(id)
    );

    await reIndex();

    res.json({
      message:
        "Deleted successfully and IDs reindexed"
    });
  } catch (error) {
    res.status(500).json(error);
  }
}