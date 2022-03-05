function copyToClipboard(execCopy){
    let val = "0x99459fE946B072E5211A6b01EA26BafABbf77aaa";
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('you have copied the Contract Address of Bully Inu')

  }  

