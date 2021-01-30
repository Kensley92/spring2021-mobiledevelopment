const Article = require("./Article.js");

class Component extends Article {
///Super Constructor
  constructor(title, author, text) {
    super(title, author, text);
  }
  ///Renders Title, Author, Text
  render() {
      return `
        <Article>
          ${this.props.title.render()}
          <span>${this.props.author}</span>
          <div>${this.props.text}</div>
        </Article>`;
  }

}

module.exports =  Component;
