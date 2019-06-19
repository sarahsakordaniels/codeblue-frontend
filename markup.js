
Swal.mixin({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2']
}).queue([
  {
    title: 'Record Shock',
    text: 'Energy Setting:',
    inputPlaceholder: 'Enter in Joules'
  },
  {
    title: 'Record Shock',
    text: 'Time of Shock:',
    inputValue: `${time}`
  }

]).then((result) => {
  if (result.value)
    this.setState({
    shockEnergy:result.value[0],
    shockTime:(result.value[1])
  })
    this.handleSubmit()
    if (result.value){
      Swal.fire({
      title: 'Shock Recorded',
      text: 'Continue compressions',
      confirmButtonText: 'Close'
    })
  }
  else {
    Swal.fire({
      title: 'No Shock Recorded',
      text: 'Continue compressions',
      confirmButtonText: 'Close'
    })
  }
})
