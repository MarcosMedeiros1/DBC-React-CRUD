import styles from "./Modal.module.css";

const Modal = ({ onCancel = () => { }, onConfirm = () => { }, children }) => {

  const handleOutsideClick = (event) => {
    if (event.target.id === "modal") {
      onCancel();
    }
  }

  return (
    <div id="modal" onClick={handleOutsideClick} className={styles.modal}>
      <div>
        <div className={styles.content}>
          {children}
        </div>
        <div>
          <button onClick={onCancel} className={styles.cancel}>Cancelar</button>
          <button onClick={onConfirm} className={styles.confirm}>Confirmar</button>
        </div>
      </div>
    </div>
  )
}
export default Modal