import '../assets/styles/footer.styl'
export default {
  data() {
    return {
      author: '无名氏'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>&copy; Written by {this.author}</span>
      </div>
    )
  }
}