import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = () => {
  return {
  }
}

const actions = {
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
