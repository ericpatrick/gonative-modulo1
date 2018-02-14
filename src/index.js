import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevtoolsConfig';

import Post from 'components/Post';

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: "#333",
    paddingVertical: 15,
    backgroundColor: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
      },
      android: {
        elevation: 4,
      },
    }),
  },
  content: {
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: "#EE7777",
    flex: 1,
  },
});

export default class App extends Component {
  state = {
    appTitle: 'GoNative App',
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
      {
        id: 1,
        title: 'Aprendendo Layout CSS',
        author: 'Eric Patrick',
        content: 'Do mesmo modo, a necessidade de renovação processual pode nos levar a considerar a reestruturação das diversas correntes de pensamento.',
      },
      {
        id: 2,
        title: 'Debug com Reactotron',
        author: 'Jeff Lin',
        content: 'Ainda assim, existem dúvidas a respeito de como o desenvolvimento contínuo de distintas formas de atuação oferece uma interessante oportunidade para verificação dos modos de operação convencionais.',
      },
      {
        id: 3,
        title: 'Como integrar o Editor Config',
        author: 'Marcos Silva',
        content: 'Por outro lado, a necessidade de renovação processual garante a contribuição de um grupo importante na determinação dos paradigmas corporativos.',
      },
      {
        id: 4,
        title: 'A IDE Visual Studio Code',
        author: 'Alberto Monteiro',
        content: 'Percebemos, cada vez mais, que o novo modelo estrutural aqui preconizado ainda não demonstrou convincentemente que vai participar na mudança de alternativas às soluções ortodoxas.',
      },
    ],
  }
  renderPosts = (post, index) => {
    let el;
    if (index) {
      el = <Post isFirst key={post.id} {...post} />;
    } else {
      const style = StyleSheet.create({
        contanier: {
          marginTop: 20,
        },
      });
      el = <Post style={style.contanier} key={post.id} {...post} />;
    }
    return el;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.state.appTitle}</Text>
        <ScrollView style={styles.content}>
          {this.state.posts.map(this.renderPosts)}
        </ScrollView>
      </View>
    );
  }
}
