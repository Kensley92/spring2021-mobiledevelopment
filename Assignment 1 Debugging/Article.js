///article class
class Article {
/// Constructor for Title, Author and Text
  constructor(title, author, text) {
    ///Prop for Title
    this.props = {};
    ///Prop for Author
    this.props.author = author;
    ///Prop for Text
    this.props.content = text;
  }
  
///Render's text onto console
render (){
    return `
      <Article>
        <Title>"Debugging Assignment 1"</Title>
        <Author>"Kensley Strong"</Author>
        <Text>"This is an example article!"t</Text>
      </Article>`;
  }
}
module.exports = Article;

