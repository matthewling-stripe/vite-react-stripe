const OrderSummary = () => {

  return(
    <div>
      <h1 class="mb-5 font-semibold text-2xl font-sans text-indigo-600">Order Summary</h1>
      <ul class=" text-gray-600 font-light list-disc list-inside">
        <li>Llama food x 2</li>
        <li>Llama Bedding x 1</li>
        <li>Llama lamps x 3</li>
      </ul>
      <div class="mt-10 border-gray-300 border-t-2 pt-2 text-gray-600">
        Total: &euro; 10.00
      </div>
    </div>
  );
};

export default OrderSummary;
