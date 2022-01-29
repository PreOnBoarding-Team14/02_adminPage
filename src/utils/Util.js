class Util {
  /*
   * type : aler, confirm
   * default - alert
   */
  getAlertMsg = (type, msg) => {
    switch (type) {
      case 'confirm':
        window.confirm(msg);
        break;
      default:
        alert(msg);
        break;
    }
  };
}

export default new Util();
