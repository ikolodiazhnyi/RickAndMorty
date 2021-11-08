import { useDispatch, useSelector } from "react-redux";
import { closeErrorPopUp } from "../../store/actions/actions";
import { getErrorMessage } from "../../store/selectors/selectors";
import "./PopUpError.css"

export default function PopUpError() {
  const message = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  return (
    <div className="popUp">
      <p>{message}</p>
      <button onClick={() => dispatch(closeErrorPopUp())}>&times;</button>
    </div>
  );
}
