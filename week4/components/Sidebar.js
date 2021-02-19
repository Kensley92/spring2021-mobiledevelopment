import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';
    
    this.props.menu.forEach( (item) => {
      responseHTML += '<li>' + item + '</li>' ;
      //wrapping the items in a list
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
     
      });
    responseHTML = '<ul>' + responseHTML + '</ul>' ;
    //wrapping the response in a ul 
    return responseHTML;
  }
}

export default Sidebar;