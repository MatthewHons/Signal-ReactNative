import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Signal chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
