$(() => {
  $('.tooltipped').tooltip({ delay: 50 })
  $('.modal').modal()

  //TODO: Adicionar el service worker
  
  // Init Firebase nuevamente
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();