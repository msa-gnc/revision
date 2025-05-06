import Swal from 'sweetalert2';

const notify = (msg, icon) => {
    return Swal.fire({
        title: 'Coin App!',
        text: msg, // mesajı dinamik olarak çağırmak için
        icon: icon,
        confirmButtonText: 'OK'
      })
}

export default notify