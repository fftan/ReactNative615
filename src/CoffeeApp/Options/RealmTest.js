import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, TextInput } from 'react-native';

// Components
import realm, { updateTodoList, insertNewTodoList, selectAllTodoLists, deleteTodoList, deleteAllTodoLists } from '../database/allSchema';

// Stylesheets
import styles, { realmTest } from './styles';
import MainStyles from '../Setting/MainStyles';

// Variables


export default class RealmTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
      isVisible: false,
      id: 0,
      name: '',
      isAddNew: false,
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    selectAllTodoLists().then((todoLists) => {
      this.setState({ todoLists });
    }).catch((err) => {
      this.setState({ todoLists: [] });
    })
  }

  showModalAddItem = () => {
    this.setState({ isVisible: true, isAddNew: true });
  }

  onChangeText = (text) => {
    this.setState({ name: text });
  }

  onSubmit = () => {
    const { isAddNew, name } = this.state;
    if (isAddNew === true) {
      const newTodoList = {
        id: Math.floor(Date.now() / 1000),
        name,
        createDate: new Date(),
      };
      insertNewTodoList(newTodoList).then().catch((err) => alert(`${err}`))
      this.setState({ isVisible: false });
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={MainStyles.buttonOfList}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  render = () => {
    const { todoLists, isVisible, id, name } = this.state;
    return (
      <View style={realmTest.container}>
        <View style={realmTest.tabBar}>
          <TouchableOpacity style={realmTest.btnAdd} onPress={() => this.showModalAddItem()}>
            <Text style={[MainStyles.h3, { color: '#fff' }]}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todoLists}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal visible={isVisible}>
          <View style={realmTest.viewForm}>
            {/* <TextInput
              placeholder='Enter id'
              placeholderTextColor='#eeeeee'
              style={realmTest.input}
              autoCorrect={false}
              autoCapitalize={false}
              onChangeText={(text) => this.onChangeText(text)}
              value={id}
            /> */}
            <TextInput
              placeholder='Enter id'
              placeholderTextColor='#eeeeee'
              style={realmTest.input}
              autoCorrect={false}
              autoCapitalize={false}
              onChangeText={(text) => this.onChangeText(text)}
              value={name}
            />
            <TouchableOpacity style={realmTest.btnSubmit} onPress={() => this.onSubmit()}>
              <Text style={[MainStyles.h3, { color: '#fff' }]}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
