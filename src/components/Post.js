import React from 'react';
import PropTypes from 'prop-types';

import { Platform, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
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
  title: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold"
  },
  author: {
    color: "#999",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#EEE",
    paddingBottom: 10,
  },
  content: {
    color: "#666",
    paddingTop: 10
  },
});

const Post = ({
  style, title, author, content,
}) => {
  let containerStyles;
  if (style) {
    containerStyles = [styles.container, style];
  } else {
    containerStyles = styles.container;
  }
  return (
    <View style={containerStyles}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

Post.defaultProps = {
  style: null,
};

Post.propTypes = {
  style: PropTypes.number,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
