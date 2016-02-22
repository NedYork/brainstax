var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { front: "", back: "", cardFile: null, asd: false, deck_id: this.props.deckId };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createCard(this.state, function() {
      this.setState({ front: "", back: "", deck_id: this.props.deckId });
    }.bind(this));
    ApiUtil.fetchCards(this.props.deckId);
  },

  handleChange: function(e) {
    this.setState({ title: e.target.value });
  },

  handleUpload: function(e) {
    e.preventDefault();
    var formData = new FormData();

    formData.append("cards[file]", this.state.cardFile);
    formData.append("deck_id", this.state.deck_id);

    ApiUtil.massCreateCards(formData);
    ApiUtil.fetchCards(this.props.deckId);
  },

  uploadSampleDeck: function(e) {
    e.preventDefault();
    this.setState({asd: true });
    ApiUtil.getSampleFor(this.state.deck_id);
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function() {
      this.setState({ cardFile: file });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ cardFile: null });
    }
  },

  render: function() {
    return (
      <div className="add-card-form">
        <h1>Add New Card to Deck</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Front
            <input type="text" placeholder={'e.g. front'} valueLink={this.linkState('front')} />
          </label>
          <br></br>
          <label> Back
            <input type="textarea" placeholder={'e.g. back'} valueLink={this.linkState('back')} />
          </label>

          <button>Save</button>

        </form>
        <hr></hr>

        <form onSubmit={this.handleUpload}>
          <label>
            <h1>Upload cards</h1>
          </label>

          <input type="file" onChange={this.changeFile} />
          <button>Submit</button>
        </form>

        <hr></hr>

        <h8> Try out the upload function! Create a CSV file on excel or Click "Let's Play" to upload our StarWars trivia pack to test your StarWars chops.</h8>
        <button className="sample" onClick={this.uploadSampleDeck} disabled={this.state.asd}> Let's Play </button>
      </div>
    );
  }
});
