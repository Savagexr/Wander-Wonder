import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Card from './Card';
import Theme from '../config/Theme';
import Guides from "../assets/data/Guides"

export default class Favourites extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      likedPosts: [],
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  componentDidMount() {
    // Filter guides by their liked
    const likedGuides = Guides.filter(guide => guide.liked)
    this.setState({
      likedPosts: likedGuides
    })
  }

  handleSearch(searchQuery) {
    const filteredGuides = Guides.filter(guide => {
      if (guide.liked && guide.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())) {
        return guide;
      }
    })

    this.setState({
      searchQuery: searchQuery,
      likedPosts: filteredGuides
    })

  }

  handleLike(postIndex) {

    // TODO: Fix the algorithm to combine both statements into one
    const findPostAndToggleLike = this.state.likedPosts.map((guide, index) => {

      // Toggle the like on the index with postIndex
      if (index == postIndex) {
        guide.liked = !guide.liked;
      }
      return guide;
    })

    this.setState({ likedPosts: findPostAndToggleLike.filter(guide => guide.liked) })
  }

  renderNoGuide() {
    return (
      <Text style={styles.defaultText}>None favourites found! Start pressing the heart icon, and they'll appear here!</Text>
    )
  }

  handleChangeText(inputText) {
    this.handleSearch(inputText)
  }

  render() {
    return (
      <View style={{ flex: 1, ...styles.backgroundStyle }}>

        <Text style={{ ...styles.defaultText, fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>Favourites</Text>
        <Text style={{ color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>Check in with your favourited guides!</Text>


        {/* Input box for search */}
        <TouchableOpacity style={{ backgroundColor: "rgba(255,255,255,0.3)", height: 45, justifyContent: "center", borderRadius: 10, marginBottom: 10 }}>
          <TextInput placeholder='Search your favourites...' placeholderTextColor={"rgba(255,255,255,0.6)"} style={{ color: "white", padding: 10 }} onChangeText={this.handleChangeText}></TextInput>
        </TouchableOpacity>

        {/* Display card */}
        <FlatList data={this.state.likedPosts} numColumns={2} renderItem={
          ({ item, index }) =>
            <Card place={item}
              index={index}
              handleLike={this.handleLike} />
        } keyExtractor={(item, index) => index} ListEmptyComponent={this.renderNoGuide} />
      </View >
    );
  }
};

const styles = StyleSheet.create({
  backgroundStyle: {
    padding: 20,
    backgroundColor: Theme.backgroundColor,
  },

  defaultText: {
    color: "white",
  },
});