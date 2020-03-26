import Realm from 'realm';

export const TODOLIST_SCHEMA = 'TodoList';
export const TODO_SCHEMA = 'Todo';
export const TodoSchema = {
  name: TODO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int', //primary key
    name: { type: 'string', indexed: true },
    done: { type: 'bool', default: false },
  }
};

export const TodoListSchema = {
  name: TODOLIST_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int', //primary key
    name: 'string',
    createDate: 'date',
    todos: { type: 'list', objectType: TODO_SCHEMA },
  }
};

const databaseOptions = {
  path: 'todoListApp.realm',
  schema: [TodoListSchema, TodoSchema],
  schemaVersion: 0, //optional
};

// functions for todolists
export const insertNewTodoList = newTodoList => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      realm.create(TODOLIST_SCHEMA, newTodoList);
      resolve(newTodoList);
    })
  }).catch((err) => reject(err));
});

export const updateTodoList = todoList => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let itemToUpdate = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
      itemToUpdate.name = todoList.name;
      resolve();
    })
  }).catch((err) => reject(err));
});

export const deleteTodoList = todoListId => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let itemToDelete = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListId);
      realm.delete(itemToDelete);
      resolve();
    });
  }).catch((err) => reject(err));
});

export const deleteAllTodoLists = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let allItem = realm.objects(TODOLIST_SCHEMA);
      realm.delete(allItem);
      resolve();
    });
  }).catch((err) => reject(err));
});

export const selectAllTodoLists = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
    realm.write(() => {
      let allItem = realm.objects(TODOLIST_SCHEMA);
      resolve(allItem);
    });
  }).catch((err) => reject(err));
});

export default new Realm(databaseOptions);