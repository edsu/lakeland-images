import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add, subtract } from '../actions/counter'
import Images from '../components/Images'

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const actions = {
  add,
  subtract
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Images)
