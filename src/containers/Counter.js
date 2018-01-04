import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add, subtract } from '../actions/counter'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

console.log(add, subtract)

const actions = {
  add,
  subtract
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
