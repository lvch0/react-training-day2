import { useGentlemanContext } from "../context/gentleman.context";

function ComponentContext() {
  const { setGentlemanContextValue } = useGentlemanContext();

  const handleClick = () => {
    setGentlemanContextValue("Hola mi ciela");
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar información por context</button>
    </div>
  );
}
export default ComponentContext;
