import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/state/user";

function ComponentRedux1() {
  const dispatcher = useDispatch();

  const handleClick = () => {
    dispatcher(createUser({ name: "Luciano", email: "lacosta@gmail.com" }));
  };
  const handleClickModify = () => {
    dispatcher(modifyUser({ name: "Gentleman", email: "lacosta@gmail.com" }));
  };
  const handleClickReset = () => {
    dispatcher(resetUser({ name: "Luciano", email: "lacosta@gmail.com" }));
  };

  return (
    <div>
      <button onClick={handleClick}>
        Enviar información con Redux, createUser
      </button>
      <button onClick={handleClickModify}>
        Enviar información con Redux, modifyUser
      </button>
      <button onClick={handleClickReset}>
        Enviar información con Redux, resetUser
      </button>
    </div>
  );
}
export default ComponentRedux1;
