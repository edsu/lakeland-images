import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Item from '../components/Images'

const mapStateToProps = (state, ownProps) => {
  return {
    itemId: ownProps.itemId
  }
}

const actions = {
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)
