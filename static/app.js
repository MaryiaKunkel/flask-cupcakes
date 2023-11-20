// $(".delete_cupcake").click(deleteCupcake);

// async function deleteCupcake() {
//   const id = $(this).data("id");
//   await axios.delete(`/api/cupcakes/${id}`);
//   $(this).parent.remove();
// }

async function getListOfCupcakes() {
  const res = await axios.get(`http://127.0.0.1:5000/api/cupcakes`);
  console.log(res);

  const cupcakes = res.data.cupcakes;
  for (let i = 0; i < cupcakes.length; i++) {
    $("ul").append(`<li>${cupcakes[i].flavor}</li>`);
  }
}
getListOfCupcakes();

function getNewCupcake() {
  const flavor = $("#flavor").val();
  const size = $("#size").val();
  const rating = $("#rating").val();
  const image = $("#image").val();

  axios.post("http://127.0.0.1:5000/api/cupcakes", {
    flavor: flavor,
    size: size,
    rating: rating,
    image: image,
  });
}

function updateCupcakeList() {
  // Clear the existing cupcake list
  $("ul").empty();
  // Retrieve and display the updated list of cupcakes
  getListOfCupcakes();
}

$("button").click(function () {
  getNewCupcake();
});
