function generateList() {
  const locallist = fishList;
  let finalHtml = '';
  locallist.forEach((fishObj) =>{
	  let producthtml = `
	  <div class="product">
              <div class="product-img"> <img src="./img/crab.jpg" alt=""></div>
              <div class="product-content">
                <h3>${fishObj.name}</h3>
                <div class="price-box">  <span class="price">${fishObj.price}</span> </div>
              </div>
            </div>
			`;
	  finalHtml+=producthtml;
  })
  document.getElementById('listOfFish').innerHTML = finalHtml;
}
generateList();