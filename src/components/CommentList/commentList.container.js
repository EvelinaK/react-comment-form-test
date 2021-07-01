import { connect } from "react-redux";
import operations from "../../redux/operations";
import { getVisibleComments } from "../../redux/selectors";
import CommentList from "./commentList";

const mapStateToProps = (state) => ({
  comments: getVisibleComments(state),
});

export default connect(mapStateToProps)(CommentList);
